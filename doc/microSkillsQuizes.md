# Micro Skills Quizzes API

This module provides functions for managing micro skills quizzes and responses within the StackFactor platform. It allows you to retrieve and save quiz responses for learning content and micro skills.

## Importing

```js
import { microSkillsQuizes } from "@stackfactor/client-api";
// Example usage:
// microSkillsQuizes.getResponses(...)
```

## Methods

### getResponses(learningContentId: string, microSkillId: string, token: string): Promise<object>

**Description:** Retrieve responses for a micro skill quiz.
**Parameters:**

- `learningContentId` (String): The learning content ID.
- `microSkillId` (String): The micro skill ID.
- `token` (String): Authorization token.
  **Returns:** Promise resolving to the quiz responses object.

### saveResponses(learningContentId: string, microSkillId: string, responses: object[], token: string): Promise<object>

**Description:** Save responses for a micro skill quiz.
**Parameters:**

- `learningContentId` (String): The learning content ID.
- `microSkillId` (String): The micro skill ID.
- `responses` (Array<Object>): The quiz responses to save.
- `token` (String): Authorization token.
  **Returns:** Promise resolving to the result object.
