import { client } from "./axiosClient.js";

/**
 * Get the enabled authentication connections for current organization.
 * @param {String} authToken - Authorization token
 * @returns {Promise<Object>}
 */
const getAuthConnections = (authToken) => {
  return new Promise(function (resolve, reject) {
    const getConfigInformationRequest = client.get(
      `api/v1/security/getauthconnection`,
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
};

/**
 * Set the enabled authentication connections for current organization.
 * @param {Object} data - the object containing the updated configuration
 * @param {String} authToken - Authorization token
 */
const setAuthConnections = (data, authToken) => {
  return new Promise(function (resolve, reject) {
    const setConfigInformationRequest = client.post(
      `api/v1/security/setauthconnection`,
      { data: data },
      { headers: { authorization: authToken } }
    );
    setConfigInformationRequest
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export default {
  getAuthConnections,
  setAuthConnections,
};
