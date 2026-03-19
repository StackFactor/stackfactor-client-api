# Learning Content API

This module provides functions for managing learning content within the StackFactor platform. It allows you to create, update, and retrieve learning content and related activities.

## Importing

```js
import { learningContent } from "@stackfactor/client-api";
// Example usage:
// learningContent.createLearningContent(...)
```

## Methods

### createLearningContent(data: object, token: string): Promise<object>

**Description:** Create new learning content and set its information.
**Parameters:**

- `data` (Object): Learning content data.
- `token` (String): Authorization token.
  **Returns:** Promise resolving to the created learning content object.

### deleteLearningContent(id: string, comments: string, token: string): Promise<object>

**Description:** Delete learning content.
**Parameters:**

- `id` (String): The ID of the learning content to delete.
- `comments` (String): Comments included with the deletion.
- `token` (String): Authorization token.
  **Returns:** Promise resolving to the result object.

### deleteLearningContentMicroSkillLearningContentActivityMedia(id: string, microskillid: string, activityId: string, mediaId: string, token: string): Promise<object>

**Description:** Delete media for a specific micro skill learning content activity.
**Parameters:**

- `id` (String): The learning content ID.
- `microskillid` (String): The micro skill ID.
- `activityId` (String): The activity ID.
- `mediaId` (String): The media ID.
- `token` (String): Authorization token.
  **Returns:** Promise resolving to the result object.

### discardLearningContentChanges(id: string, token: string): Promise<object>

**Description:** Discard draft changes for learning content.
**Parameters:**

- `id` (String): The ID of the learning content.
- `token` (String): Authorization token.
  **Returns:** Promise resolving to the result object.

### generateLearningActivityContent(learningObjectives: string, skillId: string, microSkillId: string, learningActivity: object, otherLearningActivities: string[], integrationId: string, contentType: string, token: string, onProgressStatus?: (data: object) => void): Promise<object>

**Description:** Generate learning activity content using AI. Uses socket.io for real-time progress updates.
**Parameters:**

- `learningObjectives` (String): The learning objectives.
- `skillId` (String): The skill ID.
- `microSkillId` (String): The micro skill ID.
- `learningActivity` (Object): The learning activity data.
- `otherLearningActivities` (Array<String>, optional): Other learning activities for context.
- `integrationId` (String): The integration ID.
- `contentType` (String): The content type.
- `token` (String): Authorization token.
- `onProgressStatus` (Function, optional): Callback for progress updates.
  **Returns:** Promise resolving to the generated content object.

### generateMicroSkillTestKnowledge(microSkill: string, token: string, onProgressStatus?: (data: object) => void): Promise<object>

**Description:** Generate micro skill test knowledge using AI. Uses socket.io for real-time progress updates.
**Parameters:**

- `microSkill` (String): The micro skill data.
- `token` (String): Authorization token.
- `onProgressStatus` (Function, optional): Callback for progress updates.
  **Returns:** Promise resolving to the generated test knowledge object.

### getLearningContentInformationById(id: string, version: string, token: string): Promise<object>

**Description:** Retrieve learning content information by its ID and version.
**Parameters:**

- `id` (String): The learning content ID.
- `version` (String): The version of the learning content.
- `token` (String): Authorization token.
  **Returns:** Promise resolving to the learning content object.

### getLearningContentList(filter: string[], version: string, includeDeleted: boolean, token: string): Promise<object[]>

**Description:** Retrieve a list of available learning content.
**Parameters:**

- `filter` (Array<String>): Filter used to select learning content.
- `version` (String): The version to retrieve.
- `includeDeleted` (Boolean): When true, returns deleted records as well.
- `token` (String): Authorization token.
  **Returns:** Promise resolving to an array of learning content objects.

### getLearningContentMicroSkillLearningContentActivitySceneAudio(contentId: string, microSkillId: string, learningActivityId: string, sceneId: string, token: string, version: string): Promise<Blob>

**Description:** Retrieve audio for a learning content scene.
**Parameters:**

