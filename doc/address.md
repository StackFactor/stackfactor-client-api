# Address API

This module provides functions for address validation and autocomplete within the StackFactor platform.

## Importing

```js
import { address } from '@stackfactor/client-api';
```

## Methods

### autoComplete(input: string, authToken: string): Promise<object>

**Description:** Validate and autocomplete an address from raw input.
**Parameters:**

- `input` (String): The address in raw format.
- `authToken` (String): Authorization token.

**Returns:** Promise resolving to the autocomplete results object.
