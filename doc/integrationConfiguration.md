# Integration Configuration API

This module provides functions for managing integration configurations within the StackFactor platform. It allows you to retrieve and update integration configuration data.

## Importing

```js
import { integrationConfiguration } from "@stackfactor/client-api";
// Example usage:
// integrationConfiguration.getIntegrationsConfiguration(...)
```

## Methods

### getIntegrationsConfiguration(ids: string[], types: number[], token: string): Promise<object>

**Description:** Retrieve integration configuration for specified IDs and types.
**Parameters:**

- `ids` (Array<String>): IDs of integration configurations.
- `types` (Array<Number>): Types of integration configurations.
- `token` (String): Authorization token.
  **Returns:** Promise resolving to the configuration object.

### saveIntegrationConfiguration(id: string, type: number, configuration: object, token: string): Promise<object>

**Description:** Save an integration configuration.
**Parameters:**

- `id` (String): The ID of the integration configuration to update.
- `type` (Number): The type of configuration.
- `configuration` (Object): Data used to update the integration configuration.
- `token` (String): Authorization token.
  **Returns:** Promise resolving to the result object.

### testIntegrationConfiguration(id: string, type: number, configuration: object, token: string): Promise<object>

**Description:** Test an integration configuration.
**Parameters:**

- `id` (String): The ID of the integration to test.
- `type` (Number): The type of configuration.
- `configuration` (Object): Configuration to be tested.
- `token` (String): Authorization token.
  **Returns:** Promise resolving to the result object.
