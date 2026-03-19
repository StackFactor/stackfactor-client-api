# Utils API

This module provides utility functions for the StackFactor platform, including base URL retrieval and object property management.

## Importing

```js
import { utils } from "@stackfactor/client-api";
// Example usage:
// utils.getBaseUrl(...)
```

## Methods

### getBaseUrl(): string

**Description:** Returns the backend base API URL based on environment variables.
**Parameters:** None
**Returns:** String containing the base API URL.

### removeNullProperties(object: { [key: string]: any }): object

**Description:** Removes null properties from an object.
**Parameters:**

- `object` (Object): The object to clean.
  **Returns:** Object with null properties removed.
