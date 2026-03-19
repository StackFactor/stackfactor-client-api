# Quotas API

This module provides functions for managing quotas and quota utilization within the StackFactor platform. It allows you to retrieve quota information and increase quota utilization.

## Importing

```js
import { quotas } from "@stackfactor/client-api";
// Example usage:
// quotas.getAllQuota(...)
```

## Methods

### getAllQuota(token: string): Promise<object>

**Description:** Retrieve the current quota for the user and tenant.
**Parameters:**

- `token` (String): Authorization token.
  **Returns:** Promise resolving to the quota object.

### increaseQuotaUtilization(quotaId: string, value: number, token: string): Promise<object>

**Description:** Increase quota utilization for a specific quota.
**Parameters:**

- `quotaId` (String): The quota ID.
- `value` (Number): The value to increase.
- `token` (String): Authorization token.
  **Returns:** Promise resolving to the result object.
