# Users API

This module provides functions for managing user accounts within the StackFactor platform. It includes user creation, authentication (login, logout, token refresh), API token management, user profile management, password management, email/phone confirmation, and invitation features.

## Importing

```js
import { users } from '@stackfactor/client-api';
```

## Methods

### addAPIToken(name: string, expiration: Date, token: string): Promise<object>

**Description:** Add a new API token.
**Parameters:**

- `name` (String): Name of the token.
- `expiration` (Date): Expiration date of the token.
- `token` (String): Authorization token.

**Returns:** Promise resolving to the created token object.

### confirmEmailAddress(validationCode: string): Promise<void>

**Description:** Confirm an email address using a validation code.
**Parameters:**

- `validationCode` (String): The code provided to the user by email.

**Returns:** Promise resolving when confirmed.

### confirmPhone(validationCode: string, token: string): Promise<object>

**Description:** Confirm a phone number using a validation code.
**Parameters:**

- `validationCode` (String): The code provided to the user.
- `token` (String): Authorization token.

**Returns:** Promise resolving to the result object.

### confirmPhoneGenerateCode(phoneNumber: string, token: string): Promise<object>

**Description:** Generate a phone number confirmation code.
**Parameters:**

- `phoneNumber` (String): The phone number to send the confirmation code to.
- `token` (String): Authorization token.

**Returns:** Promise resolving to the result object.

### createAccount(email: string, firstName: string, lastName: string, password: string, subSite: string, inviteCode: string): Promise<object>

**Description:** Create a new account (tenant).
**Parameters:**

- `email` (String): User's email address.
- `firstName` (String): User's first name.
- `lastName` (String): User's last name.
- `password` (String): User's password.
- `subSite` (String): Subsite where the new account will be created.
- `inviteCode` (String): Invitation code received from an account owner.

**Returns:** Promise resolving to the created user object.

### createUserAccount(email: string, firstName: string, lastName: string, password: string, token: string): Promise<object>

**Description:** Create a new user account within an existing tenant.
**Parameters:**

- `email` (String): User's email address.
- `firstName` (String): User's first name.
- `lastName` (String): User's last name.
- `password` (String): User's password.
- `token` (String): Invitation token provided to the user.

**Returns:** Promise resolving to the created user object.

### deleteAPIToken(token: string, authToken: string): Promise<string>

**Description:** Delete an existing API token.
**Parameters:**

- `token` (String): The token to delete.
- `authToken` (String): Authorization token.

**Returns:** Promise resolving to the deleted token string.

### deleteUsers(userIds: string[], token: string): Promise<object>

**Description:** Delete existing users.
**Parameters:**

- `userIds` (Array<String>): The IDs of the users to delete.
- `token` (String): Authorization token.

**Returns:** Promise resolving to the result object.

### getAPITokens(token: string): Promise<object>

**Description:** Get all API tokens.
**Parameters:**

- `token` (String): Authorization token.

**Returns:** Promise resolving to the tokens object.

### getUserById(id: string, token: string): Promise<object>

**Description:** Get a user account by its ID.
**Parameters:**

- `id` (String): The user ID.
- `token` (String): Authorization token.

**Returns:** Promise resolving to the user object.

### getUserInformation(userId: string, category: string, token: string): Promise<object>

**Description:** Get user information by category.
**Parameters:**

- `userId` (String): The user ID.
- `category` (String): User information category.
- `token` (String): Authorization token.

**Returns:** Promise resolving to the user information object.

### getUsers(filter: object, fields: string[], token: string): Promise<object>

**Description:** Get a list of users with optional filters and fields.
**Parameters:**

- `filter` (Object): Filter to select the users (e.g., `{firstName: "John"}`).
- `fields` (Array<String>): Fields to be loaded (e.g., `["firstName"]`).
- `token` (String): Authorization token.

**Returns:** Promise resolving to the users list.

### inviteUsers(invitees: string[], groupId: string, teamId: string, authToken: string): Promise<object>

**Description:** Invite other users to join the same account.
**Parameters:**

