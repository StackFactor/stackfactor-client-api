# Skill Assessment Testing Session API

This module provides functions for managing skill assessment testing sessions within the StackFactor platform. It allows you to create, start, pause, end, and manage testing sessions including retrieving session status and steps.

## Importing

```js
import { skillAssessmentTestingSession } from '@stackfactor/client-api';
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

**Description:** Create a new skill assessment testing session.
**Parameters:**

- `data` (Object): Session data.
- `comments` (String): Comments for the session.
- `userId` (String): The user ID.
- `token` (String): Authorization token.

**Returns:** Promise resolving to the created session object.

### deleteSkillAssessment(id: string, comments: string, token: string): Promise<object>

**Description:** Delete a skill assessment testing session.
**Parameters:**

- `id` (String): The session ID.
- `comments` (String): Comments included with the deletion.
- `token` (String): Authorization token.

**Returns:** Promise resolving to the result object.

### endSession(testingSessionId: string, token: string, keepPartial?: boolean): Promise<object>

**Description:** End a testing session.
**Parameters:**

- `testingSessionId` (String): The testing session ID.
- `token` (String): Authorization token.
- `keepPartial` (Boolean, optional): Whether to keep partial results. Defaults to false.

**Returns:** Promise resolving to the session result.

### getById(id: string, token: string): Promise<object>

**Description:** Retrieve a testing session by its ID.
**Parameters:**

- `id` (String): The session ID.
- `token` (String): Authorization token.

**Returns:** Promise resolving to the session object.

### getByUserAndSkill(userId: string, skillId: string, token: string): Promise<object>

**Description:** Retrieve a testing session by user ID and skill ID.
**Parameters:**

- `userId` (String): The user ID.
- `skillId` (String): The skill ID.
- `token` (String): Authorization token.

**Returns:** Promise resolving to the session object.

### getList(userId: string, token: string): Promise<object>

**Description:** Retrieve a list of testing sessions.
**Parameters:**

- `userId` (String): The user ID to filter by.
- `token` (String): Authorization token.

**Returns:** Promise resolving to the list of sessions.

### getNextStep(testingSessionId: string, selectedAnswers: Array<string>, token: string): Promise<object>

**Description:** Get the next step in a testing session.
**Parameters:**

- `testingSessionId` (String): The testing session ID.
- `selectedAnswers` (Array<String>): The selected answers.
- `token` (String): Authorization token.

**Returns:** Promise resolving to the next step object.

### getSkillTestAssessment(userId: string, skillId: string, token: string): Promise<object>

**Description:** Retrieve a skill test assessment by user and skill.
**Parameters:**

- `userId` (String): The user ID.
- `skillId` (String): The skill ID.
- `token` (String): Authorization token.

**Returns:** Promise resolving to the assessment result.

### pause(testingSessionId: string, token: string): Promise<object>

**Description:** Pause a testing session.
**Parameters:**

- `testingSessionId` (String): The testing session ID.
- `token` (String): Authorization token.

**Returns:** Promise resolving to the result object.

### startSession(skillId: string, saveSession: boolean, token: string): Promise<object>

**Description:** Start a new skill test assessment session.
**Parameters:**

- `skillId` (String): The skill ID.
- `saveSession` (Boolean): Whether to save the session.
- `token` (String): Authorization token.

**Returns:** Promise resolving to the session object with the first step.
