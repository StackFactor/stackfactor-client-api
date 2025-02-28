import { AxiosError, AxiosResponse } from "axios";
import { client } from "./axiosClient";

/**
 * Get the enabled authentication connections for current organization.
 * @param {String} authToken - Authorization token
 * @returns {Promise<object>}
 */
export const getAuthConnections = (authToken: string): Promise<object> => {
  return new Promise((resolve, reject) => {
    const getConfigInformationRequest = client.get(
      `api/v1/security/authconnections`,
      { headers: { authorization: authToken } }
    );
    getConfigInformationRequest
      .then((response : AxiosResponse) => {
        resolve(response.data);
      })
      .catch((error : AxiosError) => {
        reject(error);
      });
  });
};

/**
 * Set the enabled authentication connections for current organization.
 * @param {Object} data - the object containing the updated configuration
 * @param {String} authToken - Authorization token
 * @returns {Promise<object>}
 */
export const setAuthConnections = (
  data: object,
  authToken: string
): Promise<object> => {
  return new Promise((resolve, reject) => {
    const setConfigInformationRequest = client.post(
      `api/v1/security/authconnections`,
      { data: data },
      { headers: { authorization: authToken } }
    );
    setConfigInformationRequest
      .then((response : AxiosResponse) => {
        resolve(response.data);
      })
      .catch((error : AxiosError) => {
        reject(error);
      });
  });
};

/**
 * Reset the MFA for the user.
 * @param {String} userId
 * @param {String} authToken
 * @returns {Promise<object>}
 */
export const resetMFA = (userId: string, authToken: string): Promise<object> => {
  return new Promise((resolve, reject) => {
    const resetMFARequest = client.post(
      `api/v1/security/resetmfa`,
      userId ? {} : { userId: userId },
      { headers: { authorization: authToken } }
    );
    resetMFARequest
      .then((response : AxiosResponse) => {
        resolve(response.data);
      })
      .catch((error : AxiosError) => {
        reject(error);
      });
  });
};

/**
 * Synchronize the authentication connections with Auth0.
 * @param {String} authToken
 * @returns {Promise<object>}
 */
export const synchronizeWithAuth0 = (authToken: string): Promise<object> => {
  return new Promise((resolve, reject) => {
    const synchronizeRequest = client.get(
      `api/v1/security/synchronizewithauth0`,
      { headers: { authorization: authToken } }
    );
    synchronizeRequest
      .then((response : AxiosResponse) => {
        resolve(response.data);
      })
      .catch((error : AxiosError) => {
        reject(error);
      });
  });
};
