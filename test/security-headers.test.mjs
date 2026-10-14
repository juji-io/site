import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import vm from "node:vm";
import { securityHeaders } from "../netlify/security-headers.mjs";

async function loadEdgeFunction(name) {
  const moduleUrl = new URL("../netlify/security-headers.mjs", import.meta.url).href;
  const source = (await readFile(new URL(`../netlify/edge-functions/${name}.js`, import.meta.url), "utf8"))
    .replace('"../security-headers.mjs"', JSON.stringify(moduleUrl));
  return import(`data:text/javascript;base64,${Buffer.from(source).toString("base64")}`);
}

const docs = await loadEdgeFunction("docs-trailing-slash");
const cms = await loadEdgeFunction("cms-security-headers");

test("public scripts prohibit inline execution, eval, and wildcard origins", () => {
  const policy = securityHeaders["Content-Security-Policy"];
  const scripts = policy.split(";").find((part) => part.trim().startsWith("script-src "));
  assert.ok(scripts);
  assert.doesNotMatch(scripts, /unsafe-inline|unsafe-eval|\*/);
  assert.match(policy, /object-src 'none'/);
});

test("documentation redirects retain their query strings and public headers", async () => {
  for (const path of ["/docs", "/docs/juji-studio?mode=help"]) {
    const request = new Request(`https://juji.io${path}`);
    const response = await docs.default(request, {
      next() { throw new Error("A slash redirect must not fetch upstream content"); },
    });
    const expected = new URL(request.url);
    expected.pathname += "/";
    assert.equal(response.status, 301);
    assert.equal(response.headers.get("location"), expected.href);
    for (const [name, value] of Object.entries(securityHeaders)) {
      assert.equal(response.headers.get(name), value);
    }
  }
});

test("documentation pages, assets, and errors retain their body and cache behavior", async () => {
  for (const [path, status] of [["/docs/", 200], ["/docs/assets/main.css", 200], ["/docs/missing/", 404], ["/docs/", 304]]) {
    const body = status === 304 ? null : "upstream content";
    const upstream = new Response(body, { status, headers: { "cache-control": "public,max-age=3600", etag: "original" } });
    const response = await docs.default(new Request(`https://juji.io${path}`), {
      async next(options) {
        assert.deepEqual(options, { sendConditionalRequest: true });
        return upstream;
      },
    });
    assert.equal(response.status, status);
    assert.equal(response.headers.get("cache-control"), "public,max-age=3600");
    assert.equal(response.headers.get("etag"), "original");
    assert.equal(await response.text(), body ?? "");
    assert.equal(response.headers.get("Content-Security-Policy"), securityHeaders["Content-Security-Policy"]);
  }
});

test("CMS eval compatibility is restricted to its edge routes", async () => {
  assert.deepEqual(cms.config.path, ["/admin", "/admin/*"]);
  const response = await cms.default(new Request("https://juji.io/admin/"), {
    async next() {
      return new Response("CMS page", { headers: { "Content-Security-Policy": securityHeaders["Content-Security-Policy"] } });
    },
  });
  const policy = response.headers.get("Content-Security-Policy");
  assert.equal(policy, securityHeaders["Content-Security-Policy"].replace("script-src 'self'", "script-src 'self' 'unsafe-eval'"));
  const scripts = policy.split(";").find((part) => part.trim().startsWith("script-src "));
  assert.doesNotMatch(scripts, /unsafe-inline/);
  assert.equal(await response.text(), "CMS page");
});

test("tracked links preserve normal navigation when the external tracker is unavailable", async () => {
  let click;
  const context = { document: { addEventListener(type, handler) { assert.equal(type, "click"); click = handler; } } };
  context.window = context;
  vm.runInNewContext(await readFile(new URL("../assets/js/google-analytics.js", import.meta.url), "utf8"), context);
  const link = { href: "https://calendly.com/davidjkim/juji-complementary-consult" };
  let prevented = false;
  const event = { target: { closest() { return link; } }, preventDefault() { prevented = true; } };
  click(event);
  assert.equal(prevented, false);
  let tracked;
  context.trackOutgoingAndRedirect = (element) => { tracked = element; };
  click(event);
  assert.equal(prevented, true);
  assert.equal(tracked, link);
});
