# Skill Assessments API

This module provides functions for managing skill assessments within the StackFactor platform. It allows you to create, delete, and retrieve skill assessments for users.

## Importing

```js
import { skillAssessments } from '@stackfactor/client-api';
```

## Methods

### addEntry(id: string, data: object, comments: string, token: string): Promise<object>

**Description:** Add a new entry to an existing skill assessment.
**Parameters:**

- `id` (String): The skill assessment ID.
- `data` (Object): The entry data.
- `comments` (String): Comments for the entry.
- `token` (String): Authorization token.

**Returns:** Promise resolving to the result object.

### create(data: object, comments: string, userId: string, token: string): Promise<object>

**Description:** Create a new skill assessment.
**Parameters:**

- `data` (Object): Skill assessment data.
- `comments` (String): Comments for the assessment.
- `userId` (String): The user ID.
- `token` (String): Authorization token.

**Returns:** Promise resolving to the created assessment object.

### deleteSkillAssessment(id: string, comments: string, token: string): Promise<object>

**Description:** Delete a skill assessment.
**Parameters:**

- `id` (String): The skill assessment ID.
- `comments` (String): Comments included with the deletion.
- `token` (String): Authorization token.

**Returns:** Promise resolving to the result object.

### getById(id: string, token: string): Promise<object>

**Description:** Retrieve a skill assessment by its ID.
**Parameters:**

- `id` (String): The skill assessment ID.
- `token` (String): Authorization token.

**Returns:** Promise resolving to the assessment object.

### getByUserAndSkill(userId: string, skillId: string, token: string): Promise<object>

**Description:** Retrieve a skill assessment by user ID and skill ID.
**Parameters:**

- `userId` (String): The user ID.
- `skillId` (String): The skill ID.
- `token` (String): Authorization token.

**Returns:** Promise resolving to the assessment object.

### getList(userId: string, token: string): Promise<object>

**Description:** Retrieve a list of skill assessments.
**Parameters:**

- `userId` (String): The user ID to filter by.
- `token` (String): Authorization token.

**Returns:** Promise resolving to the list of assessments.
