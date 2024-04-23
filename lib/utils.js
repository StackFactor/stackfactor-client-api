import dotenv from "dotenv";
// Load environment variables from .env file
let result = dotenv.config();
if (result.error) {
  throw result.error;
}

/**
 * Convert object to array
 * @param {Object} data
 * @returns {Array}
 */
export const objectToArray = (data) => {
  if (typeof data === "object") {
    return [...data];
  } else throw new Error("Invalid type");
};

/**
 * Returns the backend base API URL
 * @returns {String}
 */
export const getBaseUrl = () => {
  console.log("NODE_ENV", process.env.NODE_ENV);
  if (!process.env.NODE_ENV) {
    return "http://localhost:3100/";
  } else if (process.env.NODE_ENV === "testing") {
    return "https://qaapi.stackfactor.ai/";
  } else {
    return "https://api.stackfactor.ai/";
  }
};

/**
 * Remove null properties
 * @param {Object} object
 * @returns {Object}
 */
export const removeNullProperties = (object) => {
  Object.keys(object).forEach((key) => {
    let value = object[key.toString()];
    let hasProperties = value && Object.keys(value).length > 0;
    if (value === null) {
      delete object[key.toString()];
    } else if (typeof value !== "string" && hasProperties) {
      removeNullProperties(value);
    }
  });
  return object;
};

const utils = { getBaseUrl, objectToArray, removeNullProperties };

export default utils;
