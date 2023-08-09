import { client } from "./axiosClient.js";

/**
 * Create training plan template and set information
 * @param {String} name
 * @param {String} summary
 * @param {Array<Object>} activities
 * @param {String} token Authorization token
 */
export const createDepartmentTrainingPlan = (
  name,
  summary,
  skill,
  activities,
  token
) => {
  return new Promise(function (resolve, reject) {
    const requestData = {
      name: name ? name : "",
      summary: summary ? summary : "",
      skill: skill ? skill : "",
      activities: activities ? activities : [],
    };
    let confirmationRequest = client.put(
      "api/v1/departmentTrainingPlans",
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

/**
 * Delete department training plan
 * @param {String} id The id of the template to be deleted
 * @param {String} token Authorization token
 */
export const deleteDepartmentTrainingPlan = (id, token) => {
  return new Promise(function (resolve, reject) {
    const request = client.delete(`api/v1/departmenttrainingplans/`, {
      headers: { authorization: token },
      data: {
        id: id,
      },
    });
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
 * Get department traing plan information
 * @param {Number} id The id of the plan
 * @param {String} token Authorization token
 */
export const getDepartmentTrainingPlanInformationById = (
  id,
  version,
  token
) => {
  return new Promise(function (resolve, reject) {
    let confirmationRequest = client.get(
      `api/v1/departmenttrainingplans/${id}/${version}`,
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

/**
 * Get department training plan list
 * @param {Object} filter The filter used to select the plan
 * @param {String} token Authorization token
 */
export const getDepartmentTrainingPlanList = (filter, version, token) => {
  return new Promise(function (resolve, reject) {
    const requestData = {
      filter: filter ? filter : "",
      version: version,
    };
    let confirmationRequest = client.post(
      `api/v1/departmenttrainingplans`,
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

/**
 * Publish department training plan
 * @param {number} id The id of the plan to be published
 * @param {String} token Authorization token
 */
export const publishDepartmentTrainingPlan = (id, token) => {
  return new Promise(function (resolve, reject) {
    let confirmationRequest = client.post(
      `api/v1/departmenttrainingplans/publish/${id}`,
      {},
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

/**
 * Set department training plan profile information
 * @param {String} id The id of the plan to be updated
 * @param {Object} data Data used to update the plan
 * @param {String} token Authorization token
 */
export const setDepartmentTrainingPlanInformation = (id, data, token) => {
  return new Promise(function (resolve, reject) {
    const requestData = {
      data: data,
    };
    let confirmationRequest = client.post(
      `api/v1/departmenttrainingplans/${id}`,
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
  createDepartmentTrainingPlan: createDepartmentTrainingPlan,
  deleteDepartmentTrainingPlan: deleteDepartmentTrainingPlan,
  getDepartmentTrainingPlanInformationById:
    getDepartmentTrainingPlanInformationById,
  getDepartmentTrainingPlanList: getDepartmentTrainingPlanList,
  publishDepartmentTrainingPlan: publishDepartmentTrainingPlan,
  setDepartmentTrainingPlanInformation: setDepartmentTrainingPlanInformation,
};
