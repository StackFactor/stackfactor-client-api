# Logger API

This module provides functions for logging comments and activities within the StackFactor platform. It allows you to create comments for elements and log relevant information.

## Importing

```js
import { logger } from "@stackfactor/client-api";
// Example usage:
// logger.comments(...)
```

## Methods

### comments(elementId: string, elementType: string, data: object, token: string): Promise<object>

**Description:** Create comments for a specified element.
**Parameters:**

- `elementId` (String): The element identifier.
- `elementType` (String): The element type.
- `data` (Object): Comment data.
- `token` (String): Authorization token.
  **Returns:** Promise resolving to the result object.

### getListByElementId(elementId: string, page: number | null, elementsPerPage: number | null, token: string): Promise<object>

**Description:** Retrieve the list of logger entries for a selected element.
**Parameters:**

- `elementId` (String): The element identifier.
- `page` (Number | null): The results page number.
- `elementsPerPage` (Number | null): The number of elements per page.
- `token` (String): Authorization token.
  **Returns:** Promise resolving to the logger entries object.
