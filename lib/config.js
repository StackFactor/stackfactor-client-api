import axios from "./axios";

export default {
  axios: axios,

  /**
   * Get the specified configuration by Id. It returns a promise
   *
   * @param {String} id - the id of the configuration element
   * @param {String} authToken - Authorization token
   *
   */
  getConfigurationById(id, authToken) {
    return new Promise(function (resolve, reject) {
      const getConfigInformationRequest = axios.get(
        `api/v1/configurations/configuration/id/${id}`,
        { headers: { authorization: authToken } }
      );
      getConfigInformationRequest
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },

  /**
   * Get the specified configuration by type. It returns a promise
   *
   * @param {String} type - the id of the configuration element
   * @param {String} authToken - Authorization token
   *
   */
  getConfigurationByType(type, authToken) {
    return new Promise(function (resolve, reject) {
      const getConfigInformationRequest = axios.get(
        `api/v1/configurations/configuration/type/${type}`,
        { headers: { authorization: authToken } }
      );
      getConfigInformationRequest
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },

  /**
   *
   * Set the specified configuration by Id. It returns a promise
   *
   * @param {String} id - the id of the configuration element
   * @param {Object} data - the object containing the updated configuration element
   * @param {String} authToken - Authorization token
   *
   */
  setConfigurationById(id, data, authToken) {
    return new Promise(function (resolve, reject) {
      const getConfigInformationRequest = axios.post(
        `api/v1/configurations/configuration/${id}`,
        { data: data },
        { headers: { authorization: authToken } }
      );
      getConfigInformationRequest
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
};
