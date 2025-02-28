import { client } from "./axiosClient";

/**
 * Get avatar for an elementId
 * @param {String} elementId
 * @param {String} type
 * @param {Number} width
 * @param {Number} height
 * @param {String} token
 * @returns {Promise<Blob>}
 */
const getAvatar = (
  elementId: string,
  type: string,
  width: number,
  height: number,
  token: string
): Promise<Blob> => {
  return new Promise((resolve, reject) => {
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
        resolve(response.data);
      })
      .catch(() => {
        reject("Error getting avatar");
      });
  });
};

export default {
  getAvatar,
};