- `contentId` (String): The content ID.
- `microSkillId` (String): The micro skill ID.
- `learningActivityId` (String): The learning activity ID.
- `sceneId` (String): The scene ID.
- `token` (String): Authorization token.
- `version` (String): The version.
  **Returns:** Promise resolving to a Blob containing the audio data.

### getLearningContentMicroSkillLearningContentActivityMedia(id: string, microskillid: string, activityId: string, mediaId: string, token: string): Promise<object>

**Description:** Retrieve media for a specific micro skill learning content activity.
**Parameters:**

- `id` (String): The learning content ID.
- `microskillid` (String): The micro skill ID.
- `activityId` (String): The activity ID.
- `mediaId` (String): The media ID.
- `token` (String): Authorization token.
  **Returns:** Promise resolving to a Blob containing the media data.

### migrateLearningContentStorageType(id: string, token: string): Promise<object>

**Description:** Migrate learning content storage type.
**Parameters:**

- `id` (String): The ID of the content to migrate.
- `token` (String): Authorization token.
  **Returns:** Promise resolving to the result object.

### publishLearningContent(id: string, comments: string, token: string): Promise<object>

**Description:** Publish learning content.
**Parameters:**

- `id` (String): The ID of the content to publish.
- `comments` (String): Comments to include with the request.
- `token` (String): Authorization token.
  **Returns:** Promise resolving to the result object.

### setLearningContentInformation(id: string, data: object, token: string): Promise<object>

**Description:** Update learning content information.
**Parameters:**

- `id` (String): The learning content ID.
- `data` (Object): Data used to update the learning content.
- `token` (String): Authorization token.
  **Returns:** Promise resolving to the updated learning content object.

### setLearningContentPartialContentInformation(id: string, data: object, token: string): Promise<object>

**Description:** Set partial content information for learning content.
**Parameters:**

- `id` (String): The learning content ID.
- `data` (Object): Partial data to update.
- `token` (String): Authorization token.
  **Returns:** Promise resolving to the result object.

### setLearningContentLearningContentInformation(id: string, learningcontentid: string, microSkillId: string, data: object, token: string): Promise<string>

**Description:** Set the content for a specific learning activity.
**Parameters:**

- `id` (String): The learning content ID.
- `learningcontentid` (String): The learning content activity ID.
- `microSkillId` (String): The micro skill ID.
- `data` (Object): Data to set.
- `token` (String): Authorization token.
  **Returns:** Promise resolving to "OK" if successful.

### setLearningContentLearningMicroSkillContentInformation(id: string, microskillid: string, data: object, token: string): Promise<string>

**Description:** Set all learning content for a specific micro skill.
**Parameters:**

- `id` (String): The learning content ID.
- `microskillid` (String): The micro skill ID.
- `data` (Object): Data to set.
- `token` (String): Authorization token.
  **Returns:** Promise resolving to "OK" if successful.

### setLearningContentTags(id: string, tags: object, token: string): Promise<object>

**Description:** Update the learning content tags.
**Parameters:**

- `id` (String): The learning content ID.
- `tags` (Object): Updated tags.
- `token` (String): Authorization token.
  **Returns:** Promise resolving to the result object.

### uploadLearningContentMicroSkillLearningContentActivityMedia(id: string, microskillid: string, activityId: string, mediaId: string, blob: Blob, token: string): Promise<object>

**Description:** Upload media for a specific micro skill learning content activity.
**Parameters:**

- `id` (String): The learning content ID.
- `microskillid` (String): The micro skill ID.
- `activityId` (String): The activity ID.
- `mediaId` (String): The media ID.
- `blob` (Blob): The media file to upload.
- `token` (String): Authorization token.
  **Returns:** Promise resolving to the result object.

### watchLearningContent(id: string, watch: boolean, token: string): Promise<object>

**Description:** Set the watch status for learning content.
**Parameters:**

- `id` (String): The learning content ID.
- `watch` (Boolean): Set to true or false.
- `token` (String): Authorization token.
  **Returns:** Promise resolving to the result object.
