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
      authToken
        ? {
            headers: { authorization: authToken },
          }
        : {}
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

/**
 * Set talent transformation step data
 * @param {String} id The id of the talent transformation step to be updated
 * @param {Object} data Data used to update the talent transformation step
 * @param {Boolean} returnAllStepsStatuses If true, return all steps statuses
 * @param {String} token Authorization token
 * @returns {Promise}
 */
const setTalentTransformationStepData = (
  id,
  data,
  returnAllStepsStatuses,
  token
) => {
  return new Promise(function (resolve, reject) {
    const requestData = {
      data: data,
      id: id,
      returnAllStepsStatuses: returnAllStepsStatuses,
    };
    let confirmationRequest = client.post(
      `api/v1/talenttransformation/setdata/`,
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

export default {
  getTalentTransformationStepsForCurrentUser,
  setTalentTransformationStepData,
};
