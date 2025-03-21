import axios, { AxiosError, AxiosResponse } from "axios";
import { RESPONSE_TYPE } from "./constants.js";
import * as utils from "./utils.js";

interface ErrorResponse {
  msg: string;
  param: string;
  value: string;
  toString: () => string;
}

interface CustomAxiosResponse extends AxiosResponse {
  errors?: ErrorResponse[];
  error: string;
  toString: () => string;
}

const baseUrl = utils.getBaseUrl();

export const client = axios.create({
  baseURL: baseUrl,
  withCredentials: true,
});

/**
 * Returns the error as a string
 * @param {AxiosError} error
 * @returns {string}
 */
export const errorToString = (error: AxiosError): string => {
  if (error != null) {
    if (error.response?.data) {
      let asString = "";
      const responseData = error.response.data as CustomAxiosResponse;
      if (Array.isArray(responseData.errors)) {
        responseData.errors.forEach(
          (item: ErrorResponse, index: number) => {
            asString += `${index > 0 ? ", " : ""} ${item.msg} param ${
              item.param
            } ${item.value ? `value ${item.value.toString()}` : ""}`;
          }
        );
        return asString;
      } else if (responseData.error) {
        return responseData.error;
      } else if (responseData.errors) {
        return JSON.stringify(responseData.errors);
      } else if (error.response.statusText) {
        return error.response.statusText.toString();
      } else {
        return responseData.toString();
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
export const getErrorType = (error: AxiosError): number => {
  if (error.response?.status) {
    return error.response.status;
  } else return RESPONSE_TYPE.SERVICE_UNAVAILABLE;
};

/**
 * Return the error information to include just the status and the message
 * @param {AxiosError} error
 * @returns {Object}
 */
export const getErrorInformation = (
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
export const shouldReturnError = (
  returnAllExceptions: boolean,
  error: AxiosError
): boolean => {
  if (getErrorType(error) === RESPONSE_TYPE.UNAUTHORIZED) {
    return returnAllExceptions;
  } else {
    return true;
  }
};
