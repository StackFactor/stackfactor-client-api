import { AxiosError, AxiosResponse } from "axios";
import { client } from "./axiosClient.js";

/**
 * Get talent transformation steps for the current user
 * @param {String} authToken The authentication token
 * @returns {Promise<object>}
 */
export const getTalentTransformationStepsForCurrentUser = (
  authToken: string
): Promise<object> => {
  return new Promise((resolve, reject) => {
    const request = client.get(
      `api/v1/talenttransformation/getforcurrentuser`,
      authToken
        ? {
            headers: { authorization: authToken },
          }
        : {}
    );
    request
      .then((response : AxiosResponse) => {
        resolve(response.data);
      })
      .catch((error : AxiosError) => {
        reject(error);
      });
  });
};

/**
 * Get the talent transformation summary for the whole organization
 * @param {String} authToken
 * @returns {Promise<object>} The talent transformation summary
 */
export const getTalentTransformationSummary = (authToken: string): Promise<object> => {
  return new Promise((resolve, reject) => {
    const request = client.get(
      `api/v1/talenttransformation/summary`,
      authToken
        ? {
            headers: { authorization: authToken },
          }
        : {}
    );
    request
      .then((response : AxiosResponse) => {
        resolve(response.data);
      })
      .catch((error : AxiosError) => {
        reject(error);
      });
  });
};

/**
 * Get the talent transformation summary for the team
 * @param {String} teamId
 * @param {String} authToken
 * @returns {Promise<object>} The talent transformation summary
 */
export const getTalentTransformationSummaryForTeam = (
  teamId: string,
  authToken: string
): Promise<object> => {
  return new Promise((resolve, reject) => {
    const request = client.get(
      `api/v1/talenttransformation/summaryforteam/${teamId}`,
      authToken
        ? {
            headers: { authorization: authToken },
          }
        : {}
    );
    request
      .then((response : AxiosResponse) => {
        resolve(response.data);
      })
      .catch((error : AxiosError) => {
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
 * @returns {Promise<object>}
 */
export const setTalentTransformationStepData = (
  id: string,
  data: object,
  returnAllStepsStatuses: boolean,
  token: string
): Promise<object> => {
  return new Promise((resolve, reject) => {
    const requestData = {
      data: data,
      id: id,
      returnAllStepsStatuses: returnAllStepsStatuses,
    };
    const confirmationRequest = client.post(
      `api/v1/talenttransformation/setdata/`,
      requestData,
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