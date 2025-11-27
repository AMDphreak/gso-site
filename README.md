# Germantown Symphony Orchestra Website

A modern website for the Germantown Symphony Orchestra built with Astro, SolidJS, and deployed on Netlify. This is a monorepo containing both the main website and documentation.

## Project Structure

```
gso-site/
├── site/          # Main website application
│   ├── src/       # Source code
│   ├── public/   # Static assets
│   └── netlify/  # Netlify Functions
├── docs/          # Documentation site (Starlight)
│   └── src/       # Documentation content
└── dist/          # Build output
    ├── site/      # Built website
    └── docs/      # Built documentation
```

## Features

- **Public Pages**: Home, Season, About, Contact
- **Members Area**: Shared password-protected area for orchestra members
- **Editor Authentication**: Individual login for content editors to contribute articles
- **Board Member Authentication**: Google Workspace email-based authentication for board members
- **Admin Dashboard**: Content management for articles and events
- **Documentation**: Comprehensive documentation site built with Starlight

## Tech Stack

- **Astro**: Static site generation and framework
- **SolidJS**: Reactive UI components
- **Starlight**: Documentation framework
- **Netlify Functions**: Serverless API endpoints
- **JWT**: Authentication tokens
- **TypeScript**: Type safety

## Getting Started

### Prerequisites

- Node.js 20+
- pnpm

### Installation

```bash
pnpm install
```

### Development

Run both site and docs:

```bash
pnpm dev
```

Run individually:

```bash
pnpm dev:site  # Website only
pnpm dev:docs  # Documentation only
```

### Build

Build both:

```bash
pnpm build
```

Build individually:

```bash
pnpm build:site
pnpm build:docs
```

### Environment Variables

Create a `.env` file in the `site/` directory:

```env
JWT_SECRET=your-secret-key-here-change-in-production
MEMBERS_PASSWORD=your-shared-members-password-here
GOOGLE_CLIENT_ID=your-google-oauth-client-id
GOOGLE_CLIENT_SECRET=your-google-oauth-client-secret
GOOGLE_WORKSPACE_DOMAIN=germantownsymphony.org
```

## Authentication

### Members Login
- Uses a shared password (configured via `MEMBERS_PASSWORD` env variable)
- Access to members-only content

### Editor Login
- Individual email/password authentication
- Can create and edit articles
- Access to admin dashboard

### Board Member Login
- Requires `@germantownsymphony.org` email address
- Full admin access
- Can manage articles and events

## Documentation

The documentation site is available at `/docs` when deployed, or run `pnpm dev:docs` to view locally.

Documentation covers:
- Getting started and installation
- Authentication system
- Content management
- Deployment guide

## Deployment

The site is configured for Netlify deployment. Connect your GitHub repository to Netlify and set the environment variables in the Netlify dashboard.

### Netlify Configuration

- Build command: `pnpm build`
- Publish directory: `dist`
- Functions directory: `site/netlify/functions`

## License

Copyright © 2025 Germantown Symphony Orchestra
