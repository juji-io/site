import { securityHeaders } from "../security-headers.mjs";

export default async function (request, context) {
  const url = new URL(request.url);
  const path = url.pathname;
  const isDocsPath = path === "/docs" || path.startsWith("/docs/");
  const isPage = !path.endsWith("/") && !path.split("/").pop().includes(".");
  let response;
  if (isDocsPath && isPage) {
    url.pathname += "/";
    response = new Response(null, {
      status: 301,
      headers: { Location: url.toString() },
    });
  } else {
    response = await context.next({ sendConditionalRequest: true });
  }

  // Copy the response so headers remain writable, including upstream redirects.
  const securedResponse = new Response(response.body, response);
  for (const [name, value] of Object.entries(securityHeaders)) {
    securedResponse.headers.set(name, value);
  }
  return securedResponse;
}

// Netlify proxies do not add trailing slashes to extensionless page requests.
// Preserve the slash needed for MkDocs relative assets without redirecting files.
export const config = {
  path: ["/docs", "/docs/*"],
};
