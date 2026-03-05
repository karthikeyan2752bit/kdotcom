# Security Audit Report

## Scope
- Framework and dependency posture (`package.json`, `package-lock.json`).
- Runtime framework configuration (`next.config.ts`).
- Client-side form handling (`components/sections/contact.tsx`).

## Findings and Remediation

### 1) Missing explicit HTTP security headers
**Risk**: Without explicit response headers, browsers get weaker protections against clickjacking, MIME sniffing, and policy abuse.

**Remediation implemented**:
- Added `X-Content-Type-Options: nosniff`.
- Added `X-Frame-Options: DENY`.
- Added `Referrer-Policy: strict-origin-when-cross-origin`.
- Added `Permissions-Policy` to disable camera, microphone, and geolocation.
- Added `Strict-Transport-Security` for HTTPS hardening.
- Added a baseline `Content-Security-Policy` for script/style/media/form restrictions.

### 2) Unrestricted portfolio contact form inputs
**Risk**: Unbounded and optional inputs increase abuse/spam exposure and reduce first-line validation quality before third-party processing.

**Remediation implemented**:
- Added required constraints to key fields (`name`, `email`, `message`).
- Added length constraints to all form inputs.
- Added autocomplete hints to reduce mistyped personal data.
- Added a hidden `_gotcha` honeypot field to reduce bot spam.
- Added explicit `acceptCharset="UTF-8"` for predictable request encoding.

## Dependency Audit
- Attempted to run `npm audit --omit=dev`, but the npm advisory endpoint returned `403 Forbidden` in this environment.

## Residual Risk / Follow-ups
- CSP currently includes `'unsafe-inline'` and `'unsafe-eval'` for compatibility; consider migrating to nonce/hash-based CSP to tighten script execution further.
- Contact workflow depends on Formspree service controls; enable CAPTCHA/challenge or rate-limits in provider settings for additional abuse resistance.
