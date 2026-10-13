export default function (request) {
  const url = new URL(request.url);
  if (url.pathname === "/docs") {
    url.pathname = "/docs/";
    return Response.redirect(url, 301);
  }
}

// Regular Netlify redirect rules match /docs and /docs/ identically.
// Check the original request path to avoid redirecting /docs/ to itself.
export const config = {
  path: ["/docs", "/docs/"],
};
