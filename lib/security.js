import { client } from "./axiosClient.js";

/**
 * Get the enabled authentication connections for current organization.
 * @param {String} authToken - Authorization token
 * @returns {Promise<Object>}
 */
const getAuthConnections = (authToken) => {
  return new Promise(function (resolve, reject) {
    const getConfigInformationRequest = client.get(
      `api/v1/security/authconnections`,
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
      `api/v1/security/authconnections`,
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

/**
 * Reset the MFA for the user.
 * @param {String} userId
 * @param {String} authToken
 * @returns {Promise<Object>}
 */
const resetMFA = (userId, authToken) => {
  return new Promise(function (resolve, reject) {
    const resetMFARequest = client.post(
      `api/v1/security/resetmfa`,
      userId ? {} : { userId: userId },
      { headers: { authorization: authToken } }
    );
    resetMFARequest
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

/**
 * Synchronize the authentication connections with Auth0.
 * @param {String} authToken
 * @returns {Promise<Object>}
 */
const synchronizeWithAuth0 = (authToken) => {
  return new Promise(function (resolve, reject) {
    const sunchronizeRequest = client.get(
      `api/v1/security/synchronizewithauth0`,
      { headers: { authorization: authToken } }
    );
    sunchronizeRequest
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
  resetMFA,
  setAuthConnections,
  synchronizeWithAuth0,
};
