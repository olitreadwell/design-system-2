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
- `2026-09-24` trivial pass: bundled 11 typo fixes across 5 files (programatically->programmatically x4 incl. cfpb-expandable test names + both storybook docs, clickc->clicks x2, tempalate->template x2, whenthe->when the, recieves->receives, colums->columns) — pr-opened (fork design-system-2 PR #24, branch oli_fix_docs_test_typos). Fork CI: typecheck/lint/unit-tests/e2e ALL green, mergeable=true. Local: vitest 22 pass for cfpb-button + cfpb-expandable specs; prettier/eslint/stylelint clean. No overlap with PR #19. US dialect respected.
- `2026-09-24` trivial pass: bundled 23 typo / doc-vs-code fixes across 6 docs files (18 changed lines) (STORYBOOK.md setStorybookHlpersConfig->setStorybookHelpersConfig + hideArgsRef->hideArgRef, deafault-slot->default-slot, interanal->internal, deive->derived, Programatic->Programmatic, matricies->matrices, agains->against; web-component-storybook.md same HlpersConfig/hideArgRef + Programatic + agains; CONTRIBUTING.md compatability->compatibility, Dicitonary/dicitonary->Dictionary/dictionary, approriate->appropriate, specifc->specific, adears->adheres; fallback-strategies.md dimenions->dimensions, becames->becomes; video.md knowledgable->knowledgeable, florescent->fluorescent; setting-the-foundation.md heterogenous->heterogeneous) — pr-opened (fork design-system-2 PR #25, branch oli_fix_docs_typos, non-draft). No overlap with PR #19/#24 (deduped per-string; HlpersConfig/hideArgRef verified vs .storybook/preview.js; internal/derived/matrices/Programatic cross-checked vs the already-correct web-component-storybook.md). prettier --check clean on all 6 files; md-only so unit/typecheck unaffected. US dialect respected. 3rd distinct trivial-fix PR this repo today (#19 links+typos, #24 test typos, #25 doc typos), all non-overlapping.
- `2026-09-25` trivial pass: bundled 11 typo fixes across 9 files (component source comments, Storybook config, repo templates/workflow) — pr-opened (fork design-system-2 PR #26, branch oli_fix_source_comment_typos, non-draft). Fixes: `.storybook/main.js` Multipe->Multiple; `.storybook/plugins/story-helpers.ts` withouth->without, realtive->relative; `.github/workflows/typecheck.yml` commited->committed; `.github/ISSUE_TEMPLATE/component_change_or_add.md` Sytem->System, accessibile->accessible; cfpb-notifications/notification.scss notificiations->notifications; cfpb-tables/table.scss Yeilds->Yields; cfpb-typography/mixins-typography.scss overwise->otherwise; cfpb-list/index.js orignal->original; i18n-service.js lanugage->language. No overlap with PR #19/#24/#25 (their touched files/strings untouched). A cfpb-expandable JSDoc typo (finshed) was found but dropped during this run — fixing it would change the generated custom-elements-manifest so the PR stayed pure comment-text and <=10 files; it remains a viable future one-line gap (source + yarn analyze + 2 generated files). Local: prettier --check, eslint (0 errors), stylelint all pass; comment-only so CI unit/typecheck unaffected. US English dialect respected.
- `2026-09-25` trivial pass: bundled 8 typo fixes across 8 component source files (source comments + utility style headers) — pr-opened (fork design-system-2 PR #27, branch oli_fix_comment_typos, non-draft). Fixes: flyout-menu.js preceeding->preceding; max-height-transition.js thte->the; transition.scss + transition.css utilty->utility; cfpb-expandable/styles.component.scss Overide->Override; cfpb-link/mixin-link/styles.component.scss overwise->otherwise; cfpb-alert/styles.component.scss notificiations->notifications; cfpb-button/cfpb-button.stories.ts applys->applies. All single-token comment/header text, meaning-preserving, US English dialect; no file/string overlap with PR #19/#24/#25/#26. Local: prettier --check, eslint, stylelint all pass on the 8 files; vitest cfpb-button + cfpb-expandable specs 22 passed.

## Mined gaps (discovered, not yet attempted)
- `2026-09-08` trivial-fix pass: hunt typos / dead links / stale command references / wrong doc lines across whole repo (docs/, README, CONTRIBUTING, STORYBOOK, packages). Pack >=3 genuine fixes into <=10 files. — status: skipped (duplicate; parallel worker opened canonical trivial PR #19 oli_fix_docs_links_typos with overlapping seperate->separate + dead-link fixes; my PR #18 closed to avoid bot-sweep footprint)
 (chore: add cfpb/design-system context research branch)