- `invitees` (Array<String>): List of emails of the invitees.
- `groupId` (String): The group the user should be added to.
- `teamId` (String): The team the user should be added to.
- `authToken` (String): Authorization token.

**Returns:** Promise resolving to the result object.

### login(email: string, password: string): Promise<object>

**Description:** Login using email and password.
**Parameters:**

- `email` (String): User's email address.
- `password` (String): User's password.

**Returns:** Promise resolving to the authentication data.

### loginExchangeKeys(code: string, codeVerifier: string, redirectUri: string): Promise<object>

**Description:** Exchange a code token for authentication and refresh tokens after login callback.
**Parameters:**

- `code` (String): The authorization code.
- `codeVerifier` (String): The code verifier.
- `redirectUri` (String): The redirect URI.

**Returns:** Promise resolving to the authentication data.

### logout(token: string): Promise<object>

**Description:** Logout from the server.
**Parameters:**

- `token` (String): Authorization token.

**Returns:** Promise resolving to the result object.

### refreshToken(refreshToken?: string): Promise<object>

**Description:** Refresh the current auth token. In case the token is invalid, a new token can be established using login.
**Parameters:**

- `refreshToken` (String, optional): User's auth token to be refreshed.

**Returns:** Promise resolving to the refreshed token data.

### removeAPIToken(id: string, authToken: string): Promise<string>

**Description:** Remove an existing API token by ID.
**Parameters:**

- `id` (String): The ID of the token to be removed.
- `authToken` (String): Authorization token.

**Returns:** Promise resolving to the removed token ID.

### resendInvitationEmails(invitees: string[], authToken: string): Promise<object>

**Description:** Resend invitation emails to invitees.
**Parameters:**

- `invitees` (Array<String>): List of emails of the invitees.
- `authToken` (String): Authorization token.

**Returns:** Promise resolving to the result object.

### resetPassword(email: string, code: string, password: string): Promise<object>

**Description:** Reset the password using a code provided by email.
**Parameters:**

- `email` (String): User's email address.
- `code` (String): Code provided to the user by email.
- `password` (String): User's new password.

**Returns:** Promise resolving to the result object.

### sendEmailConfirmationCode(email: string, token: string): Promise<object>

**Description:** Send an email confirmation code.
**Parameters:**

- `email` (String): The email address.
- `token` (String): Authorization token.

**Returns:** Promise resolving to the result object.

### sendPasswordResetNotification(email: string): Promise<object>

**Description:** Send an email to the user to reset their password.
**Parameters:**

- `email` (String): Email of the user who needs to reset the password.

**Returns:** Promise resolving to the result object.

### setUserInformation(userId: string, category: string, data: object, token: string): Promise<object>

**Description:** Set user profile information.
**Parameters:**

- `userId` (String): The user ID.
- `category` (String): User information category.
- `data` (Object): New or updated user data.
- `token` (String): Authorization token.

**Returns:** Promise resolving to the result object.

### updateUserEmail(email: string, verificationCode: string, password: string, token: string): Promise<object>

**Description:** Update the user's email address.
**Parameters:**

- `email` (String): The new email address.
- `verificationCode` (String): The verification code.
- `password` (String): The current password.
- `token` (String): Authorization token.

**Returns:** Promise resolving to the result object.

### updateUserGroups(userId: string, groups: string[], token: string): Promise<object>

**Description:** Update the groups a user belongs to.
**Parameters:**

- `userId` (String): The user ID.
- `groups` (Array<String>): The IDs of the groups the user should belong to.
- `token` (String): Authorization token.

**Returns:** Promise resolving to the result object.

### updateUserPassword(password: string, newPassword: string, token: string): Promise<object>

**Description:** Update the user's password.
**Parameters:**

- `password` (String): The current password.
- `newPassword` (String): The new password.
- `token` (String): Authorization token.

**Returns:** Promise resolving to the result object.

### validateResetPasswordCode(email: string, code: string): Promise<object>

**Description:** Validate a reset password code.
**Parameters:**

- `email` (String): User's email address.
- `code` (String): The reset code to validate.

**Returns:** Promise resolving to the result object.
