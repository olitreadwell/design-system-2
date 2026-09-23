# cfpb/design-system context
> refreshed 2026-09-24 | upstream default: main @ 60a8c6457

## Identity & policies
- upstream: cfpb/design-system, default branch `main`, primary language SCSS (JS/TS web components, Jekyll docs site). English-first (yes — all docs/UI in English).
- CLA/DCO: none. CONTRIBUTING says contributions released under CC0 public domain dedication (TERMS.md / LICENSE). No CLA bot, no signup required.
- AI-assisted PR policy: unstated (no AI disclosure requirement found; `bans_ai` false).
- signed commits required: no (branch protection has no required_signatures).
- PR template: `.github/PULL_REQUEST_TEMPLATE.md` (Additions/Removals/Changes/Testing/Screenshots/Notes/Checklist). Fill verbatim.
- external tracker: github.

## Conventions (verified from merged PRs)
- branch naming: `<author>_<underscore-description>` (e.g. `dave_update_deps`, `ans_fix_card_hover`), plus `dependabot/...` and `cms/pages/...`. Fork has previously used `docs/fix-...` (PR #7 `docs/fix-process-icons-link`).
- commit style: plain imperative, no conventional-commit prefix (e.g. "Fix broken process-icons link").
- test command: `yarn test` (vitest), `yarn lint`, `yarn typecheck`, `yarn build`. CI workflows: lint.yml, typecheck.yml, tests-unit.yml, e2e.yml, lighthouse.yml, pages.yml.
- how outside PRs get merged: active repo (2322 merged PRs), weekly pushes, maintainers anselmbradford/jenn-franklin/designlanguage/contolini/sonnakim. External merges common.

## Maintainer picture
- active maintainers: anselmbradford (2958), jenn-franklin (567), designlanguage (496), contolini (406), sonnakim (375).
- areas actively worked: deps bumps, Storybook/web-component testing refactor, Playwright migration, card/alert/expandable components.

## Issue-area health
- 61 open issues; mostly component bugs/feature requests (hero responsive, icon centering, file upload, breadcrumb proposal). No obvious trivial-docs issue.

## Gap ledger (dedupe — READ FIRST, never re-pick)
- `2026-08-05` self-found docs dead link (process-icons.js moved) — pr-opened-green (fork PR #1, branch docs/fix-process-icons-link-20260804-215245). ~7 other candidate broken links noted for future passes.
- `2026-08-05` (design-system-react) Introduction.mdx its->it's — pr-opened-substantive.

- `2026-09-09` trivial pass: bundled 10 genuine fixes across 7 files (4 dead links: process-icons.js, design-manual accessibility, components/elements, cfpb-icons.scss; 3 typos: seperate x3, cobebase, bulid; 1 stale command: yarn test:browser->yarn test) — pr-opened (fork design-system-2 PR #19, branch oli_fix_docs_links_typos). Fork CI: typecheck/lint/unit-tests green; playwright-run e2e fails to start Storybook webServer in fork env (same on context branch, no code changes) — fork artifact. Parallel worker's overlapping PR #18 closed, #19 kept canonical.
 (Log cfpb/design-system trivial PR #19 outcome)
## Mined gaps (discovered, not yet attempted)
- `2026-09-08` trivial-fix pass: hunt typos / dead links / stale command references / wrong doc lines across whole repo (docs/, README, CONTRIBUTING, STORYBOOK, packages). Pack >=3 genuine fixes into <=10 files. — status: skipped (duplicate; parallel worker opened canonical trivial PR #19 oli_fix_docs_links_typos with overlapping seperate->separate + dead-link fixes; my PR #18 closed to avoid bot-sweep footprint)
 (chore: add cfpb/design-system context research branch)
