---
title: Content Management
description: How to create and manage articles and events
---

# Content Management

## Articles

Editors and board members can create and manage articles through the admin dashboard.

### Creating an Article

1. Navigate to `/admin/articles`
2. Fill in the article form:
   - **Title**: Article headline
   - **Author**: Author name
   - **Content**: Article body (supports Markdown)
   - **Featured**: Check to feature the article
3. Click "Save Article"

### Article API

Articles are managed via the `/api/articles` endpoint:

- `GET /api/articles` - List all articles
- `POST /api/articles` - Create new article (requires authentication)
- `PUT /api/articles` - Update article (requires authentication)
- `DELETE /api/articles` - Delete article (requires authentication)

## Events

Events represent concerts and performances in the season.

### Event Structure

```typescript
interface Event {
  id: string;
  title: string;
  description: string;
  date: string;        // ISO date string
  time?: string;       // e.g., "7:30 PM"
  location: string;
  ticketUrl?: string;
  imageUrl?: string;
}
```

## Data Storage

Currently, articles are stored in-memory in Netlify Functions. For production:

- Consider using a database (Netlify Fauna, Supabase, MongoDB)
- Implement proper data persistence
- Add image upload functionality
- Add content versioning

## Future Enhancements

- Rich text editor for article content
- Image upload and management
- Scheduled publishing
- Content drafts
- Revision history

