/* eslint-disable no-undef */
//import dotenv from "dotenv";
// Load environment variables from .env file
//dotenv.config();

/**
 * Convert object to array
 * @param {Object} data
 * @returns {Array}
 */
const objectToArray = (data) => {
  if (typeof data === "object") {
    return [...data];
  } else throw new Error("Invalid type");
};

/**
 * Returns the backend base API URL
 * @returns {String}
 */
const getBaseUrl = () => {
  return process.env.BACKEND_URL;
};

/**
 * Remove null properties
 * @param {Object} object
 * @returns {Object}
 */
const removeNullProperties = (object) => {
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
