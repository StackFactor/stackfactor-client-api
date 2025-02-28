import { AxiosResponse } from "axios";
import { client } from "./axiosClient.js";

/**
 * Get avatar for an elementId
 * @param {String} elementId
 * @param {String} type
 * @param {Number} width
 * @param {Number} height
 * @param {String} token
 * @returns {Promise<Blob>}
 */
export const getAvatar = (
  elementId: string,
  type: string,
  width: number,
  height: number,
  token: string
): Promise<Blob> => {
  return new Promise((resolve, reject) => {
    const confirmationRequest = client.get(
      `/api/v1/avatar/getavatar/${elementId}/${type}/${width}/${height}`,
      {
        headers: {
          authorization: token,
        },
        responseType: "blob",
      }
    );
    confirmationRequest
      .then((response : AxiosResponse) => {
        resolve(response.data);
      })
      .catch(() => {
        reject("Error getting avatar");
      });
  });
};
