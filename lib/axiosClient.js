import axios from "axios";
import { RESPONSE_TYPE } from "./constants.js";
import https from "https";
import utils from "./utils.js";

const baseUrl = utils.getBaseUrl();

const client = axios.create({
  baseURL: baseUrl,
  httpsAgent: new https.Agent({
    rejectUnauthorized: false,
  }),
});

/**
 * Returns the error as a string
 * @param {Object} error
 */
const errorToString = (error) => {
  if (error != null) {
    if (error?.response?.data) {
      let asString = "";
      if (Array.isArray(error.response.data.errors)) {
        error.response.data.errors.forEach((item, index) => {
          asString += `${index > 0 ? ", " : ""} ${item.msg} param ${
            item.param
          } ${item.value ? `value ${item.value.toString()}` : ""}`;
        });
        return asString;
      } else if (error.response.data.error) {
        return error.response.data.error.toString();
      } else if (error.response.statusText) {
        return error.response.statusText.toString();
      } else {
        return error.response.data.toString();
      }
    } else {
      return error.message ? error.message : "Unknown error";
    }
  }
};

/**
 * Returns the code of the error as a number
 * @param {Object} error
 * @returns {Number} The error code
 */
const getErrorType = (error) => {
  if (error?.response?.status) {
    return error.response.status;
  } else return RESPONSE_TYPE.SERVICE_UNAVAILABLE;
};

/**
 * Return the error information to include just the status and the message
 * @param {Object} error
 * @returns Object
 */
const getErrorInformation = (error) => {
  return {
    status: getErrorType(error),
    message: errorToString(error),
  };
};

/**
 * Returns true if an exception should be handled to the business and presentation layer
 * @param {Boolean} returnAllExceptions - If set true all exceptions will be passed
 * @param {Object} error - The error returned by the server
 */
const shouldReturnError = (returnAllExceptions, error) => {
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
