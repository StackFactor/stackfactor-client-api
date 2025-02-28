import { client } from "./axiosClient";

/**
 * Get the integration configuration
 * @param {Array<String>} ids
 * @param {Number} type
 * @param {String} token Authorization token
 * @returns {Promise<Object>}
 */
const getIntegrationsConfiguration = (
  ids: string[],
  type: number,
  token: string
): Promise<object> => {
  return new Promise((resolve, reject) => {
    const requestData: { type: number; ids?: string[] } = { type: type };
    if (ids) requestData.ids = ids;
    const confirmationRequest = client.post(
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
};

/**
 * Save integration configuration
 * @param {String} id The id of the integration configuration to be updated
 * @param {Number} type The type of configuration
 * @param {Object} configuration Data used to update the integration configuration
 * @param {String} token Authorization token
 * @returns {Promise<Object>}
 */
const saveIntegrationConfiguration = (
  id: string,
  type: number,
  configuration: object,
  token: string
): Promise<object> => {
  return new Promise((resolve, reject) => {
    const requestData = {
      id: id,
      configuration: configuration,
      type: type,
    };
    const confirmationRequest = client.put(
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
};

/**
 * Test integration configuration
 * @param {String} id The id of the integration to be updated
 * @param {String} type The type of configuration
 * @param {Object} configuration Configuration to be tested
 * @param {String} token Authorization token
 * @returns {Promise<Object>}
 */
const testIntegrationConfiguration = (
  id: string,
  type: string,
  configuration: object,
  token: string
): Promise<object> => {
  return new Promise((resolve, reject) => {
    const requestData = {
      id: id,
      configuration: configuration,
      type: type,
    };
    const confirmationRequest = client.post(
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
};

export default {
  getIntegrationsConfiguration,
  saveIntegrationConfiguration,
  testIntegrationConfiguration,
};
