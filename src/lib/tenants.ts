import { AxiosResponse } from "axios";
import { client } from "./axiosClient";

/**
 * Get tenant information
 * @param {String} category Tenant information category
 * @param {String} token Authorization token
 * @returns {Promise<object>}
 */
const getTenantInformation = (
  category: string,
  token: string
): Promise<object> => {
  return new Promise((resolve, reject) => {
    const requestData = {
      categories: category,
    };
    const request = client.post("api/v1/tenants/tenant/get", requestData, {
      headers: { authorization: token },
    });
    request
      .then((response : AxiosResponse) => {
        resolve(response.data ? response.data : null);
      })
      .catch((error : Error) => {
        reject(error);
      });
  });
};

/**
 * Set tenant profile information
 * @param {String} category Tenant information category
 * @param {Object} data New or updated tenant data information
 * @param {String} token Authorization token
 * @returns {Promise<object>}
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
    const confirmationRequest = client.post(
      "api/v1/tenants/tenant/set",
      requestData,
      {
        headers: { authorization: token },
      }
    );
    confirmationRequest
      .then((response : AxiosResponse) => {
        resolve(response.data);
      })
      .catch((error : Error) => {
        reject(error);
      });
  });
};

export default { getTenantInformation, setTenantInformation };
