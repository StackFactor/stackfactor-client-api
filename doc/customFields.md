# Custom Fields API

This module provides functions for retrieving custom field definitions by element type within the StackFactor platform.

## Importing

```js
import { customFields } from '@stackfactor/client-api';
```

## Methods

### getByElementType(elementType: CustomFieldElementType, token: string): Promise<object>

**Description:** Get custom fields by element type. Supported element types are: `LEARNING_CONTENT`, `LEARNING_CONTENT_MICROSKILL`, `ROLE`, `SKILL`, `TEAM`, `USER`.
**Parameters:**

- `elementType` (CustomFieldElementType): The element type to retrieve custom fields for.
- `token` (String): Authorization token.

**Returns:** Promise resolving to the custom field definitions object.
