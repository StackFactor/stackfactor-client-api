const { axios } = require("./axios");

module.exports = {
  /**
   * Create a new release to an existing template
   * @param {string} templateId - the template id
   * @param {Object} data - new phase data information
   * @param {string} token - authorization token
   */
  create: (templateId, data, token) => {
    return new Promise(function (resolve, reject) {
      const requestData = {
        templateId: templateId,
        data: data,
      };
      let confirmationRequest = axios.put(
        "api/v1/templates/template/releases/release",
        requestData,
        {
          headers: { authorization: token },
        }
      );
      confirmationRequest
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },

  /**
   * Delete an existing release from a template
   * @param {string} templateId - the template id
   * @param {string} releaseId - the document id
   * @param {string} token - authorization token
   */
  delete: (templateId, releaseId, token) => {
    return new Promise(function (resolve, reject) {
      const requestData = {
        templateId: templateId,
        releaseId: releaseId,
      };
      let confirmationRequest = axios.delete(
        `api/v1/templates/template/releases/release`,
        {
          data: requestData,
          headers: { authorization: token },
        }
      );
      confirmationRequest
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },

  /**
   * Update an existing release
   * @param {string} templateId - template id
   * @param {string} releaseId - release id
   * @param {Object} data - data containing the updated document information
   * @param {string} token - authorization token
   */
  update: (templateId, releaseId, data, token) => {
    return new Promise(function (resolve, reject) {
      const requestData = {
        templateId: templateId,
        releaseId: releaseId,
        data: data,
      };
      let confirmationRequest = axios.patch(
        "api/v1/templates/template/releases/release",
        requestData,
        {
          headers: { authorization: token },
        }
      );
      confirmationRequest
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
};
