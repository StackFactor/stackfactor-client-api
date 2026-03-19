# User Information API

This module provides functions for managing user business profile information within the StackFactor platform. It allows you to update array-based business properties.

## Importing

```js
import { userInformation } from '@stackfactor/client-api';
```

## Methods

### addEntryToArrayBusinessProperty(userId: string, property: string, data: object, token: string): Promise<object>

**Description:** Add an entry to a user's array-based business property.
**Parameters:**

- `userId` (String): The user ID.
- `property` (String): The business property name.
- `data` (Object): The data to add.
- `token` (String): Authorization token.

**Returns:** Promise resolving to the result object.

### removeEntryFromArrayBusinessProperty(userId: string, property: string, entryId: string, token: string): Promise<object>

**Description:** Remove an entry from a user's array-based business property.
**Parameters:**

- `userId` (String): The user ID.
- `property` (String): The business property name.
- `entryId` (String): The ID of the entry to remove.
- `token` (String): Authorization token.

**Returns:** Promise resolving to the result object.

### updateEntryfromArrayBusinessProperty(userId: string, property: string, entryId: string, data: object, token: string): Promise<object>

**Description:** Update an entry in a user's array-based business property.
**Parameters:**

- `userId` (String): The user ID.
- `property` (String): The business property name.
- `entryId` (String): The ID of the entry to update.
- `data` (Object): The updated data.
- `token` (String): Authorization token.

**Returns:** Promise resolving to the result object.
