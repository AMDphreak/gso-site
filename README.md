<a id="readme-top"></a>
<div align="center">
  <a href="https://github.com/AMDphreak/gso-site/graphs/contributors"><img src="https://img.shields.io/github/contributors/AMDphreak/gso-site.svg?style=for-the-badge" alt="Contributors"></a>
  <a href="https://github.com/AMDphreak/gso-site/network/members"><img src="https://img.shields.io/github/forks/AMDphreak/gso-site.svg?style=for-the-badge" alt="Forks"></a>
  <a href="https://github.com/AMDphreak/gso-site/stargazers"><img src="https://img.shields.io/github/stars/AMDphreak/gso-site.svg?style=for-the-badge" alt="Stargazers"></a>
  <a href="https://github.com/AMDphreak/gso-site/issues"><img src="https://img.shields.io/github/issues/AMDphreak/gso-site.svg?style=for-the-badge" alt="Issues"></a>

  <h1>Germantown Symphony Orchestra Website</h1>
  <p>Astro + SolidJS + Tailwind site for the Germantown Symphony Orchestra, with Starlight docs, deployed on Netlify.</p>
  <p>
    <a href="https://github.com/AMDphreak/gso-site/issues">Report Bug</a>
    &middot;
    <a href="https://github.com/AMDphreak/gso-site/issues">Request Feature</a>
  </p>
</div>

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
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

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

* **Site** — [![Astro][Astro.build]][Astro-url]
  * [![SolidJS][SolidJS.dev]][SolidJS-url]
  * [![TypeScript][TypeScript.com]][TypeScript-url]
  * [![Tailwind CSS][Tailwind.com]][Tailwind-url]
* **Docs** — [![Starlight][Starlight.astro]][Starlight-url]
* **Hosting / auth** — [![Netlify][Netlify.com]][Netlify-url]
  * Netlify Functions, JWT, bcryptjs, Lucide Icons

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

### Top contributors

<a href="https://github.com/AMDphreak/gso-site/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=AMDphreak/gso-site" alt="contributors" />
</a>

For per-person profile links, prefer [all-contributors](https://allcontributors.org/).

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
[Astro.build]: https://img.shields.io/badge/Astro-BC52EE?style=for-the-badge&logo=astro&logoColor=white
[Astro-url]: https://astro.build/
[SolidJS.dev]: https://img.shields.io/badge/SolidJS-2C4F7C?style=for-the-badge&logo=solid&logoColor=white
[SolidJS-url]: https://www.solidjs.com/
[TypeScript.com]: https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white
[TypeScript-url]: https://www.typescriptlang.org/
[Tailwind.com]: https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white
[Tailwind-url]: https://tailwindcss.com/
[Starlight.astro]: https://img.shields.io/badge/Starlight-D41F00?style=for-the-badge&logo=astro&logoColor=white
[Starlight-url]: https://starlight.astro.build/
[Netlify.com]: https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white
[Netlify-url]: https://www.netlify.com/
