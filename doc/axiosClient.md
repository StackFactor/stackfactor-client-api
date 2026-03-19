# Axios Client API

This module provides the configured Axios HTTP client instance and error handling utilities used internally by the StackFactor client API.

## Importing

```js
import { axiosClient } from '@stackfactor/client-api';
```

## Exports

### client

**Description:** The configured Axios HTTP client instance used for all API requests.

## Methods

### errorToString(error: AxiosError): string

**Description:** Converts an Axios error object to a readable string.
**Parameters:**

- `error` (AxiosError): The error object from Axios.

**Returns:** String describing the error.

### getErrorType(error: AxiosError): number

**Description:** Returns the HTTP status code of the error as a number.
**Parameters:**

- `error` (AxiosError): The error object from Axios.

**Returns:** Number representing the error code.

### getErrorInformation(error: AxiosError): { status: number; message: string }

**Description:** Returns the error information including status and message.
**Parameters:**

- `error` (AxiosError): The error object from Axios.

**Returns:** Object with `status` (number) and `message` (string) properties.

### shouldReturnError(returnAllExceptions: boolean, error: AxiosError): boolean

**Description:** Determines whether an error should be propagated to the business/presentation layer. Unauthorized errors are only returned when `returnAllExceptions` is true.
**Parameters:**

- `returnAllExceptions` (Boolean): If true, all exceptions are returned.
- `error` (AxiosError): The error object from Axios.

**Returns:** Boolean indicating whether the error should be returned.
