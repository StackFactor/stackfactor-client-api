import { client } from "./axiosClient";

/**
 * Get the current quota for the user and tenant
 * @param {String} token
 * @returns {Promise<Object>}
 */
const getAllQuota = (token: string): Promise<object> => {
  return new Promise((resolve, reject) => {
    const confirmationRequest = client.get(`/api/v1/quotas/getallquota`, {
      headers: { authorization: token },
    });
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
 * Increase quota utilization
 * @param {String} quotaId
 * @param {Number} value
 * @param {String} token
 * @returns {Promise<Object>}
 */
const increaseQuotaUtilization = (
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
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export default {
  getAllQuota,
  increaseQuotaUtilization,
};
