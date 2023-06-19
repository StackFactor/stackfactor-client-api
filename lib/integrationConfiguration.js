const axios = require("./axios");

export default {
  axios: axios,

  /**
   * Get the integration configuration
   * @param {Array<String>} ids
   * @param {Number} type
   * @param {String} token Authorization token
   */
  getIntegrationsConfiguration: (ids, type, token) => {
    return new Promise(function (resolve, reject) {
      let requestData = { type: type };
      if (ids) requestData.ids = ids;
      let confirmationRequest = axios.post(
        "api/v1/integrationsconfiguration",
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
   * Save integration configuration
   * @param {String} id The id of the integration configurationto be updated
   * @param {Number} type The type of configuration
   * @param {Object} configuration Data used to update the integration configuration
   * @param {String} token Authorization token
   */
  saveIntegrationConfiguration: (id, type, configuration, token) => {
    return new Promise(function (resolve, reject) {
      const requestData = {
        id: id,
        configuration: configuration,
        type: type,
      };
      let confirmationRequest = axios.put(
        `api/v1/integrationsconfiguration`,
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
   * Test integration configuration
   * @param {String} id The id of the integration to be updated
   * @param {String} type The type of configuration
   * @param {Object} configuration Configuration to be tested
   * @param {String} token Authorization token
   */
  testIntegrationConfiguration: (id, type, configuration, token) => {
    return new Promise(function (resolve, reject) {
      const requestData = {
        id: id,
        configuration: configuration,
        type: type,
      };
      let confirmationRequest = axios.post(
        `api/v1/integrationsconfiguration/testConfiguration`,
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
