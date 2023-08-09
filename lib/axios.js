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

  responseType: {
    /**
     * The requested resource corresponds to any one of a set of representations, each with its own specific location.
     */
    MULTIPLE_CHOICES: 300,
    /**
     * The resource has moved permanently. Please refer to the documentation.
     */
    MOVED_PERMANENTLY: 301,
    /**
     * The resource has moved temporarily. Please refer to the documentation.
     */
    FOUND: 302,
    /**
     * The resource can be found under a different URI.
     */
    SEE_OTHER: 303,
    /**
     * The resource is available and not modified.
     */
    NOT_MODIFIED: 304,
    /**
     * The requested resource must be accessed through the proxy given by the Location field.
     */
    USE_PROXY: 305,
    /**
     * The resource resides temporarily under a different URI.
     */
    TEMPORARY_REDIRECT: 307,
    /**
     * Invalid syntax for this request was provided.
     */
    BAD_REQUEST: 400,
    /**
     * You are unauthorized to access the requested resource. Please log in.
     */
    UNAUTHORIZED: 401,
    /**
     * Your account is not authorized to access the requested resource.
     */
    FORBIDDEN: 403,
    /**
     * We could not find the resource you requested. Please refer to the documentation for the list of resources.
     */
    NOT_FOUND: 404,
    /**
     * 	This method type is not currently supported.
     */
    METHOD_NOT_ALLOWED: 405,
    /**
     * 	Acceptance header is invalid for this endpoint resource.
     */
    NOT_ACCEPTABLE: 406,
    /**
     * Authentication with proxy is required.
     */
    PROXY_AUTHENTICATION_REQUIRED: 407,
    /**
     * Client did not produce a request within the time that the server was prepared to wait.
     */
    REQUEST_TIMEOUT: 408,
    /**
     * The request could not be completed due to a conflict with the current state of the resource.
     */
    CONFLICT: 409,
    /**
     * The requested resource is no longer available and has been permanently removed.
     */
    GONE: 410,
    /**
     * 	Length of the content is required, please include it with the request.
     */
    LENGTH_REQUIRED: 411,
    /**
     * The request did not match the pre-conditions of the requested resource.
     */
    PRECONDITION_FAILED: 412,
    /**
     * The request entity is larger than the server is willing or able to process.
     */
    REQUEST_ENTITY_TOO_LARGE: 413,
    /**
     * The request URI is longer than the server is willing to interpret.
     */
    REQUEST_URI_TOO_LONG: 414,
    /**
     * The requested resource does not support the media type provided.
     */
    UNSUPPORTED_MEDIA_TYPE: 415,
    /**
     * The requested range for the resource is not available.
     */
    REQUESTED_RANGE_NOT_SATISFIABLE: 416,
    /**
     * Unable to meet the expectation given in the Expect request header.
     */
    EXPECTATION_FAILED: 417,
    /**
     * The requested resource is missing required arguments.
     */
    MISSING_ARGUMENTS: 419,
    /**
     * The requested resource does not support one or more of the given parameters.
     */
    INVALID_ARGUMENTS: 420,
    /**
     * The request was well-formed but was unable to be followed due to semantic errors.
     */
    UNPROCESSABLE_ENTITY: 422,
    /**
     * Unexpected internal server error.
     */
    INTERNAL_SERVER_ERROR: 500,
    /**
     * The requested resource is recognized but not implemented.
     */
    NOT_IMPLEMENTED: 501,
    /**
     * Invalid response received when acting as a proxy or gateway.
     */
    BAD_GATEWAY: 502,
    /**
     * The server is currently unavailable.
     */
    SERVICE_UNAVAILABLE: 503,
    /**
     * Did not receive a timely response from upstream server while acting as a gateway or proxy.
     */
    GATEWAY_TIMEOUT: 504,
    /**
     * 	The HTTP protocol version used in the request message is not supported.
     */
    HTTP_VERSION_NOT_SUPPORTED: 505,
    /**
     * 	A failure occurred during initialization of services. API will be unavailable.
     */
    INITIALIZATION_FAILURE: 550,
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
