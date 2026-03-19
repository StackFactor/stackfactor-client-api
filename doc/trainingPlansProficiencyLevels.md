# Training Plans Proficiency Levels API

This module provides functions for managing training plan proficiency levels within the StackFactor platform. It allows you to retrieve, update, and reorder proficiency levels.

## Importing

```js
import { trainingPlansProficiencyLevels } from '@stackfactor/client-api';
```

## Methods

### getTrainingPlanProficiencyLevel(proficiencyLevelId: string, token: string): Promise<object>

**Description:** Retrieve a single training plan proficiency level by its ID.
**Parameters:**

- `proficiencyLevelId` (String): The proficiency level ID.
- `token` (String): Authorization token.

**Returns:** Promise resolving to the proficiency level object.

### getTrainingPlanProficiencyLevelList(includeDeleted: boolean, includeDetailedInformation: boolean, includeArchived: boolean, token: string): Promise<object>

**Description:** Retrieve the list of training plan proficiency levels.
**Parameters:**

- `includeDeleted` (Boolean): If true, include deleted levels.
- `includeDetailedInformation` (Boolean): If true, include detailed information.
- `includeArchived` (Boolean): If true, include archived levels.
- `token` (String): Authorization token.

**Returns:** Promise resolving to the proficiency levels list.

### reorderTrainingPlansProficiencyLevels(order: object[], token: string): Promise<void>

**Description:** Reorder training plan proficiency levels.
**Parameters:**

- `order` (Array<Object>): The new order of proficiency levels.
- `token` (String): Authorization token.

**Returns:** Promise resolving when reordered.

### updateTrainingPlanProficiencyLevel(proficiencyLevelId: string, data: object, token: string): Promise<void>

**Description:** Update a training plan proficiency level.
**Parameters:**

- `proficiencyLevelId` (String): The proficiency level ID.
- `data` (Object): Updated proficiency level data.
- `token` (String): Authorization token.

**Returns:** Promise resolving when updated.
