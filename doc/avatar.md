# Avatar API

This module provides functions for retrieving user avatars within the StackFactor platform.

## Importing

```js
import { avatar } from '@stackfactor/client-api';
```

## Methods

### getAvatar(elementId: string, type: string, width: number, height: number, token: string, title?: string): Promise<Blob>

**Description:** Get the avatar for an element by its ID.
**Parameters:**

- `elementId` (String): The element ID.
- `type` (String): The avatar type.
- `width` (Number): The desired width.
- `height` (Number): The desired height.
- `token` (String): Authorization token.
- `title` (String, optional): The title.

**Returns:** Promise resolving to a Blob containing the avatar image.
