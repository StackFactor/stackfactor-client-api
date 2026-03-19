# AI Assistant API

This module provides functions for interacting with the AI assistant within the StackFactor platform. It allows you to start and end conversations, ask questions, retrieve conversation history, and access voice assistant features.

## Importing

```js
import { aiAssistant } from '@stackfactor/client-api';
```

## Methods

### askQuestion(conversationId: string, question: string, updatedContext: string, token: string): Promise<object>

**Description:** Ask a question to the AI assistant within a conversation context.
**Parameters:**

- `conversationId` (String): The conversation identifier.
- `question` (String): The question to ask.
- `updatedContext` (String): Updated context for the conversation.
- `token` (String): Authorization token.

**Returns:** Promise resolving to an object with the AI's response.

### endConversation(conversationId: string, token: string): Promise<object>

**Description:** End an active conversation with the AI assistant.
**Parameters:**

- `conversationId` (String): The conversation identifier.
- `token` (String): Authorization token.

**Returns:** Promise resolving to the result object.

### getConversationByElementId(elementId: string, token: string): Promise<object>

**Description:** Retrieve a conversation by its associated element ID.
**Parameters:**

- `elementId` (String): The element identifier.
- `token` (String): Authorization token.

**Returns:** Promise resolving to the conversation object.

### getVoiceAssistantUrl(language: string, token: string): Promise<object>

**Description:** Retrieve the voice assistant URL for a given language.
**Parameters:**

- `language` (String): The language code.
- `token` (String): Authorization token.

**Returns:** Promise resolving to an object containing the voice assistant URL.

### startConversation(elementId: string, elementType: string, question: string, context: string, autoContextRefresh: boolean, token: string, conversationId?: string | null): Promise<object>

**Description:** Start a new conversation with the AI assistant.
**Parameters:**

- `elementId` (String): The element identifier.
- `elementType` (String): The element type.
- `question` (String): The initial question.
- `context` (String): The conversation context.
- `autoContextRefresh` (Boolean): Whether to auto-refresh context.
- `token` (String): Authorization token.
- `conversationId` (String | null, optional): Existing conversation ID to continue.

**Returns:** Promise resolving to the conversation object.
