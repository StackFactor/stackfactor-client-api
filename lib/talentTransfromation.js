import { client } from "./axiosClient.js";

/**
 * Get talent transformation steps for the current user
 * @param {String} userId
 * @param {String} authToken The authentication token
 */
const getTalentTransformationStepsForCurrentUser = (authToken) => {
  return new Promise(function (resolve, reject) {
    const request = client.get(
      `api/v1/talenttransformation/getforcurrentuser`,
      {
        headers: { authorization: authToken },
      }
    );
    request
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export default {
  getTalentTransformationStepsForCurrentUser,
};
