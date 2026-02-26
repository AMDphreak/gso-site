---
title: Introduction
description: Overview of the GSO website project
---

Welcome to the Germantown Symphony Orchestra website documentation. This site is built with modern web technologies to provide a beautiful, performant, and maintainable platform for the orchestra.

## Tech Stack

The website is built using:

- **Astro** - Static site generation framework
- **SolidJS** - Reactive UI components
- **Netlify** - Hosting and serverless functions
- **Starlight** - Documentation (this site)

## Project Structure

The project is organized as a monorepo with two main parts:

```text
gso-site/
├── site/          # Main website application
├── docs/          # Documentation (this site)
└── dist/          # Build output
    ├── site/      # Built website
    └── docs/      # Built documentation
```

## Features

- Public-facing website with information about the orchestra
- Members-only area with shared password authentication
- Editor authentication for content contributors
- Board member authentication with Google Workspace email verification
- Admin dashboard for content management
- Article and event management system
