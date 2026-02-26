# Germantown Symphony Orchestra Website

A modern, elegant website for the Germantown Symphony Orchestra built with Astro, SolidJS, Tailwind CSS, and deployed on Netlify. This is a monorepo containing both the main website and documentation.

## Project Structure

```text
gso-site/
├── site/          # Main website application
│   ├── src/       # Source code
│   │   ├── components/  # React/SolidJS components
│   │   ├── layouts/    # Page layouts
│   │   ├── lib/        # Utilities (theme, utils)
│   │   └── pages/     # Astro pages
│   ├── public/   # Static assets
│   └── netlify/  # Netlify Functions
├── docs/          # Documentation site (Starlight)
│   └── src/       # Documentation content
└── dist/          # Build output
    └── site/      # Built website (includes docs at /docs)
```

## Features

### Public Pages
- **Home**: Elegant homepage with 50th Anniversary celebration
- **Season**: 2025-2026 season with individual concert pages
- **About**: Comprehensive information about the orchestra
  - Music Director
  - The Orchestra
  - Join the Orchestra
  - History
  - Outreach
  - Board of Directors (with Board Meeting and By-Law pages)
  - Contact
- **Concerto Competition 2026**: Rules and application
- **Supporting**: Donation, advertising, and supporter information
- **50th Anniversary**: Special anniversary page

### Authentication & Administration
- **Members Area**: Shared password-protected area for orchestra members
- **Editor Authentication**: Individual login for content editors to contribute articles
- **Board Member Authentication**: Google Workspace email-based authentication for board members
- **Admin Dashboard**: Content management for articles and events

### Design Features
- **Light/Dark Mode**: System-aware theme switching with manual override
- **Responsive Design**: Mobile-first, elegant classical design
- **shadcn-inspired**: Modern component system with Tailwind CSS
- **Accessibility**: WCAG-compliant navigation and interactions

### Documentation
- Comprehensive documentation site built with Starlight
- Available at `/docs` when deployed or in development

## Tech Stack

### Core
- **Astro**: Static site generation and framework
- **SolidJS**: Reactive UI components
- **TypeScript**: Type safety throughout

### Styling & Design
- **Tailwind CSS**: Utility-first CSS framework
- **shadcn-inspired**: Component design system
- **Custom CSS Variables**: Theme system for light/dark modes
- **Lucide Icons**: Icon library for UI elements

### Documentation
- **Starlight**: Documentation framework built on Astro

### Backend & Deployment
- **Netlify Functions**: Serverless API endpoints
- **JWT**: Authentication tokens
- **bcryptjs**: Password hashing

## Getting Started

### Prerequisites

- Node.js 20+
- pnpm

### Installation

```bash
pnpm install
```

### Development

Run both site and docs on separate ports:

```bash
pnpm dev
```

- **Main site**: `http://localhost:4321`
- **Documentation**: `http://localhost:4322`

Run individually:

```bash
pnpm dev:site  # Website only (port 4321)
pnpm dev:docs  # Documentation only (port 4322)
```

### Build

Build both site and docs:

```bash
pnpm build
```

Both sites build independently to `dist/site` and `dist/docs`.

Build individually:

```bash
pnpm build:site
pnpm build:docs
```

### Preview

Preview the production build:

```bash
pnpm preview
```

## Design System

The site uses a shadcn-inspired design system with:

- **Color Palette**:
  - Teal (`#20B2AA`) for links and accents
  - Gold (`#d4af37`) for headings and highlights
  - CSS variables for theme-aware colors

- **Typography**:
  - **Sans-serif**: Inter (default, modern UI)
  - **Serif**: Playfair Display, Cormorant Garamond (homepage, elegant content)

- **Theme System**:
  - Light mode (default)
  - Dark mode
  - System preference detection
  - Theme toggle in navigation

- **Components**:
  - Consistent spacing and sizing
  - Responsive breakpoints
  - Accessible navigation with dropdown menus
  - Elegant card-based layouts

## Environment Variables

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
- Simple password-based authentication

### Editor Login

- Individual email/password authentication
- Can create and edit articles
- Access to admin dashboard

### Board Member Login

- Requires `@germantownsymphony.org` email address
- Google Workspace OAuth authentication
- Full admin access
- Can manage articles and events

## Documentation

The documentation site runs on a separate port during development (`http://localhost:4322`).

Documentation covers:

- Getting started and installation
- Authentication system
- Content management
- Deployment guide

To view documentation:

```bash
pnpm dev:docs  # Runs on port 4322
```

## Deployment

The site is configured for Netlify deployment. Connect your GitHub repository to Netlify and set the environment variables in the Netlify dashboard.

### Netlify Configuration

- **Build command**: `pnpm build`
- **Publish directory**: `dist/site`
- **Functions directory**: `site/netlify/functions`

### Build Process

1. Main site builds to `dist/site`
2. Documentation builds to `dist/docs`
3. Both are independent builds

## Development Notes

### Theme System

The theme system uses CSS variables and the `dark` class on the `<html>` element. Theme preference is stored in localStorage and persists across sessions.

### Component Architecture

- **Astro Pages**: Server-rendered pages with `.astro` extension
- **SolidJS Components**: Client-side interactive components (Navigation, ThemeToggle, etc.)
- **Layouts**: Base layout with consistent structure and theming

### Styling Approach

- Tailwind CSS for utility classes
- CSS variables for theme colors
- Custom CSS for complex layouts and animations
- shadcn-inspired component patterns

## License

Copyright © 2025 Germantown Symphony Orchestra
