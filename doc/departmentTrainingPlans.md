# Department Training Plans API

This module provides functions for managing department training plans within the StackFactor platform. It allows you to create, delete, retrieve, publish, and update department training plans.

## Importing

```js
import { departmentTrainingPlans } from '@stackfactor/client-api';
```

## Methods

### createDepartmentTrainingPlan(name: string, summary: string, skill: string, activities: Array<Activity>, token: string): Promise<object>

**Description:** Create a department training plan and set its information.
**Parameters:**

- `name` (String): Name of the training plan.
- `summary` (String): Summary of the training plan.
- `skill` (String): Skill associated with the plan.
- `activities` (Array<Activity>): List of activities for the plan.
- `token` (String): Authorization token.

**Returns:** Promise resolving to the created training plan object.

### deleteDepartmentTrainingPlan(id: string, token: string): Promise<object>

**Description:** Delete a department training plan.
**Parameters:**

- `id` (String): The ID of the training plan to delete.
- `token` (String): Authorization token.

**Returns:** Promise resolving to the result object.

### getDepartmentTrainingPlanInformationById(id: string, version: string, token: string): Promise<object>

**Description:** Retrieve department training plan information by its ID and version.
**Parameters:**

- `id` (String): The plan ID.
- `version` (String): The version of the plan.
- `token` (String): Authorization token.

**Returns:** Promise resolving to the training plan object.

### getDepartmentTrainingPlanList(filter: string, version: string, token: string): Promise<object>

**Description:** Retrieve a list of department training plans.
**Parameters:**

- `filter` (String): Filter used to select the plan.
- `version` (String): The version of the plan.
- `token` (String): Authorization token.

**Returns:** Promise resolving to the list object.

### publishDepartmentTrainingPlan(id: string, token: string): Promise<object>

**Description:** Publish a department training plan.
**Parameters:**

- `id` (String): The ID of the plan to publish.
- `token` (String): Authorization token.

**Returns:** Promise resolving to the result object.

### setDepartmentTrainingPlanInformation(id: string, data: object, token: string): Promise<object>

**Description:** Update department training plan profile information.
**Parameters:**

- `id` (String): The plan ID.
- `data` (Object): Data used to update the plan.
- `token` (String): Authorization token.

**Returns:** Promise resolving to the result object.
