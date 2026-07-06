# ZBS Template Preflight Validator

The app also includes a rule-grounded Q&A assistant. On Vercel, configure
`OPENAI_API_KEY` as an environment variable; the key is only read by
`api/chat.js` and is never exposed to browser code. Optionally set
`OPENAI_MODEL`; otherwise the endpoint uses `gpt-4.1-mini`. If the provider
is unavailable, the browser falls back to a deterministic Rule Map answer.

Prototype for Challenge 2 of the ZBS Product Intern assignment.

## What it does

The tool reads ZBS template registration content, extracts user-visible fields from
`sections[]`, and runs pre-submission checks before moderation.

It supports:

- ZBS JSON-like / pseudo-JSON text from the provided Excel sample
- Sample templates from the provided Excel workbook
- Readiness score
- Issue severity
- Full moderation rule map
- Suggested fixes
- User-visible template preview with risky content highlights

## Official rule source

Rule map source: <https://zalo.solutions/news/quy-dinh-chung-khi-kiem-duyet-mau-tin-nhan-zbs/xdygqtrjjm97k28rsh07wr72>

The in-app rule map summarizes the official moderation scope into these groups:

- Purpose / tag classification: Transaction, Customer Care, Promotion, and tag priority.
- Recipient eligibility: prior transaction context, except authentication for new account creation.
- Identifier / context: customer name and transaction/business context identifiers.
- Text quality: spelling, Vietnamese accents, clear purpose, professional wording, no misleading claims.
- Logo / brand: logo quality, light/dark support, ownership or authorization.
- Parameters: valid parameter syntax, clear parameter prefixes, neutral salutation.
- CTA / buttons: links and phones in CTA only, safe destinations, no group or personal chat links, CTA-context fit.
- Template setup: voucher, payment, and rating purposes should use the correct template/component type.
- Payment and ownership: bank transfer information must belong to the OA-owning business or have proof.
- Legal / documents: third-party brand references and regulated industries may require supporting documents.
- Purpose-specific rules: transaction, customer-care, survey, birthday loyalty, holiday/Tet, and promotion rules.
- Sensitive industries: restricted promotion categories and required disclaimers for selected sectors.

## Automated check scope

- `ID_001` Identifier coverage
- `VAR_001` Parameter prefix
- `CTA_001` CTA placement
- `TXT_001` Text quality
- `PAY_001` Payment consistency
- `URL_001` Unsupported destination
- `TYPE_001` Template type fit
- `SEM_001` Semantic clarity

## How to run

Open `index.html` in a browser.

No backend is required.

## Product framing

This tool does not replace ZBS moderation. It improves template quality before
moderation by helping businesses detect avoidable issues earlier.
