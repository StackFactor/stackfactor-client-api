import { axios } from "./axiosClient";

module.exports = {
  axios: axios,

  /**
   * Create template and set information
   * @param {Object} data New template data information
   * @param {String} token Authorization token
   */
  createTemplate: (data, token) => {
    return new Promise(function (resolve, reject) {
      const requestData = {
        data: data,
      };
      let confirmationRequest = axios.put("api/v1/templates", requestData, {
        headers: { authorization: token },
      });
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
   * Delete template
   * @param {number} id The id of the template to be deleted
   * @param {String} token Authorization token
   */
  deleteTemplate: (id, token) => {
    return new Promise(function (resolve, reject) {
      const requestData = {
        id: id,
      };
      let confirmationRequest = axios.delete(`api/v1/templates/`, {
        headers: { authorization: token },
        data: requestData,
      });
      confirmationRequest
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },

  /**
   * Get template information
   * @param {number} id The id of the template
   * @param {String} token Authorization token
   */
  getTemplateInformationById: (id, version, token) => {
    return new Promise(function (resolve, reject) {
      let confirmationRequest = axios.get(`api/v1/templates/${id}/${version}`, {
        headers: { authorization: token },
      });
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
   * Get template information
   * @param {Object} filter The filter used to select the template
   * @param {String} token Authorization token
   */
  getTemplateList: (filter, version, token) => {
    return new Promise(function (resolve, reject) {
      const requestData = {
        filter: filter ? filter : "",
        version: version,
      };
      let confirmationRequest = axios.post(`api/v1/templates`, requestData, {
        headers: { authorization: token },
      });
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
   * Publish template
   * @param {number} id The id of the template to be published
   * @param {String} token Authorization token
   */
  publishTemplate: (id, token) => {
    return new Promise(function (resolve, reject) {
      let confirmationRequest = axios.post(
        `api/v1/templates/publish/${id}`,
        {},
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
   * Set template profile information
   * @param {String} id The id of the template to be updated
   * @param {Object} data Data used to update the template
   * @param {String} token Authorization token
   */
  setTemplateInformation: (id, data, token) => {
    return new Promise(function (resolve, reject) {
      const requestData = {
        data: data,
      };
      let confirmationRequest = axios.post(
        `api/v1/templates/${id}`,
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
