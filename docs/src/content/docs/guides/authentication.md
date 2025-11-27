---
title: Authentication
description: Understanding the authentication system for different user types
---

# Authentication

The GSO website supports three types of authentication:

## Members Login

Members use a shared password to access the members-only area.

- **Type**: Shared password authentication
- **Endpoint**: `/api/auth` with `type: "member"`
- **Password**: Configured via `MEMBERS_PASSWORD` environment variable
- **Token Duration**: 30 days
- **Access**: Members-only content

## Editor Login

Editors can create and manage articles on the website.

- **Type**: Email/password authentication
- **Endpoint**: `/api/auth` with `type: "editor"`
- **Credentials**: Email and password (stored in database in production)
- **Token Duration**: 7 days
- **Access**: Admin dashboard, article management

## Board Member Login

Board members authenticate using their Google Workspace email address.

- **Type**: Google Workspace email verification
- **Endpoint**: `/api/auth` with `type: "board"`
- **Requirement**: Email must end with `@germantownsymphony.org`
- **Token Duration**: 7 days
- **Access**: Full admin access, article and event management

## Implementation Details

### JWT Tokens

All authentication methods use JWT (JSON Web Tokens) for session management:

- Tokens are stored in `localStorage` on the client
- Tokens include user role and email (if applicable)
- Tokens are verified on each API request

### API Endpoints

- `POST /api/auth` - Authenticate and receive token
- `GET /api/verify` - Verify current token

### Security Notes

- Always use strong `JWT_SECRET` in production
- Change `MEMBERS_PASSWORD` regularly
- Implement rate limiting in production
- Consider adding Google OAuth for board members in production

