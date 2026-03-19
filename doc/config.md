# Config API

This module provides functions for retrieving and updating configuration settings within the StackFactor platform.

## Importing

```js
import { config } from '@stackfactor/client-api';
```

## Methods

### getConfigurationById(id: string, authToken: string): Promise<object>

**Description:** Retrieve configuration by its unique identifier.
**Parameters:**

- `id` (String): The configuration element ID.
- `authToken` (String): Authorization token.

**Returns:** Promise resolving to the configuration object.

### getConfigurationByType(type: string, authToken: string): Promise<object>

**Description:** Retrieve configuration by its type.
**Parameters:**

- `type` (String): The configuration element type.
- `authToken` (String): Authorization token.

**Returns:** Promise resolving to the configuration object.

### setConfigurationById(id: string, data: object, authToken: string): Promise<object>

**Description:** Update a configuration element by its ID.
**Parameters:**

- `id` (String): The configuration element ID.
- `data` (Object): The updated configuration data.
- `authToken` (String): Authorization token.

**Returns:** Promise resolving to the result object.
