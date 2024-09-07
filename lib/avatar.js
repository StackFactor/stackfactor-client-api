import { client } from "./axiosClient.js";

/**
 * Get avatar for an elementId
 * @param {String} elementId
 * @param {String} type
 * @param {Number} width
 * @param {Number} height
 * @param {String} token
 * @returns {Promise}
 */
const getAvatar = (elementId, type, width, height, token) => {
  return new Promise(function (resolve, reject) {
    let confirmationRequest = client.get(
      `/api/v1/avatar/getavatar/${elementId}/${type}/${width}/${height}`,
      {
        headers: {
          authorization: token,
        },
        responseType: "blob",
      }
    );
    confirmationRequest
      .then((response) => {
        resolve(response);
      })
      .catch(() => {
        reject("Error getting avatar");
      });
  });
};

export default {
  getAvatar,
};
