import { client } from "./axiosClient.js";

/**
 * Get training plan proficiency level
 * @param {String} proficiencyLevelId
 * @param {String} token
 * @returns {Object} An object containing the proficiency level information
 */
const getTrainingPlanProficiencyLevel = (proficiencyLevelId, token) => {
  return new Promise(function (resolve, reject) {
    let confirmationRequest = client.get(
      `api/v1/trainingplans/proficiencylevels/${proficiencyLevelId}`,
      {
        headers: { authorization: token },
        withCredentials: true,
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

/**
 * Get training plan proficiency level list
 * @param {Boolean} includeDeleted If set true it will return deleted plans too
 * @param {Boolean} includeDetailedInformation If set to true it will return detailed information for each plan
 * @param {Boolean} includeArchived If set to true it will return all the closed items too
 * @param {String} token Authorization token
 */
const getTrainingPlanProficiencyLevelList = (
  includeDeleted,
  includeDetailedInformation,
  includeArchived,
  token
) => {
  return new Promise(function (resolve, reject) {
    const requestData = {
      includeArchived: includeArchived,
      includeDeleted: includeDeleted,
      includeDetailedInformation: includeDetailedInformation,
    };
    let confirmationRequest = client.post(
      `api/v1/trainingplans/proficiencylevels`,
      requestData,
      {
        headers: { authorization: token },
        withCredentials: true,
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

/**
 * Reoder training plan proficiency levels
 * @param {Array<Object>} data
 * @param {String} token
 * @returns
 */
const reorderTrainingPlansProficiencyLevels = (order, token) => {
  return new Promise(function (resolve, reject) {
    let confirmationRequest = client.post(
      `api/v1/trainingplans/proficiencylevels/reorder`,
      { order: order },
      {
        headers: { authorization: token },
        withCredentials: true,
      }
    );
    confirmationRequest
      .then(() => {
        resolve();
      })
      .catch((error) => {
        reject(error);
      });
  });
};

/**
 * Update a training plan proficiency level
 * @param {String} planId
 * @param {Object} data Ordered array of objects containing the activity Id and the new status
 * @param {Function} successCallBack
 * @param {Function} failCallBack
 * @returns {Object} An object containing the task information
 */
const updateTrainingPlanProficiencyLevel = (
  proficiencyLevelId,
  data,
  token
) => {
  return new Promise(function (resolve, reject) {
    let confirmationRequest = client.post(
      `api/v1/trainingplans/proficiencylevel/${proficiencyLevelId}`,
      data,
      {
        headers: { authorization: token },
        withCredentials: true,
      }
    );
    confirmationRequest
      .then(() => {
        resolve();
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const trainingPlanProficiencyLevel = {
  getTrainingPlanProficiencyLevel,
  getTrainingPlanProficiencyLevelList,
  reorderTrainingPlansProficiencyLevels,
  updateTrainingPlanProficiencyLevel,
};

export default trainingPlanProficiencyLevel;
