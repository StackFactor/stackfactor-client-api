/* eslint-disable no-undef */
//import dotenv from "dotenv";
// Load environment variables from .env file
//dotenv.config();

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
  switch (process.env.REACT_APP_NODE_ENV) {
    case "development":
    case null:
    case undefined:
      return "http://localhost:3100/";
    case "testing":
      return "https://qaapi.stackfactor.ai/";
    case "production":
      return "https://api.stackfactor.ai/";
    default:
      throw new Error("Invalid environment");
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
