# Security API

This module provides functions for managing security settings within the StackFactor platform, including authentication connections, MFA resets, and Auth0 synchronization.

## Importing

```js
import { security } from '@stackfactor/client-api';
```

## Methods

### getAuthConnections(authToken: string): Promise<object>

**Description:** Retrieve the enabled authentication connections for the current organization.
**Parameters:**

- `authToken` (String): Authorization token.

**Returns:** Promise resolving to an object containing authentication connections.

### setAuthConnections(data: object, authToken: string): Promise<object>

**Description:** Set the enabled authentication connections for the current organization.
**Parameters:**

- `data` (Object): The updated authentication configuration.
- `authToken` (String): Authorization token.

**Returns:** Promise resolving to the result object.

### resetMFA(userId: string, authToken: string): Promise<object>

**Description:** Reset the MFA (Multi-Factor Authentication) for a user.
**Parameters:**

- `userId` (String): The user ID.
- `authToken` (String): Authorization token.

**Returns:** Promise resolving to the result object.

### synchronizeWithAuth0(authToken: string): Promise<object>

**Description:** Synchronize the authentication connections with Auth0.
**Parameters:**

- `authToken` (String): Authorization token.

**Returns:** Promise resolving to the result object.
