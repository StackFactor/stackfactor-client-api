# Skill API

This module provides functions for managing skills within the StackFactor platform. It allows you to create, update, delete, publish, validate, and manage skills, including importing skills from templates and tracking template updates.

## Importing

```js
import { skill } from '@stackfactor/client-api';
```

## Methods

### createSkill(data: object, token: string): Promise<object>

**Description:** Create a new skill and set its information.
**Parameters:**

- `data` (Object): Skill data.
- `token` (String): Authorization token.

**Returns:** Promise resolving to the created skill object.

### createSkillsFromTemplates(templateIds: string[], token: string): Promise<object>

**Description:** Create skills from multiple templates.
**Parameters:**

- `templateIds` (Array<String>): The template IDs.
- `token` (String): Authorization token.

**Returns:** Promise resolving to the created skills object.

### deleteSkill(id: string, comments: string, token: string): Promise<object>

**Description:** Delete a skill.
**Parameters:**

- `id` (String): The ID of the skill to delete.
- `comments` (String): Comments included with the deletion.
- `token` (String): Authorization token.

**Returns:** Promise resolving to the result object.

### discardSkillChanges(id: string, token: string): Promise<object>

**Description:** Discard draft changes for a skill.
**Parameters:**

- `id` (String): The skill ID.
- `token` (String): Authorization token.

**Returns:** Promise resolving to the result object.

### getCurrentUserTeamSkills(version: string, token: string): Promise<object>

**Description:** Retrieve the skills for the team of the currently logged-in user.
**Parameters:**

- `version` (String): The version to retrieve.
- `token` (String): Authorization token.

**Returns:** Promise resolving to the skills list.

### getImportedSkillTemplates(token: string): Promise<object>

**Description:** Retrieve the list of imported skill templates.
**Parameters:**

- `token` (String): Authorization token.

**Returns:** Promise resolving to the list object.

### getSkillInformationById(id: number, version: string, returnNullIfVersionNotFound: boolean, token: string): Promise<object>

**Description:** Retrieve skill information by its ID and version.
**Parameters:**

- `id` (Number): The skill ID.
- `version` (String): The version to retrieve.
- `returnNullIfVersionNotFound` (Boolean): Return null if the version is not found.
- `token` (String): Authorization token.

**Returns:** Promise resolving to the skill object.

### getSkillList(filter: object, version: string, includeDeleted: boolean, includeDetailedInformation: boolean, returnDefaultIfVersionNotAvailable: boolean, namesOnly: boolean, token: string): Promise<object>

**Description:** Retrieve a list of skills with optional filters.
**Parameters:**

- `filter` (Object): Filter to select skills.
- `version` (String): The version to retrieve.
- `includeDeleted` (Boolean): Include deleted records.
- `includeDetailedInformation` (Boolean): Include detailed information.
- `returnDefaultIfVersionNotAvailable` (Boolean): Return default version if published not available.
- `namesOnly` (Boolean): Return only skill names.
- `token` (String): Authorization token.

**Returns:** Promise resolving to the skills list.

### getSkillRelatedRoles(id: string, version: string, token: string): Promise<object>

**Description:** Retrieve the roles related to a specific skill.
**Parameters:**

- `id` (String): The skill ID.
- `version` (String): The version to retrieve.
- `token` (String): Authorization token.

**Returns:** Promise resolving to the related roles object.

### getSkillRequiredAssessmentType(id: string, version: string, token: string): Promise<object>

**Description:** Retrieve the required assessment type for a specific skill.
**Parameters:**

- `id` (String): The skill ID.
- `version` (String): The version to retrieve.
- `token` (String): Authorization token.

**Returns:** Promise resolving to the assessment type object.

### getSkillTemplateUpdates(id: string, token: string): Promise<object>

**Description:** Retrieve template updates for a skill.
**Parameters:**

- `id` (String): The skill ID.
- `token` (String): Authorization token.

**Returns:** Promise resolving to the updates object.

### getTeamSkillsById(id: string, version: string, token: string): Promise<object>

**Description:** Retrieve the skills for a team by team ID.
**Parameters:**

- `id` (String): The team ID.
- `version` (String): The version to retrieve.
- `token` (String): Authorization token.

**Returns:** Promise resolving to the team skills object.

### importSkillTemplates(data: object[], token: string): Promise<object>

**Description:** Import skill templates.
**Parameters:**

- `data` (Array<Object>): The list of skill templates to import.
- `token` (String): Authorization token.

**Returns:** Promise resolving to the result object.

### publishSkill(id: number, comments: string, token: string): Promise<object>

**Description:** Publish a skill.
**Parameters:**

- `id` (Number): The skill ID.
- `comments` (String): Comments to include with the request.
- `token` (String): Authorization token.

**Returns:** Promise resolving to the result object.

### setSkillInformation(id: string, data: object, token: string): Promise<object>

**Description:** Update skill profile information.
**Parameters:**

- `id` (String): The skill ID.
- `data` (Object): Data used to update the skill.
- `token` (String): Authorization token.

**Returns:** Promise resolving to the result object.

### setSkillInformationFromTemplate(id: string, data: object, token: string): Promise<object>

**Description:** Update skill information from a template.
**Parameters:**

- `id` (String): The skill ID.
- `data` (Object): Data used to update the skill.
- `token` (String): Authorization token.

**Returns:** Promise resolving to the result object.

### validateSkill(id: string, token: string): Promise<object>

**Description:** Validate a skill for completeness and correctness.
**Parameters:**

- `id` (String): The skill ID.
- `token` (String): Authorization token.

**Returns:** Promise resolving to the validation result.

### watchSkill(id: string, watch: boolean, token: string): Promise<object>

**Description:** Set the watch status for a skill.
**Parameters:**

- `id` (String): The skill ID.
- `watch` (Boolean): Set to true or false.
- `token` (String): Authorization token.

**Returns:** Promise resolving to the result object.
