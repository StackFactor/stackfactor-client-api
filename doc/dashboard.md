# Dashboard API

This module provides functions for managing dashboard cards within the StackFactor platform. It allows you to add, list, and remove dashboard cards.

## Importing

```js
import { dashboard } from '@stackfactor/client-api';
```

## Methods

### addCardToDashboard(id: string, position: number, data: object, authToken: string): Promise<object>

**Description:** Add a card to the dashboard at a specified position.
**Parameters:**

- `id` (String): The ID of the card to be added.
- `position` (Number): The position on the dashboard.
- `data` (Object): Card settings data.
- `authToken` (String): Authorization token.

**Returns:** Promise resolving to the result object.

### getDashboardCardsList(authToken: string): Promise<object>

**Description:** Retrieve the list of cards from the dashboard.
**Parameters:**

- `authToken` (String): Authorization token.

**Returns:** Promise resolving to an object containing the cards list.

### removeCardFromDashboard(id: string, authToken: string): Promise<object>

**Description:** Remove a card from the dashboard.
**Parameters:**

- `id` (String): The ID of the card to be removed.
- `authToken` (String): Authorization token.

**Returns:** Promise resolving to the result object.
