# Learning Path API

This module provides functions for managing learning paths within the StackFactor platform. It allows you to create, update, and retrieve learning path information.

## Importing

```js
import { learningPath } from "@stackfactor/client-api";
// Example usage:
// learningPath.createLearningPath(...)
```

## Methods

### createLearningPath(data: object, token: string): Promise<object>

**Description:** Create a new learning path and set its information.
**Parameters:**

- `data` (Object): Learning path data.
- `token` (String): Authorization token.
  **Returns:** Promise resolving to the created learning path object.

### deleteLearningPath(id: string, comments: string, token: string): Promise<object>

**Description:** Delete a learning path.
**Parameters:**

- `id` (String): The ID of the learning path to delete.
- `comments` (String): Comments for the approver.
- `token` (String): Authorization token.
  **Returns:** Promise resolving to the result object.

### discardLearningPathChanges(id: string, token: string): Promise<object>

**Description:** Discard draft changes for a learning path.
**Parameters:**

- `id` (String): The ID of the learning path.
- `token` (String): Authorization token.
  **Returns:** Promise resolving to the result object.

### getLearningPathInformationById(id: string, version: string, token: string): Promise<object>

**Description:** Retrieve learning path information by its ID and version.
**Parameters:**

- `id` (String): The learning path ID.
- `version` (String): The version of the learning path.
- `token` (String): Authorization token.
  **Returns:** Promise resolving to the learning path object.

### getLearningPathsList(list: string[], version: string, includeDeleted: boolean, token: string): Promise<object[]>

**Description:** Retrieve a list of learning paths.
**Parameters:**

- `list` (Array<String>): Filter used to select learning paths.
- `version` (String): The version to retrieve.
- `includeDeleted` (Boolean): When true, returns deleted records as well.
- `token` (String): Authorization token.
  **Returns:** Promise resolving to an array of learning path objects.

### publishLearningPath(id: string, comments: string, token: string): Promise<object>

**Description:** Publish a learning path.
**Parameters:**

- `id` (String): The ID of the learning path to publish.
- `comments` (String): Comments to include with the request.
- `token` (String): Authorization token.
  **Returns:** Promise resolving to the result object.

### setLearningPathInformation(id: string, data: object, token: string): Promise<object>

**Description:** Update learning path profile information.
**Parameters:**

- `id` (String): The learning path ID.
- `data` (Object): Data used to update the learning path.
- `token` (String): Authorization token.
  **Returns:** Promise resolving to the result object.

### setLearningPathTags(id: string, tags: object, token: string): Promise<object>

**Description:** Update learning path tags.
**Parameters:**

- `id` (String): The learning path ID.
- `tags` (Object): The updated tags.
- `token` (String): Authorization token.
  **Returns:** Promise resolving to the result object.
