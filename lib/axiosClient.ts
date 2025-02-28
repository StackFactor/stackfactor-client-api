import axios, { AxiosError } from "axios";
import { RESPONSE_TYPE } from "./constants.ts";
import utils from "./utils.ts";

const baseUrl = utils.getBaseUrl();

const client = axios.create({
  baseURL: baseUrl,
  withCredentials: true,
});

/**
 * Returns the error as a string
 * @param {AxiosError} error
 * @returns {string}
 */
const errorToString = (error: AxiosError): string => {
  if (error != null) {
    if (error.response?.data) {
      let asString = "";
      if (Array.isArray((error.response.data as any).errors)) {
        (error.response.data as any).errors.forEach(
          (item: any, index: number) => {
            asString += `${index > 0 ? ", " : ""} ${item.msg} param ${
              item.param
            } ${item.value ? `value ${item.value.toString()}` : ""}`;
          }
        );
        return asString;
      } else if ((error.response.data as any).error) {
        return (error.response.data as any).error.toString();
      } else if (error.response.statusText) {
        return error.response.statusText.toString();
      } else {
        return (error.response.data as any).toString();
      }
    } else {
      return error.message ? error.message : "Unknown error";
    }
  }
  return "Unknown error";
};

/**
 * Returns the code of the error as a number
 * @param {AxiosError} error
 * @returns {number} The error code
 */
const getErrorType = (error: AxiosError): number => {
  if (error.response?.status) {
    return error.response.status;
  } else return RESPONSE_TYPE.SERVICE_UNAVAILABLE;
};

/**
 * Return the error information to include just the status and the message
 * @param {AxiosError} error
 * @returns {Object}
 */
const getErrorInformation = (
  error: AxiosError
): { status: number; message: string } => {
  return {
    status: getErrorType(error),
    message: errorToString(error),
  };
};

/**
 * Returns true if an exception should be handled to the business and presentation layer
 * @param {boolean} returnAllExceptions - If set true all exceptions will be passed
 * @param {AxiosError} error - The error returned by the server
 * @returns {boolean}
 */
const shouldReturnError = (
  returnAllExceptions: boolean,
  error: AxiosError
): boolean => {
  if (getErrorType(error) === RESPONSE_TYPE.UNAUTHORIZED) {
    return returnAllExceptions;
  } else {
    return true;
  }
};

export {
  client,
  errorToString,
  getErrorType,
  getErrorInformation,
  shouldReturnError,
};
