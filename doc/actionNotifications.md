# Action Notifications API

This module provides functions for managing action notifications within the StackFactor platform. It allows you to retrieve, mark, and process user notifications.

## Importing

```js
import { actionNotifications } from '@stackfactor/client-api';
```

## Methods

### getAllUserNotifications(token: string): Promise<object>

**Description:** Retrieve all user action notifications.
**Parameters:**

- `token` (String): The authentication token.

**Returns:** Promise resolving to an object containing notifications.

### markNotifications(ids: string[], status: string, authToken: string): Promise<object>

**Description:** Mark notifications as open or viewed.
**Parameters:**

- `ids` (Array<String>): The IDs of notifications to be marked.
- `status` (String): The new status to set.
- `authToken` (String): The authentication token.

**Returns:** Promise resolving to an object with the result.

### processNotification(id: string, action: string, comments: string, authToken: string): Promise<object>

**Description:** Process a notification by executing an action.
**Parameters:**

- `id` (String): The notification ID.
- `action` (String): The action to be executed.
- `comments` (String): Comments to be saved in the notification.
- `authToken` (String): The authentication token.

**Returns:** Promise resolving to the result object.
