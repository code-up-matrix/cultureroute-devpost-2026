# CultureRoute

Discover a cultural shortlist from public books, films and artists with the Qloo evidence attached.

Built for [Qloo Agentic Hackathon](https://qloo.devpost.com/).

## Run and verify

Node 24 is required. Run `npm ci`, configure .env.local from .env.example, apply `npm run db:migrate` to this product’s own Postgres database, and run `npm run check`. Use Eve to link/deploy the project as described in AGENTS.md.

Open / for the product, /access for signed workspace access and /history for saved work. /api/health reports configuration only; it is not proof of a successful provider call.

## Backend

Official Qloo harness recommend workflow exposed to Eve; Postgres.

Use a dedicated database, random SESSION_SECRET and CRON_SECRET of at least 32 characters, long independent access codes, and the exact HTTPS APP_ORIGIN. Never expose provider keys to the browser. The daily Vercel cleanup cron deletes expired 24-hour run records. Provider-side retention is separate.

This is controlled hackathon workspace access. Consumer-account recovery, general multi-tenant identity, operating budgets, backups and provider terms must be resolved before a broad public launch.

## Entry requirements and current status

Actual Qloo plus agentic framework integration, MIT source and demonstrable user flow. Event credential and live recording are missing.

Source is prepared and independently verified as recorded in verification.json when present. Cloud deployment, live sponsor proof, video and final submission are still pending. Repository: https://github.com/code-up-matrix/cultureroute-devpost-2026.

## Attribution

MIT-licensed. Product implementation was prepared with ChatGPT/Codex assistance on 27 October 2026. Shared foundation: code-up-matrix/axios-fx-compliance-agent, commit 4093cf1. The authored product and shared infrastructure must be disclosed accurately in the event submission.
