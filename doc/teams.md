# Teams API

This module provides functions for managing teams within the StackFactor platform. It allows you to create, update, delete, and retrieve teams, as well as manage team members and team skills.

## Importing

```js
import { teams } from '@stackfactor/client-api';
```

## Methods

### addUsersToTeam(id: string, users: object[], token: string): Promise<object>

**Description:** Add users to a team.
**Parameters:**

- `id` (String): The team ID.
- `users` (Array<Object>): The users to add.
- `token` (String): Authorization token.

**Returns:** Promise resolving to the result object.

### createTeam(data: object, token: string): Promise<object>

**Description:** Create a new team.
**Parameters:**

- `data` (Object): Team data.
- `token` (String): Authorization token.

**Returns:** Promise resolving to the created team object.

### deleteTeam(id: string, token: string): Promise<object>

**Description:** Delete a team.
**Parameters:**

- `id` (String): The team ID.
- `token` (String): Authorization token.

**Returns:** Promise resolving to the result object.

### getSkillAssessmentCompletionStatusByTeam(teamId: string, token: string): Promise<object>

**Description:** Retrieve the skill assessment completion status for a team.
**Parameters:**

- `teamId` (String): The team ID.
- `token` (String): Authorization token.

**Returns:** Promise resolving to the completion status object.

### getTeamById(id: string, token: string): Promise<object>

**Description:** Retrieve a team by its ID.
**Parameters:**

- `id` (String): The team ID.
- `token` (String): Authorization token.

**Returns:** Promise resolving to the team object.

### getTeamByIdRoles(id: string, version: string, token: string): Promise<object>

**Description:** Retrieve the roles associated with a team.
**Parameters:**

- `id` (String): The team ID.
- `version` (String): The version.
- `token` (String): Authorization token.

**Returns:** Promise resolving to the team roles object.

### getTeams(filter: object, token: string): Promise<object>

**Description:** Retrieve a list of teams.
**Parameters:**

- `filter` (Object): Filter criteria for the list.
- `token` (String): Authorization token.

**Returns:** Promise resolving to the list of teams.

### getTeamByUserId(userId: string, token: string): Promise<object>

**Description:** Retrieve the team for a specific user.
**Parameters:**

- `userId` (String): The user ID.
- `token` (String): Authorization token.

**Returns:** Promise resolving to the team object.

### getTopTeam(token: string): Promise<object>

**Description:** Retrieve the top-level team.
**Parameters:**

- `token` (String): Authorization token.

**Returns:** Promise resolving to the top team object.

### removeUsersFromTeam(id: string, users: object[], token: string): Promise<object>

**Description:** Remove users from a team.
**Parameters:**

- `id` (String): The team ID.
- `users` (Array<Object>): The users to remove.
- `token` (String): Authorization token.

**Returns:** Promise resolving to the result object.

### setDefault(token: string): Promise<object>

**Description:** Set the default team.
**Parameters:**

- `token` (String): Authorization token.

**Returns:** Promise resolving to the result object.

### updateTeam(id: string, data: object, token: string): Promise<object>

**Description:** Update a team.
**Parameters:**

- `id` (String): The team ID.
- `data` (Object): Updated team data.
- `token` (String): Authorization token.

**Returns:** Promise resolving to the result object.
