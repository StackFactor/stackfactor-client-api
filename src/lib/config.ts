import { AxiosError, AxiosResponse } from "axios";
import { client } from "./axiosClient";

/**
 * Get the specified configuration by Id. It returns a promise
 * @param {String} id - the id of the configuration element
 * @param {String} authToken - Authorization token
 * @returns {Promise<object>}
 */
const getConfigurationById = (
  id: string,
  authToken: string
): Promise<object> => {
  return new Promise((resolve, reject) => {
    const getConfigInformationRequest = client.get(
      `api/v1/configurations/configuration/id/${id}`,
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
 * Get the specified configuration by type. It returns a promise
 * @param {String} type - the id of the configuration element
 * @param {String} authToken - Authorization token
 * @returns {Promise<object>}
 */
const getConfigurationByType = (
  type: string,
  authToken: string
): Promise<object> => {
  return new Promise((resolve, reject) => {
    const getConfigInformationRequest = client.get(
      `api/v1/configurations/configuration/type/${type}`,
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
 * Set the specified configuration by Id. It returns a promise
 * @param {String} id - the id of the configuration element
 * @param {Object} data - the object containing the updated configuration element
 * @param {String} authToken - Authorization token
 * @returns {Promise<object>}
 */
const setConfigurationById = (
  id: string,
  data: object,
  authToken: string
): Promise<object> => {
  return new Promise((resolve, reject) => {
    const getConfigInformationRequest = client.post(
      `api/v1/configurations/configuration/${id}`,
      { data: data },
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

export default {
  getConfigurationById,
  getConfigurationByType,
  setConfigurationById,
};
