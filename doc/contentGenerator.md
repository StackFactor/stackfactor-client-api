# Content Generator API

This module provides functions for generating content using AI-powered content generators within the StackFactor platform. It supports both synchronous generation with real-time progress updates via WebSocket and asynchronous generation via REST API.

## Importing

```js
import { contentGenerator } from "@stackfactor/client-api";
```

## Methods

### generateContent(data: object, contentType: string, integrationId: string, token: string, onProgressStatus?: ((progress: ProgressData) => void) | null): Promise<object>

**Description:** Generate content synchronously with optional real-time progress updates via WebSocket.
**Parameters:**

- `data` (Object): The content generation data.
- `contentType` (String): The type of content to generate.
- `integrationId` (String): The integration ID to use.
- `token` (String): Authorization token.
- `onProgressStatus` (Function | null, optional): Callback for real-time progress updates.

**Returns:** Promise resolving to the generated content object.

### generateContentAsync(id: string, data: object, contentType: string, elementType: string, integrationId: string, comments: string, token: string): Promise<object>

**Description:** Generate content asynchronously via REST API.
**Parameters:**

- `id` (String): The element ID.
- `data` (Object): The content generation data.
- `contentType` (String): The type of content to generate.
- `elementType` (String): The element type.
- `integrationId` (String): The integration ID to use.
- `comments` (String): Comments for the generation.
- `token` (String): Authorization token.

**Returns:** Promise resolving to the result object.
