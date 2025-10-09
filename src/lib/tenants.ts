import { AxiosError, AxiosResponse } from "axios";
import { client } from "./axiosClient.js";

/**
 * Get tenant information
 * @param {Array<String>} category Tenant information category
 * @param {String} token Authorization token
 * @returns {Promise<object>}
 */
export const getTenantInformation = (
  category: string[],
  token: string
): Promise<object> => {
  return new Promise((resolve, reject) => {
    const requestData = {
      categories: category,
    };
    const request = client.post("/api/v1/tenants/tenant/get", requestData, {
      headers: { authorization: token },
    });
    request
      .then((response: AxiosResponse) => {
        resolve(response.data ? response.data : null);
      })
      .catch((error: AxiosError) => {
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
export const setTenantInformation = (
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
      "/api/v1/tenants/tenant/set",
      requestData,
      {
        headers: { authorization: token },
      }
    );
    confirmationRequest
      .then((response: AxiosResponse) => {
        resolve(response.data);
      })
      .catch((error: AxiosError) => {
        reject(error);
      });
  });
};
