# Repository Guidelines

## Project Structure & Module Organization

This workspace currently contains no application code, assets, tests, or build configuration. Establish the project structure when selecting the implementation stack, and update this guide to match. Keep application code, static assets, and tests in clearly named locations, such as `src/`, `public/`, and `tests/`, if supported by the chosen framework. Avoid adding empty directories or speculative abstractions.

## Build, Test, and Development Commands

No installation, development, build, lint, or test commands are configured yet. When tooling is introduced, document the exact commands here and in the project README. Do not assume commands such as `npm test` or `npm run build` exist before checking the package configuration. Ask before adding dependencies.

## Coding Style & Naming Conventions

Follow the formatter and linter configured with the implementation stack. Until those tools exist, match the surrounding file's indentation and naming style. Use descriptive names, keep modules focused, and make the smallest change that fully solves the task. Keep unrelated formatting and refactoring out of feature changes.

## Testing Guidelines

No testing framework, test naming convention, or coverage threshold is established. Add or update tests alongside behavior changes, using the selected framework's conventions. Document how to run them. Run available tests and lint checks before each commit; explicitly report checks that cannot run because tooling is missing.

## Commit & Pull Request Guidelines

This workspace has no Git metadata or commit history to inspect. Once Git is initialized, work on feature branches and commit each self-contained change separately. Use Conventional Commits, for example `docs(guide): add contributor instructions`, with subjects no longer than 72 characters. Stage only relevant files and review `git diff --staged` before committing. Never amend, rebase, or force-push without approval.

Pull requests should explain the change, link relevant issues, report validation results, and include screenshots for visible interface changes.
