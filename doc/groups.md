# Groups API

This module provides a comprehensive set of functions for managing user groups, permissions, and group membership within the StackFactor platform. It allows you to create, update, delete, and query groups, as well as manage permissions and users associated with each group.

## Importing

To access all group-related methods:

```js
import { groups } from "@stackfactor/client-api";
// Example usage:
// groups.addPermissionsToGroup(...)
```

## Methods

### addPermissionsToGroup(groupId: string, permissions: string[], authToken: string): Promise<object>

**Description:** Add permissions to a group.
**Parameters:**

- `groupId` (String): The group ID.
- `permissions` (Array<String>): The permissions to be added.
- `authToken` (String): Authentication token.
  **Returns:** Promise resolving to the result object.

### addUsersToGroup(groupId: string, users: string[], authToken: string): Promise<object>

**Description:** Add users to a group.
**Parameters:**

- `groupId` (String): The group ID.
- `users` (Array<String>): The users to be added.
- `authToken` (String): Authentication token.
  **Returns:** Promise resolving to the result object.

### createGroup(name: string, description: string, authToken: string): Promise<object>

**Description:** Create a new group with the specified name and description.
**Parameters:**

- `name` (String): The name of the group.
- `description` (String): The description of the group.
- `authToken` (String): Authorization token.
  **Returns:** Promise resolving to the created group object.

### deleteGroup(groupId: string, defaultGroupId: string, authToken: string): Promise<object>

**Description:** Delete a group and move its users to a default group.
**Parameters:**

- `groupId` (String): The group to be deleted.
- `defaultGroupId` (String): The default group for users.
- `authToken` (String): Authentication token.
  **Returns:** Promise resolving to the result object.

### getAllPermissions(authToken: string): Promise<object>

**Description:** Retrieve all available permissions for groups.
**Parameters:**

- `authToken` (String): Authentication token.
  **Returns:** Promise resolving to an object containing permissions.

### getGroupById(groupId: string, authToken: string): Promise<object>

**Description:** Retrieve a group by its unique identifier.
**Parameters:**

- `groupId` (String): The group ID.
- `authToken` (String): Authentication token.
  **Returns:** Promise resolving to the group object.

### getGroups(authToken: string): Promise<object>

**Description:** Retrieve all groups for the current tenant.
**Parameters:**

- `authToken` (String): Authentication token.
  **Returns:** Promise resolving to an array of group objects.

### getUserPermissions(authToken: string): Promise<object>

**Description:** Retrieve the current user's permissions.
**Parameters:**

- `authToken` (String): Authentication token.
  **Returns:** Promise resolving to an object containing user permissions.

### removePermissionsFromGroup(groupId: string, permissions: string[], authToken: string): Promise<object>

**Description:** Remove permissions from a group.
**Parameters:**

- `groupId` (String): The group ID.
- `permissions` (Array<String>): The permissions to be removed.
- `authToken` (String): Authentication token.
  **Returns:** Promise resolving to the result object.

### removeUsersFromGroup(groupId: string, users: string[], authToken: string): Promise<object>

**Description:** Remove users from a group.
**Parameters:**

- `groupId` (String): The group ID.
- `users` (Array<String>): The users to be removed.
- `authToken` (String): Authentication token.
  **Returns:** Promise resolving to the result object.

### setDefault(groupId: string, authToken: string): Promise<object>

**Description:** Set a group as the default group.
**Parameters:**

- `groupId` (String): The group ID.
- `authToken` (String): Authentication token.
  **Returns:** Promise resolving to the result object.

### updateGroup(groupId: string, name: string, description: string, authToken: string): Promise<object>

**Description:** Update the name and description of a group.
**Parameters:**

- `groupId` (String): The group ID.
- `name` (String): The updated name.
- `description` (String): The updated description.
- `authToken` (String): Authentication token.
  **Returns:** Promise resolving to the updated group object.
