# CultureRoute

An agentic cultural shortlist with Qloo evidence attached.

DRAFT — not submitted. Event: https://qloo.devpost.com/

## Inspiration

Cultural discovery is more useful when recommendations can be traced to public references rather than presented as unexplained personal predictions.

## What it does

Uses public books, films and artists as starting points for a cultural shortlist. An Eve agent calls the official Qloo harness workflow, returns the actual result, asks for clarification when needed and supports owned result export.

## How it was built

The official Qloo harness exec entry point runs in-process with a restricted environment and a fixed recommend workflow. Eve exposes a typed discovery tool; Next.js presents the assistant and result view, and PostgreSQL stores owned records.

## Challenges

A command-line integration must remain traceable and runnable after serverless packaging. The real harness is exercised by the packaging test, and user input is never executed as a shell command.

## What is verified

The standalone Eve and Next.js builds pass, including a real harness help invocation and ownership tests. Actual Qloo requests and agent runtime behavior remain to be verified with event credentials.

## Technical lessons

Cultural affinity is aggregate evidence, not a sensitive-trait inference or a guarantee about an individual. Ambiguous references need clarification.

## Next steps

Connect the event-issued Qloo key and AI Gateway authentication, demonstrate a real agent tool call, then capture the shortlist and its returned entity identifiers.

## Judging requirements

Combines the required Qloo workflow with an agent framework in a specific user task. The submission needs actual tool-call evidence and a working demo.

## Demo sequence

1. Ask the assistant for a shortlist from public cultural references.
2. Show a real Qloo tool invocation and returned entity IDs.
3. Clarify an ambiguous match and refine the result.
4. Export the record and show an honest provider error.

## Authorship

Prepared with ChatGPT/Codex assistance. Shared Next.js/workspace infrastructure originates in code-up-matrix/axios-fx-compliance-agent; the product module was developed on 27 October 2026. Shared code must be disclosed under the event’s reuse rules.

## Outstanding artifacts

Repository: https://github.com/code-up-matrix/cultureroute-devpost-2026. The deployed demo URL, required video, private judge access and entrant declarations must be completed from real outputs. No success receipt is claimed.
