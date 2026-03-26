import dotenv from "dotenv";
// Load environment variables from .env file
dotenv.config();

/**
 * Returns the backend base API URL
 * @returns {String}
 */
export const getBaseUrl = (): string => {
  if (process.env.REACT_APP_BACKEND_URL) {
    return process.env.REACT_APP_BACKEND_URL;
  } else if (process.env.BACKEND_URL) {
    return process.env.BACKEND_URL;
  } else {
    switch (process.env.REACT_APP_NODE_ENV) {
      case "development":
        return "https://localhost";
      case "testing":
        return "https://qaapi.stackfactor.ai";
      case "nonprod":
        return "https://apiqa.stackfactor.ai";
      case "production":
        return "https://api.stackfactor.ai";
      case "security":
        return "https://csapi.stackfactor.ai";
      default:
        return "https://localhost";
    }
  }
};

/**
 * Remove null properties
 * @param {Object} object
 * @returns {Object}
 */
/* eslint-disable @typescript-eslint/no-explicit-any */
export const removeNullProperties = (object: {
  [key: string]: any;
}): object => {
  Object.keys(object).forEach((key) => {
    const value = object[key];
    const hasProperties = value && Object.keys(value).length > 0;
    if (value === null) {
      delete object[key];
    } else if (typeof value !== "string" && hasProperties) {
      removeNullProperties(value);
    }
  });
  return object;
};
