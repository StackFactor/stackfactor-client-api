//
// Utilities - various generla functions
//

const utils = {
  /**
   * Convert object to array
   */
  objectToArray: (data) => {
    if (typeof data === "object") {
      return [...data];
    } else throw new Error("Invalid type");
  },

  /**
   * Returns the backend base API URL
   */
  getBaseUrl: () => {
    if (!process.env.NODE_ENV || process.env.NODE_ENV === "production") {
      return "https://api.stackfactor.io/";
    } else {
      return "http://localhost:3100/";
    }
  },
};

export default utils;
