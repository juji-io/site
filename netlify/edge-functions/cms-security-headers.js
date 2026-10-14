import { securityHeaders } from "../security-headers.mjs";

// The legacy CMS uses eval-based schema validation. Allow it only for the CMS,
// while retaining the public policy's script origins and inline-script restrictions.
const cmsPolicy = securityHeaders["Content-Security-Policy"].replace(
  "script-src 'self'",
  "script-src 'self' 'unsafe-eval'"
);

export default async function (request, context) {
  const response = await context.next({ sendConditionalRequest: true });
  const securedResponse = new Response(response.body, response);
  for (const [name, value] of Object.entries(securityHeaders)) {
    securedResponse.headers.set(name, value);
  }
  securedResponse.headers.set("Content-Security-Policy", cmsPolicy);
  return securedResponse;
}

export const config = {
  path: ["/admin", "/admin/*"],
};
