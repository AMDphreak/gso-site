# Germantown Symphony Orchestra Website

A modern website for the Germantown Symphony Orchestra built with Astro, SolidJS, and deployed on Netlify.

## Features

- **Public Pages**: Home, Season, About, Contact
- **Members Area**: Shared password-protected area for orchestra members
- **Editor Authentication**: Individual login for content editors to contribute articles
- **Board Member Authentication**: Google Workspace email-based authentication for board members
- **Admin Dashboard**: Content management for articles and events

## Tech Stack

- **Astro**: Static site generation and framework
- **SolidJS**: Reactive UI components
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

```bash
pnpm dev
```

The site will be available at `http://localhost:4321`

### Build

```bash
pnpm build
```

### Environment Variables

Create a `.env` file in the root directory:

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

## Deployment

The site is configured for Netlify deployment. Connect your GitHub repository to Netlify and set the environment variables in the Netlify dashboard.

### Netlify Configuration

- Build command: `pnpm build`
- Publish directory: `dist`
- Functions directory: `netlify/functions`

## Project Structure

```
├── src/
│   ├── components/     # SolidJS components
│   ├── layouts/        # Astro layouts
│   ├── lib/            # Utility functions
│   ├── pages/          # Astro pages (file-based routing)
│   └── types/          # TypeScript type definitions
├── netlify/
│   └── functions/      # Netlify serverless functions
├── public/             # Static assets
└── scripts/            # Utility scripts
```

## Data Extraction

To extract data from the existing website:

```bash
pnpm extract-data
```

Note: This is a placeholder script. You'll need to implement actual web scraping logic or API integration.

## License

Copyright © 2025 Germantown Symphony Orchestra
