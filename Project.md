# PROJECT CONTEXT — AI-Trade-Journal

> Context file for anyone (or any AI helper) working in this repo.
> Read this first to understand what this project is and how to help.

## What this is

An AI-powered trading journal: a web app where a trader logs their trades and an
AI layer reviews those trades and surfaces behavioral patterns (repeated mistakes,
setups that work, emotional exits). Think "trading journal + AI coach."

## Who's building it

A full-stack engineer with 2+ years of professional experience (Java, Spring Boot,
React, TypeScript) who is **new to Java and TypeScript specifically** and is
**learning by building this project**. Building in public (LinkedIn / X / Reddit)
with the near-term goal of landing a Java + React + AI role.

## How to help (IMPORTANT)

This is a **learning project**, not a ship-it-fast project. The developer wants to
**understand every line**, because they'll need to explain it in interviews.

- Explain concepts before writing code.
- Prefer small, understandable steps over large generated blocks.
- Don't auto-write whole features — help with boilerplate, debugging, and review.
- The "why" matters as much as the "what".

## Planned stack

- **Backend:** Java, Spring Boot, Spring Data JPA / Hibernate, PostgreSQL, REST APIs
- **Frontend:** React, TypeScript, Redux
- **AI:** LLM integration (trade tagging, review, pattern detection)
- **Tooling:** Maven, Git, VS Code (Extension Pack for Java), Docker (later)

## Environment (already set up)

- macOS (Apple Silicon), Homebrew, JDK 26, Maven — all installed and working.
- Editor: VS Code with the Java Extension Pack.

## Roadmap (living)

- [ ] Spring Boot project scaffolding + first REST endpoint
- [ ] Trade data model + PostgreSQL persistence
- [ ] Manual + CSV trade import
- [ ] Analytics dashboard (P&L, win rate, R-multiple, equity curve)
- [ ] AI trade tagging
- [ ] AI trade review & pattern insights
- [ ] Polished, responsive React UI

## Status

Environment setup complete. Next: generate the Spring Boot project and write the
first REST endpoint.