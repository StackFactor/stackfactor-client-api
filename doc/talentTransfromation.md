# Talent Transformation API

This module provides functions for managing talent transformation data within the StackFactor platform. It allows you to retrieve and update talent transformation steps, summaries, and organization-wide progress.

## Importing

```js
import { talentTransfromation } from '@stackfactor/client-api';
```

## Methods

### getTalentTransformationStepsForCurrentUser(authToken: string): Promise<object>

**Description:** Retrieve the talent transformation steps for the currently logged-in user.
**Parameters:**

- `authToken` (String): Authorization token.

**Returns:** Promise resolving to the talent transformation steps object.

### getTalentTransformationSummary(authToken: string): Promise<object>

**Description:** Retrieve the talent transformation summary for the whole organization.
**Parameters:**

- `authToken` (String): Authorization token.

**Returns:** Promise resolving to the summary object.

### getTalentTransformationSummaryForTeam(teamId: string, authToken: string): Promise<object>

**Description:** Retrieve the talent transformation summary for a team.
**Parameters:**

- `teamId` (String): The team ID.
- `authToken` (String): Authorization token.

**Returns:** Promise resolving to the summary object.

### setTalentTransformationStepData(id: string, data: object, returnAllStepsStatuses: boolean, token: string): Promise<object>

**Description:** Update talent transformation step data.
**Parameters:**

- `id` (String): The ID of the talent transformation step to update.
- `data` (Object): Data used to update the step.
- `returnAllStepsStatuses` (Boolean): If true, return all steps statuses.
- `token` (String): Authorization token.

**Returns:** Promise resolving to the result object.
