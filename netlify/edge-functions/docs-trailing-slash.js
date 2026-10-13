export default function (request) {
  const url = new URL(request.url);
  const path = url.pathname;
  const isDocsPath = path === "/docs" || path.startsWith("/docs/");
  const isPage = !path.endsWith("/") && !path.split("/").pop().includes(".");
  if (isDocsPath && isPage) {
    url.pathname += "/";
    return Response.redirect(url, 301);
  }
}

// Netlify proxies do not add trailing slashes to extensionless page requests.
// Preserve the slash needed for MkDocs relative assets without redirecting files.
export const config = {
  path: ["/docs", "/docs/*"],
};
