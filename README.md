<a id="readme-top"></a>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]

<div align="center">
  <h1>Germantown Symphony Orchestra Website</h1>
  <p>Astro + SolidJS + Tailwind site for the Germantown Symphony Orchestra, with Starlight docs, deployed on Netlify.</p>
  <p>
    <a href="https://github.com/AMDphreak/gso-site/issues">Report Bug</a>
    ·
    <a href="https://github.com/AMDphreak/gso-site/issues">Request Feature</a>
  </p>
</div>

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#about-the-project">About The Project</a></li>
    <li><a href="#getting-started">Getting Started</a></li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#deployment">Deployment</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

## About The Project

Monorepo for the GSO public website and documentation: season pages, about/board content, members and editor auth, and a Starlight docs site.

### Features

- Public pages: Home, Season, About, Concerto Competition, Supporting, 50th Anniversary
- Members area, editor login, Google Workspace board auth, admin dashboard
- Light/dark theme, responsive classical design, accessible navigation
- Docs at `/docs` when deployed

### Built With

- Astro, SolidJS, TypeScript
- Tailwind CSS, Lucide Icons
- Starlight (docs)
- Netlify Functions, JWT, bcryptjs

<p align="right">(<a href="#readme-top">back to top</a>)</p>

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

- Main site: `http://localhost:4321`
- Documentation: `http://localhost:4322`

```bash
pnpm dev:site
pnpm dev:docs
```

### Build / preview

```bash
pnpm build
pnpm preview
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Usage

### Project structure

```text
gso-site/
├── site/          # Main website
├── docs/          # Starlight documentation
└── dist/          # Build output
```

### Environment variables

Create `.env` under `site/`:

```env
JWT_SECRET=your-secret-key-here-change-in-production
MEMBERS_PASSWORD=your-shared-members-password-here
GOOGLE_CLIENT_ID=your-google-oauth-client-id
GOOGLE_CLIENT_SECRET=your-google-oauth-client-secret
GOOGLE_WORKSPACE_DOMAIN=germantownsymphony.org
```

### Authentication

- **Members**: shared password (`MEMBERS_PASSWORD`)
- **Editors**: email/password for articles
- **Board**: `@germantownsymphony.org` Google Workspace OAuth

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Deployment

Netlify:

- Build command: `pnpm build`
- Publish directory: `dist/site`
- Functions directory: `site/netlify/functions`

Set environment variables in the Netlify dashboard.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Contributing

Fork, branch, and open a pull request.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## License

Copyright © 2025 Germantown Symphony Orchestra

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Contact

Ryan Johnson — [@amdphreak](https://twitter.com/amdphreak)

Project Link: [https://github.com/AMDphreak/gso-site](https://github.com/AMDphreak/gso-site)

Site: [https://ryanjohnson.dev](https://ryanjohnson.dev)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
[contributors-shield]: https://img.shields.io/github/contributors/AMDphreak/gso-site.svg?style=for-the-badge
[contributors-url]: https://github.com/AMDphreak/gso-site/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/AMDphreak/gso-site.svg?style=for-the-badge
[forks-url]: https://github.com/AMDphreak/gso-site/network/members
[stars-shield]: https://img.shields.io/github/stars/AMDphreak/gso-site.svg?style=for-the-badge
[stars-url]: https://github.com/AMDphreak/gso-site/stargazers
[issues-shield]: https://img.shields.io/github/issues/AMDphreak/gso-site.svg?style=for-the-badge
[issues-url]: https://github.com/AMDphreak/gso-site/issues
