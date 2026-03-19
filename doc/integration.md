# Integration API

This module provides functions for managing integrations and related content within the StackFactor platform. It allows you to create, update, and retrieve integration information, filter integrations, and handle content information.

## Importing

```js
import { integration } from "@stackfactor/client-api";
// Example usage:
// integration.createIntegration(...)
```

## Methods

### createIntegration(data: object, token: string): Promise<object>

**Description:** Create a new integration and set its information.
**Parameters:**

- `data` (Object): The new integration information.
- `token` (String): Authorization token.
  **Returns:** Promise resolving to the created integration object.

### deleteIntegration(id: string, token: string): Promise<object>

**Description:** Delete an integration.
**Parameters:**

- `id` (String): The ID of the integration to be deleted.
- `token` (String): Authorization token.
  **Returns:** Promise resolving to the result object.

### discardIntegrationChanges(id: string, token: string): Promise<object>

**Description:** Discard draft changes for an integration.
**Parameters:**

- `id` (String): The ID of the integration.
- `token` (String): Authorization token.
  **Returns:** Promise resolving to the result object.

### getIntegrationInformationById(id: string, version: string, token: string): Promise<object>

**Description:** Retrieve integration information by its ID and version.
**Parameters:**

- `id` (String): The ID of the integration.
- `version` (String): The version of the integration.
- `token` (String): Authorization token.
  **Returns:** Promise resolving to the integration object.

### getIntegrationsList(filter: string[], type: number, version: string, includeSupportedCapabilities: boolean, includeDisabled: boolean, token: string): Promise<object>

**Description:** Retrieve a filtered list of integrations.
**Parameters:**

- `filter` (Array<String>): The filter used to select integrations.
- `type` (Number): The type of integration.
- `version` (String): The version to retrieve.
- `includeSupportedCapabilities` (Boolean): If true, supported capabilities are included.
- `includeDisabled` (Boolean): If true, disabled integrations are included.
- `token` (String): Authorization token.
  **Returns:** Promise resolving to the integrations list.

### getContentInformationByUrl(url: string, verb: string, token: string): Promise<object>

**Description:** Retrieve content information by URL via the backend.
**Parameters:**

- `url` (String): The training URL.
- `verb` (String): The HTTP verb.
- `token` (String): Authorization token.
  **Returns:** Promise resolving to the content information object.

### getContentInformationByUrlFromBrowser(url: string): Promise<ContentInformationResponse>

**Description:** Retrieve content information by URL directly from the browser (client-side). Parses the HTML page to extract title, description, duration, and icon.
**Parameters:**

- `url` (String): The URL to fetch content information from.
  **Returns:** Promise resolving to a ContentInformationResponse containing description, duration, icon, title, type, and internal flag.

### getEnabledContentProviders(userId: string, token: string): Promise<object>

**Description:** Retrieve enabled content providers for a user.
**Parameters:**

- `userId` (String): The user ID.
- `token` (String): Authorization token.
  **Returns:** Promise resolving to the content providers object.

### publishIntegration(id: string, token: string): Promise<object>

**Description:** Publish an integration.
**Parameters:**

- `id` (String): The ID of the integration to publish.
- `token` (String): Authorization token.
  **Returns:** Promise resolving to the result object.

### setIntegrationInformation(id: string, data: object, token: string): Promise<object>

**Description:** Update integration information.
**Parameters:**

- `id` (String): The ID of the integration to update.
- `data` (Object): Data used to update the integration.
- `token` (String): Authorization token.
  **Returns:** Promise resolving to the result object.

### setDefaultIntegration(id: string, token: string): Promise<object>

**Description:** Set an integration as the default.
**Parameters:**

- `id` (String): The ID of the integration to set as default.
- `token` (String): Authorization token.
  **Returns:** Promise resolving to the result object.
