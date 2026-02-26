---
title: Installation
description: How to set up and run the GSO website locally
---

## Prerequisites

- Node.js 20 or higher
- pnpm package manager

## Setup

1. Clone the repository:

    ```bash
    git clone https://github.com/AMDphreak/gso-site.git
    cd gso-site
    ```

2. Install dependencies:

    ```bash
    pnpm install
    ```

3. Set up environment variables:

    Create a `.env` file in the `site/` directory:

    ```env
    JWT_SECRET=your-secret-key-here-change-in-production
    MEMBERS_PASSWORD=your-shared-members-password-here
    GOOGLE_CLIENT_ID=your-google-oauth-client-id
    GOOGLE_CLIENT_SECRET=your-google-oauth-client-secret
    GOOGLE_WORKSPACE_DOMAIN=germantownsymphony.org
    ```

## Development

### Run the website

```bash
pnpm dev:site
```

The site will be available at `http://localhost:4321`

### Run the documentation

```bash
pnpm dev:docs
```

The docs will be available at `http://localhost:4321` (or the next available port)

### Run both

```bash
pnpm dev
```

## Building

Build both the site and docs:

```bash
pnpm build
```

Build individually:

```bash
pnpm build:site
pnpm build:docs
```

## Preview

Preview the built site:

```bash
pnpm preview:site
```
