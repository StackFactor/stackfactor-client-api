import { client } from "./axiosClient.js";

/**
 * Get tenant information
 * @param {String} category Tenant information category
 * @param {String} token Authorization token
 */
const getTenantInformation = (categories, token) => {
  return new Promise(function (resolve, reject) {
    const requestData = {
      categories: categories,
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
 * @param {String} data New or updated tenant data information
 * @param {Object} token Authorization token
 */
const setTenantInformation = (category, data, token) => {
  return new Promise(function (resolve, reject) {
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
