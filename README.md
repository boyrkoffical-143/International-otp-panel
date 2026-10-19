# International OTP API Starter

This is a starter project for OTP verification for your own app/site. It is not a public SMS inbox or a way to retrieve other people's OTPs.

## Requirements
- Node.js 20+
- Neon PostgreSQL project
- Vercel account (optional for deployment)
- An authorized SMS verification provider for real SMS delivery

## Local setup
1. Install dependencies: `npm install`
2. Copy `.env.example` to `.env.local`.
3. Set `DATABASE_URL` to the Neon pooled connection string.
4. Set `OTP_HASH_SECRET` to a random secret of at least 32 characters.
5. In Neon SQL Editor, execute `sql/schema.sql`.
6. Run `npm run dev`.
7. Open `/api/health` to verify the database connection.

## Environment variables
- `DATABASE_URL`: Neon PostgreSQL connection string; keep secret.
- `OTP_HASH_SECRET`: a long random secret; keep secret.
- `OTP_PROVIDER=demo`: default. Does not send SMS.

## API endpoints
- `GET /api/health`: tests database connectivity.
- `POST /api/otp/send` JSON `{ "phone": "+14155552671" }`: creates a demo session but does not send SMS.
- `POST /api/otp/verify` JSON `{ "phone": "+14155552671", "code": "123456" }`: verifies an active code once an authorized provider integration is implemented.

## Production checklist
- Integrate an authorized SMS verification provider.
- Implement provider-side OTP verification where possible; do not log or return OTPs.
- Add rate limiting by IP and phone number, API-key authentication if exposing developer APIs, monitoring, and a privacy policy.
- Use only numbers and data you are authorized to process.
- Never commit `.env.local` or paste credentials into public chats.
