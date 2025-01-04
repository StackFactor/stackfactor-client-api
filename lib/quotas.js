import { client } from "./axiosClient.js";

/**
 * Get the current quota for the user and tenant
 * @param {String} token
 * @returns {Promise}
 */
const getAllQuota = (token) => {
  return new Promise(function (resolve, reject) {
    let confirmationRequest = client.get(`/api/v1/quotas/getallquota`, {
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

export default {
  getAllQuota,
};
