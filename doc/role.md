# Role API

This module provides functions for managing roles within the StackFactor platform. It allows you to create, update, delete, publish, and manage roles, including creating roles from templates, importing templates, and assigning roles to users.

## Importing

```js
import { role } from '@stackfactor/client-api';
```

## Methods

### createRole(data: object, token: string): Promise<object>

**Description:** Create a new role and set its information.
**Parameters:**

- `data` (Object): Role data.
- `token` (String): Authorization token.

**Returns:** Promise resolving to the created role object.

### createRoleFromTemplate(templateId: string, data: object, token: string): Promise<object>

**Description:** Create a role from a template.
**Parameters:**

- `templateId` (String): The template ID.
- `data` (Object): Role data.
- `token` (String): Authorization token.

**Returns:** Promise resolving to the created role object.

### deleteRole(id: string, comments: string, token: string): Promise<object>

**Description:** Delete a role.
**Parameters:**

- `id` (String): The ID of the role to delete.
- `comments` (String): Comments included with the deletion.
- `token` (String): Authorization token.

**Returns:** Promise resolving to the result object.

### discardRoleChanges(id: string, token: string): Promise<object>

**Description:** Discard draft changes for a role.
**Parameters:**

- `id` (String): The role ID.
- `token` (String): Authorization token.

**Returns:** Promise resolving to the result object.

### getImportedRoleTemplates(token: string): Promise<object>

**Description:** Retrieve the list of imported role templates.
**Parameters:**

- `token` (String): Authorization token.

**Returns:** Promise resolving to the list object.

### getRoleInformationById(id: number, version: string, returnNullIfVersionNotFound: boolean, token: string): Promise<object>

**Description:** Retrieve role information by its ID and version.
**Parameters:**

- `id` (Number): The role ID.
- `version` (String): The version to retrieve.
- `returnNullIfVersionNotFound` (Boolean): Return null if the version is not found.
- `token` (String): Authorization token.

**Returns:** Promise resolving to the role object.

### getRolesList(filter: object, version: string, includeDeleted: boolean, includeDetailedInformation: boolean, returnDefaultIfVersionNotAvailable: boolean, namesOnly: boolean, token: string): Promise<object>

**Description:** Retrieve a list of roles with optional filters.
**Parameters:**

- `filter` (Object): Filter to select roles.
- `version` (String): The version to retrieve.
- `includeDeleted` (Boolean): Include deleted records.
- `includeDetailedInformation` (Boolean): Include detailed information.
- `returnDefaultIfVersionNotAvailable` (Boolean): Return default version if published not available.
- `namesOnly` (Boolean): Return only role names.
- `token` (String): Authorization token.

**Returns:** Promise resolving to the roles list.

### getRoleTemplateUpdates(id: string, token: string): Promise<object>

**Description:** Retrieve template updates for a role.
**Parameters:**

- `id` (String): The role ID.
- `token` (String): Authorization token.

**Returns:** Promise resolving to the updates object.

### importRoleTemplates(data: object[], token: string): Promise<object>

**Description:** Import role templates.
**Parameters:**

- `data` (Array<Object>): The list of role templates to import.
- `token` (String): Authorization token.

**Returns:** Promise resolving to the result object.

### publishRole(id: number, comments: string, token: string): Promise<object>

**Description:** Publish a role.
**Parameters:**

- `id` (Number): The role ID.
- `comments` (String): Comments to include with the request.
- `token` (String): Authorization token.

**Returns:** Promise resolving to the result object.

### setRoleInformation(id: string, data: object, token: string): Promise<object>

**Description:** Update role profile information.
**Parameters:**

- `id` (String): The role ID.
- `data` (Object): Data used to update the role.
- `token` (String): Authorization token.

**Returns:** Promise resolving to the result object.

### setRoleInformationFromTemplate(id: string, data: object, token: string): Promise<object>

**Description:** Update role information from a template.
**Parameters:**

- `id` (String): The role ID.
- `data` (Object): Data used to update the role.
- `token` (String): Authorization token.

**Returns:** Promise resolving to the result object.

### setUserRoles(id: string, roles: object[], jobDescription: string, token: string): Promise<object>

**Description:** Assign roles to a user.
**Parameters:**

- `id` (String): The user ID.
- `roles` (Array<Object>): The list of roles to assign.
- `jobDescription` (String): The job description for the user.
- `token` (String): Authorization token.

**Returns:** Promise resolving to the result object.

### watchRole(id: string, watch: boolean, token: string): Promise<object>

**Description:** Set the watch status for a role.
**Parameters:**

- `id` (String): The role ID.
- `watch` (Boolean): Set to true or false.
- `token` (String): Authorization token.

**Returns:** Promise resolving to the result object.
