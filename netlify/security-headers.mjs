// Keep these values in sync with the /* header rule in netlify.toml.
// These hashes approve existing MkDocs inline scripts. Refresh them when its templates change.
const documentationScriptHashes = [
  "'sha256-FeOmnbhTL3Q4ryQnuS38sv7aj2C9a+71qVFzfBLgDvk='",
  "'sha256-tg5dkH4gVjEN1pJjOysVo8hsjLXjiqLKLyE1M8P4Ics='",
  "'sha256-Vjw+KujVHgxap0O4YcIDJXs9muWRITev4N723TOV/r8='",
  "'sha256-bmQVB0v88xJwx/1VXdJsSgmLFhytO4UwevTO4otTz3E='",
  "'sha256-B3qBNo+LUl8+ewZtabWLtXyxa3snCd+q6BpiRxCOzVI='",
  "'sha256-HTbGZIDWoP9s7kLQQPGz7W06DyCYfyGi0392V/TWaG0='",
  "'sha256-hb1ZUEmuOpFc6LNUOJFB4SJz5BH9jho2qQadrMEJHBQ='",
  "'sha256-tT/Lqn3YiZvlYA12M4PoGhPX7t7xOJdHrQYTXMayTJM='",
].join(" ");

const contentSecurityPolicy = [
  "default-src 'self' data: https:",
  "script-src 'self' https://code.jquery.com https://stackpath.bootstrapcdn.com https://www.googletagmanager.com https://identity.netlify.com https://unpkg.com https://juji.ai " + documentationScriptHashes,
  "style-src 'self' 'unsafe-inline' https:",
  "img-src 'self' data: blob: https:",
  "frame-src 'self' blob: https:",
  "worker-src 'self' blob:",
  "object-src 'none'",
  "base-uri 'self'",
  "frame-ancestors 'self'",
].join("; ");

export const securityHeaders = {
  "Strict-Transport-Security": "max-age=31536000; includeSubDomains",
  "Content-Security-Policy": contentSecurityPolicy,
  "X-Frame-Options": "SAMEORIGIN",
  "X-Content-Type-Options": "nosniff",
  "Referrer-Policy": "strict-origin-when-cross-origin",
  "Permissions-Policy": "geolocation=(),midi=(),sync-xhr=(),microphone=(),camera=(),magnetometer=(),gyroscope=(),fullscreen=(self),payment=()",
};
