const axios = require("axios");
const https = require("https");
const utils = require("./utils");

const baseUrl = utils.getBaseUrl();

let instance = axios.create({
  baseURL: baseUrl,
  httpsAgent: new https.Agent({
    rejectUnauthorized: false,
  }),
});

/**
 * Server response type
 */
module.exports = {
  axios: instance,
  /**
   * Returns the error as a string
   * @param {Object} error
   */
  errorToString: (error) => {
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
  },

  /**
   * Returns the code of the error as a number
   * @param {Object} error
   * @returns {Number} The error code
   */
  getErrorType: (error) => {
    if (error?.response?.status) {
      return error.response.status;
    } else return responseType.SERVICE_UNAVAILABLE;
  },

  /**
   * Return the error information to include just the status and the message
   * @param {Object} error
   * @returns Object
   */
  getErrorInformation: (error) => {
    return {
      status: getErrorType(error),
      message: errorToString(error),
    };
  },

  /**
   * Returns true if an exception should be handled to the business and presentation layer
   * @param {Boolean} returnAllExceptions - If set true all exceptions will be passed
   * @param {Object} error - The error returned by the server
   */
  shouldReturnError: (returnAllExceptions, error) => {
    if (getErrorType(error) === responseType.UNAUTHORIZED) {
      return returnAllExceptions;
    } else {
      return true;
    }
  },
};
