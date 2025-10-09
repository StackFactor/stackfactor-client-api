import { AxiosError, AxiosResponse } from "axios";
import { client } from "./axiosClient.js";

/**
 * Get training plan proficiency level
 * @param {String} proficiencyLevelId
 * @param {String} token
 * @returns {Promise<object>} An object containing the proficiency level information
 */
export const getTrainingPlanProficiencyLevel = (
  proficiencyLevelId: string,
  token: string
): Promise<object> => {
  return new Promise((resolve, reject) => {
    const confirmationRequest = client.get(
      `/api/v1/trainingplans/proficiencylevels/${proficiencyLevelId}`,
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

/**
 * Get training plan proficiency level list
 * @param {Boolean} includeDeleted If set true it will return deleted plans too
 * @param {Boolean} includeDetailedInformation If set to true it will return detailed information for each plan
 * @param {Boolean} includeArchived If set to true it will return all the closed items too
 * @param {String} token Authorization token
 * @returns {Promise<object>}
 */
export const getTrainingPlanProficiencyLevelList = (
  includeDeleted: boolean,
  includeDetailedInformation: boolean,
  includeArchived: boolean,
  token: string
): Promise<object> => {
  return new Promise((resolve, reject) => {
    const requestData = {
      includeArchived: includeArchived,
      includeDeleted: includeDeleted,
      includeDetailedInformation: includeDetailedInformation,
    };
    const confirmationRequest = client.post(
      `/api/v1/trainingplans/proficiencylevels`,
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

/**
 * Reorder training plan proficiency levels
 * @param {Array<Object>} order
 * @param {String} token
 * @returns {Promise<void>}
 */
export const reorderTrainingPlansProficiencyLevels = (
  order: object[],
  token: string
): Promise<void> => {
  return new Promise((resolve, reject) => {
    const confirmationRequest = client.post(
      `/api/v1/trainingplans/proficiencylevels/reorder`,
      { order: order },
      {
        headers: { authorization: token },
      }
    );
    confirmationRequest
      .then(() => {
        resolve();
      })
      .catch((error: AxiosError) => {
        reject(error);
      });
  });
};

/**
 * Update a training plan proficiency level
 * @param {String} proficiencyLevelId
 * @param {Object} data Ordered array of objects containing the activity Id and the new status
 * @param {String} token
 * @returns {Promise<void>}
 */
export const updateTrainingPlanProficiencyLevel = (
  proficiencyLevelId: string,
  data: object,
  token: string
): Promise<void> => {
  return new Promise((resolve, reject) => {
    const confirmationRequest = client.post(
      `/api/v1/trainingplans/proficiencylevel/${proficiencyLevelId}`,
      data,
      {
        headers: { authorization: token },
      }
    );
    confirmationRequest
      .then(() => {
        resolve();
      })
      .catch((error: AxiosError) => {
        reject(error);
      });
  });
};
