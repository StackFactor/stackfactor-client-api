# Tenants API

This module provides functions for managing tenant information within the StackFactor platform. It allows you to retrieve and update tenant settings and look-and-feel configuration.

## Importing

```js
import { tenants } from '@stackfactor/client-api';
```

## Methods

### getTenantInformation(category: string[], token: string): Promise<object>

**Description:** Retrieve the tenant information for specified categories.
**Parameters:**

- `category` (Array<String>): Tenant information categories to retrieve.
- `token` (String): Authorization token.

**Returns:** Promise resolving to the tenant information object.

### getTenantLookNFeel(name: string): Promise<object>

**Description:** Retrieve the tenant look-and-feel information by tenant name.
**Parameters:**

- `name` (String): The tenant name.

**Returns:** Promise resolving to the look-and-feel object.

### setTenantInformation(category: string, data: object, token: string): Promise<object>

**Description:** Update the tenant information for a specific category.
**Parameters:**

- `category` (String): Tenant information category.
- `data` (Object): New or updated tenant data.
- `token` (String): Authorization token.

**Returns:** Promise resolving to the result object.
