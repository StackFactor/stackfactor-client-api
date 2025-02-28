/* eslint-disable no-undef */
//import dotenv from "dotenv";
// Load environment variables from .env file
//dotenv.config();

/**
 * Convert object to array
 * @param {Object} data
 * @returns {Array}
 */
const objectToArray = (data: object): any[] => {
  if (typeof data === "object") {
    return [...Object.values(data)];
  } else throw new Error("Invalid type");
};

/**
 * Returns the backend base API URL
 * @returns {String}
 */
const getBaseUrl = (): string => {
  if (process.env.REACT_APP_BACKEND_URL) {
    return process.env.REACT_APP_BACKEND_URL;
  } else {
    switch (process.env.REACT_APP_NODE_ENV) {
      case "development":
      case null:
      case undefined:
        return "https://localhost/";
      case "testing":
        return "https://qaapi.stackfactor.ai/";
      case "nonprod":
        return "https://apiqa.stackfactor.ai/";
      case "production":
        return "https://api.stackfactor.ai/";
      case "security":
        return "https://csapi.stackfactor.ai/";
      default:
        throw new Error("Invalid environment");
    }
  }
};

/**
 * Remove null properties
 * @param {Object} object
 * @returns {Object}
 */
const removeNullProperties = (object: { [key: string]: any }): object => {
  Object.keys(object).forEach((key) => {
    let value = object[key];
    let hasProperties = value && Object.keys(value).length > 0;
    if (value === null) {
      delete object[key];
    } else if (typeof value !== "string" && hasProperties) {
      removeNullProperties(value);
    }
  });
  return object;
};

const utils = { getBaseUrl, objectToArray, removeNullProperties };

export default utils;
