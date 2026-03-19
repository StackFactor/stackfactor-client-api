# Constants

This module exports constant values used across the StackFactor platform, including document versions, HTTP response types, permissions, and permission descriptions.

## Importing

```js
import { constants } from '@stackfactor/client-api';
```

## Exported Constants

### DOCUMENT_VERSION

**Description:** Enum for document version states.

- `DRAFT`: "draft"
- `PUBLISHED`: "published"

### RESPONSE_TYPE

**Description:** Enum for HTTP response types and error codes including `MULTIPLE_CHOICES`, `MOVED_PERMANENTLY`, `BAD_REQUEST`, `UNAUTHORIZED`, `FORBIDDEN`, `NOT_FOUND`, `INTERNAL_SERVER_ERROR`, and more.

### PERMISSIONS

**Description:** Object mapping permission names to their IDs. Includes permissions such as `ACCESS_TO_CONTENT_GENERATORS`, `ADMIN_AUTHOR_CONTENT`, `MANAGE_BILLING`, `MANAGE_GROUPS`, `MANAGE_TEAMS`, `MANAGE_USERS`, `MANAGE_SECURITY`, and more.

### PERMISSION_DESCRIPTIONS

**Description:** Object mapping permission IDs to human-readable descriptions (e.g., "Access to AI", "Author content", "Manage billing", "Manage groups", etc.).
