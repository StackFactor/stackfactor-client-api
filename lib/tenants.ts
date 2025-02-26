import { client } from "./axiosClient.js";

/**
 * Get tenant information
 * @param {String} category Tenant information category
 * @param {String} token Authorization token
 * @returns {Promise<Object>}
 */
const getTenantInformation = (
  category: string,
  token: string
): Promise<object> => {
  return new Promise((resolve, reject) => {
    const requestData = {
      categories: category,
    };
    let request = client.post("api/v1/tenants/tenant/get", requestData, {
      headers: { authorization: token },
    });
    request
      .then((response) => {
        resolve(response.data ? response.data : null);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

/**
 * Set tenant profile information
 * @param {String} category Tenant information category
 * @param {Object} data New or updated tenant data information
 * @param {String} token Authorization token
 * @returns {Promise<Object>}
 */
const setTenantInformation = (
  category: string,
  data: object,
  token: string
): Promise<object> => {
  return new Promise((resolve, reject) => {
    const requestData = {
      category: category,
      data: data,
    };
    let confirmationRequest = client.post(
      "api/v1/tenants/tenant/set",
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

export default { getTenantInformation, setTenantInformation };
