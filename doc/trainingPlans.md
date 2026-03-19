# Training Plans API

This module provides functions for managing training plans within the StackFactor platform. It allows you to create, update, delete, publish, archive, and manage training plans, including tasks, activities, and baselines.

## Importing

```js
import { trainingPlans } from '@stackfactor/client-api';
```

## Methods

### archiveTrainingPlan(id: string, token: string): Promise<object>

**Description:** Archive a training plan.
**Parameters:**

- `id` (String): The training plan ID.
- `token` (String): Authorization token.

**Returns:** Promise resolving to the result object.

### createTrainingPlan(data: object, type: number, saveAsDraft: boolean, token: string): Promise<void>

**Description:** Create a new training plan and set its information.
**Parameters:**

- `data` (Object): Training plan data.
- `type` (Number): The training plan type.
- `saveAsDraft` (Boolean): Whether to save as draft.
- `token` (String): Authorization token.

**Returns:** Promise resolving when created.

### deleteTrainingPlan(id: string, token: string): Promise<object>

**Description:** Delete a training plan.
**Parameters:**

- `id` (String): The training plan ID.
- `token` (String): Authorization token.

**Returns:** Promise resolving to the result object.

### discardTrainingPlanChanges(id: string, token: string): Promise<object>

**Description:** Discard draft changes for a training plan.
**Parameters:**

- `id` (String): The training plan ID.
- `token` (String): Authorization token.

**Returns:** Promise resolving to the result object.

### generateNewBaseline(id: string, token: string): Promise<object>

**Description:** Generate a new baseline for a training plan.
**Parameters:**

- `id` (String): The training plan ID.
- `token` (String): Authorization token.

**Returns:** Promise resolving to the result object.

### getAllTrainingPlansTasksSummary(userId: string, token: string): Promise<object>

**Description:** Retrieve the summary of all training plan tasks for a user.
**Parameters:**

- `userId` (String): The user ID.
- `token` (String): Authorization token.

**Returns:** Promise resolving to the tasks summary object.

### getListOfTrainingPlans(filter: object, version: string, token: string): Promise<object>

**Description:** Retrieve a list of training plans.
**Parameters:**

- `filter` (Object): Filter criteria for the list.
- `version` (String): The version to retrieve.
- `token` (String): Authorization token.

**Returns:** Promise resolving to the list of training plans.

### getTrainingPlanById(id: string, version: string, token: string): Promise<object>

**Description:** Retrieve a training plan by its ID and version.
**Parameters:**

- `id` (String): The training plan ID.
- `version` (String): The version.
- `token` (String): Authorization token.

**Returns:** Promise resolving to the training plan object.

### publishTrainingPlan(id: string, token: string): Promise<object>

**Description:** Publish a training plan.
**Parameters:**

- `id` (String): The training plan ID.
- `token` (String): Authorization token.

**Returns:** Promise resolving to the result object.

### updateActivities(id: string, data: object, token: string): Promise<object>

**Description:** Update the activities for a training plan.
**Parameters:**

- `id` (String): The training plan ID.
- `data` (Object): Updated activity data.
- `token` (String): Authorization token.

**Returns:** Promise resolving to the result object.

### updateTrainingPlan(id: string, data: object, token: string): Promise<object>

**Description:** Update a training plan.
**Parameters:**

- `id` (String): The training plan ID.
- `data` (Object): Updated training plan data.
- `token` (String): Authorization token.

**Returns:** Promise resolving to the result object.

### updateTrainingPlanTaskStatus(id: string, taskId: string, data: object, token: string): Promise<object>

**Description:** Update the status of a training plan task.
**Parameters:**

- `id` (String): The training plan ID.
- `taskId` (String): The task ID.
- `data` (Object): Updated task status data.
- `token` (String): Authorization token.

**Returns:** Promise resolving to the result object.
