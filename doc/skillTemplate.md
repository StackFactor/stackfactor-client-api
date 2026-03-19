# Skill Template API

This module provides functions for managing skill templates within the StackFactor platform. It allows you to create, update, delete, publish, validate, and manage skill templates, including technology stacks and tags.

## Importing

```js
import { skillTemplate } from '@stackfactor/client-api';
```

## Methods

### createSkillTemplate(data: object, token: string): Promise<object>

**Description:** Create a new skill template and set its information.
**Parameters:**

- `data` (Object): Skill template data.
- `token` (String): Authorization token.

**Returns:** Promise resolving to the created skill template object.

### deleteSkillTemplate(id: string, comments: string, token: string): Promise<object>

**Description:** Delete a skill template.
**Parameters:**

- `id` (String): The skill template ID.
- `comments` (String): Comments included with the deletion.
- `token` (String): Authorization token.

**Returns:** Promise resolving to the result object.

### discardSkillTemplateChanges(id: string, token: string): Promise<object>

**Description:** Discard draft changes for a skill template.
**Parameters:**

- `id` (String): The skill template ID.
- `token` (String): Authorization token.

**Returns:** Promise resolving to the result object.

### getSkillTemplateInformationById(id: string, version: string, returnNullIfVersionNotFound: boolean, token: string): Promise<object>

**Description:** Retrieve skill template information by ID and version.
**Parameters:**

- `id` (String): The skill template ID.
- `version` (String): The version to retrieve.
- `returnNullIfVersionNotFound` (Boolean): Return null if the version is not found.
- `token` (String): Authorization token.

**Returns:** Promise resolving to the skill template object.

### getSkillTemplateList(filter: object, version: string, includeDeleted: boolean, includeDetailedInformation: boolean, returnDefaultIfVersionNotAvailable: boolean, namesOnly: boolean, token: string): Promise<object>

**Description:** Retrieve a list of skill templates with optional filters.
**Parameters:**

- `filter` (Object): Filter to select templates.
- `version` (String): The version to retrieve.
- `includeDeleted` (Boolean): Include deleted records.
- `includeDetailedInformation` (Boolean): Include detailed information.
- `returnDefaultIfVersionNotAvailable` (Boolean): Return default version if published not available.
- `namesOnly` (Boolean): Return only template names.
- `token` (String): Authorization token.

**Returns:** Promise resolving to the template list.

### getTechnologyStacks(token: string): Promise<object>

**Description:** Retrieve the list of available technology stacks.
**Parameters:**

- `token` (String): Authorization token.

**Returns:** Promise resolving to the list of technology stacks.

### publishTemplate(id: string, comments: string, token: string): Promise<object>

**Description:** Publish a skill template.
**Parameters:**

- `id` (String): The skill template ID.
- `comments` (String): Comments to include with the request.
- `token` (String): Authorization token.

**Returns:** Promise resolving to the result object.

### setTemplateInformation(id: string, data: object, token: string): Promise<object>

**Description:** Update skill template profile information.
**Parameters:**

- `id` (String): The skill template ID.
- `data` (Object): Data used to update the template.
- `token` (String): Authorization token.

**Returns:** Promise resolving to the result object.

### setTemplateTags(id: string, tags: string[], token: string): Promise<object>

**Description:** Set tags for a skill template.
**Parameters:**

- `id` (String): The skill template ID.
- `tags` (Array<String>): The tags to set.
- `token` (String): Authorization token.

**Returns:** Promise resolving to the result object.

### validateTemplate(id: string, token: string): Promise<object>

**Description:** Validate a skill template for completeness and correctness.
**Parameters:**

- `id` (String): The skill template ID.
- `token` (String): Authorization token.

**Returns:** Promise resolving to the validation result.

### watchSkillTemplate(id: string, watch: boolean, token: string): Promise<object>

**Description:** Set the watch status for a skill template.
**Parameters:**

- `id` (String): The skill template ID.
- `watch` (Boolean): Set to true or false.
- `token` (String): Authorization token.

**Returns:** Promise resolving to the result object.
