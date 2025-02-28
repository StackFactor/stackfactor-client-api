import { AxiosError, AxiosResponse } from "axios";
import { client } from "./axiosClient.js";

/**
 * Get the current quota for the user and tenant
 * @param {String} token
 * @returns {Promise<object>}
 */
export const getAllQuota = (token: string): Promise<object> => {
  return new Promise((resolve, reject) => {
    const confirmationRequest = client.get(`/api/v1/quotas/getallquota`, {
      headers: { authorization: token },
    });
    confirmationRequest
      .then((response : AxiosResponse) => {
        resolve(response.data);
      })
      .catch((error : AxiosError) => {
        reject(error);
      });
  });
};

/**
 * Increase quota utilization
 * @param {String} quotaId
 * @param {Number} value
 * @param {String} token
 * @returns {Promise<object>}
 */
export const increaseQuotaUtilization = (
  quotaId: string,
  value: number,
  token: string
): Promise<object> => {
  return new Promise((resolve, reject) => {
    const confirmationRequest = client.post(
      `/api/v1/quotas/increaseutilization`,
      {
        id: quotaId,
        value: value,
      },
      {
        headers: { authorization: token },
      }
    );
    confirmationRequest
      .then((response : AxiosResponse) => {
        resolve(response.data);
      })
      .catch((error : AxiosError) => {
        reject(error);
      });
  });
};
