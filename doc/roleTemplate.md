# Role Template API

This module provides functions for managing role templates within the StackFactor platform. It allows you to create, update, and delete role templates.

## Importing

```js
import { roleTemplate } from "@stackfactor/client-api";
// Example usage:
// roleTemplate.createRoleTemplate(...)
```

## Methods

### createRoleTemplate(data: object, token: string): Promise<object>

**Description:** Create a new role template and set its information.
**Parameters:**

- `data` (Object): Role template data.
- `token` (String): Authorization token.
  **Returns:** Promise resolving to the created role template object.

### deleteRoleTemplate(id: string, comments: string, token: string): Promise<object>

**Description:** Delete a role template.
**Parameters:**

- `id` (String): The ID of the template to delete.
- `comments` (String): Comments included with the deletion.
- `token` (String): Authorization token.
  **Returns:** Promise resolving to the result object.

### discardRoleTemplateChanges(id: string, token: string): Promise<object>

**Description:** Discard draft changes for a role template.
**Parameters:**

- `id` (String): The ID of the role template.
- `token` (String): Authorization token.
  **Returns:** Promise resolving to the result object.

### getRoleTemplateInformationById(id: string, version: string, token: string): Promise<object>

**Description:** Retrieve role template information by its ID and version.
**Parameters:**

- `id` (String): The template ID.
- `version` (String): The version of the template.
- `token` (String): Authorization token.
  **Returns:** Promise resolving to the role template object.

### getRoleTemplateList(filter: string[], version: string, includeDeleted: boolean, namesOnly: boolean, token: string): Promise<object>

**Description:** Retrieve a list of role templates.
**Parameters:**

- `filter` (Array<String>): The list of templates to retrieve.
- `version` (String): The version of the template.
- `includeDeleted` (Boolean): When true, returns deleted records as well.
- `namesOnly` (Boolean): When true, returns only template names.
- `token` (String): Authorization token.
  **Returns:** Promise resolving to the list object.

### publishTemplate(id: number, comments: string, token: string): Promise<object>

**Description:** Publish a role template.
**Parameters:**

- `id` (Number): The ID of the template to publish.
- `comments` (String): Comments to include with the request.
- `token` (String): Authorization token.
  **Returns:** Promise resolving to the result object.

### setTemplateInformation(id: string, data: object, token: string): Promise<object>

**Description:** Update role template profile information.
**Parameters:**

- `id` (String): The template ID.
- `data` (Object): Data used to update the template.
- `token` (String): Authorization token.
  **Returns:** Promise resolving to the result object.

### setTemplateTags(id: string, tags: object, token: string): Promise<object>

**Description:** Update role template tags.
**Parameters:**

- `id` (String): The template ID.
- `tags` (Object): Updated template tags.
- `token` (String): Authorization token.
  **Returns:** Promise resolving to the result object.

### watchRoleTemplate(id: string, watch: boolean, token: string): Promise<object>

**Description:** Set the watch status for a role template.
**Parameters:**

- `id` (String): The role template ID.
- `watch` (Boolean): Set to true or false.
- `token` (String): Authorization token.
  **Returns:** Promise resolving to the result object.
