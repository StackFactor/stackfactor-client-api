import { client } from "./axiosClient";

/**
 * Create training plan and set information
 * @param {Object} data
 * @param {Number} type
 * @param {Boolean} saveAsDraft Save as draft flag
 * @param {String} token Authorization token
 */
export const createTrainingPlan = (data, type, saveAsDraft, token) => {
  return new Promise(function (resolve, reject) {
    const requestData = {
      data: {
        ...data,
      },
      saveAsDraft,
      type,
    };
    let confirmationRequest = client.put("api/v1/trainingplans", requestData, {
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

/**
 * Delete training plan
 * @param {String} id The id of the training plan to be deleted
 * @param {String} comment The comment for approver
 * @param {String} token Authorization token
 */
export const deleteTrainingPlan = (id, comment, token) => {
  return new Promise(function (resolve, reject) {
    const data = {
      id: id,
    };
    if (comment) data.comment = comment;
    const request = client.delete(`api/v1/trainingplans/`, {
      headers: { authorization: token },
      data: data,
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
 * Discard the training plan draft changes
 * @param {String} id The id of the training plan to be deleted
 * @param {String} token Authorization token
 */
export const discardTrainingPlanChanges = (id, token) => {
  return new Promise(function (resolve, reject) {
    const request = client.get(`api/v1/trainingplans/discard/${id}`, {
      headers: { authorization: token },
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
 * Create a new baselie
 * @param {String} id The Id of the plan for which a new baseline is to be generated
 * @param {Object} data The data
 * @param {Boolean} returnMinimized If set to true just high level plan baseline information will be returned
 * @param {Boolean} saveBaseline If set to true it will save the baseline
 * @param {String} token Authorization token
 */
export const generateNewBaseline = (
  id,
  data,
  returnMinimized,
  saveBaseline,
  token
) => {
  return new Promise(function (resolve, reject) {
    const requestData = {
      data: data,
      returnMinimized: returnMinimized,
      saveBaseline: saveBaseline,
    };
    if (id) requestData.id = id;
    let confirmationRequest = client.post(
      "api/v1/trainingplans/generatenewbaseline",
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
 * Get traing plan information
 * @param {String} id The id of the training plan
 * @param {String} token Authorization token
 */
export const getTrainingPlanById = (id, version, token) => {
  return new Promise(function (resolve, reject) {
    let confirmationRequest = client.get(
      `api/v1/trainingplans/${id}/${version}`,
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
 * Get training plans list
 * @param {Array<ObjectId>} users The list of users for which the plans should be loaded
 * @param {Array<Number>} types The types of plans to be loaded
 * @param {String} version The version of the document to be retrieved
 * @param {Array<String>} fields The fields to be selected
 * @param {Boolean} includeDeleted If set true it will return deleted plans too
 * @param {Boolean} returnDefaultIfVersionNotAvailable If set to true it will load the draft information if the plan was never published
 * @param {String} token Authorization token
 */
export const getListOfTrainingPlans = (
  users,
  types,
  version,
  fields,
  includeDeleted,
  includeDetailedInformation,
  returnDefaultIfVersionNotAvailable,
  token
) => {
  return new Promise(function (resolve, reject) {
    const requestData = {
      version: version,
      includeDeleted: includeDeleted,
      includeDetailedInformation: includeDetailedInformation,
      returnDefaultIfVersionNotAvailable: returnDefaultIfVersionNotAvailable,
    };
    if (fields) requestData.fields = fields;
    if (types) requestData.types = types;
    if (users) requestData.users = users;
    let confirmationRequest = client.post(`api/v1/trainingplans`, requestData, {
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

/**
 * Publish training plan
 * @param {String} id The id of the template to be published
 * @param {String} comment The comment to be include with the request
 * @param {String} token Authorization token
 */
export const publishTrainingPlan = (id, comment, token) => {
  return new Promise(function (resolve, reject) {
    let data = {};
    if (comment) data.comment = comment;
    let confirmationRequest = client.post(
      `api/v1/trainingplans/publish/${id}`,
      data,
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
 * Update training plan
 * @param {String} id The ID of the training plan
 * @param {Object} data The updated data
 * @param {String} token Authorization token
 */
export const updateTrainingPlan = (planId, data, saveAsDraft, token) => {
  return new Promise(function (resolve, reject) {
    const requestData = {
      data: data,
      id: planId,
      saveAsDraft,
    };
    let confirmationRequest = client.put(
      `api/v1/trainingplans/update/${planId}`,
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
 * Update a task
 * @param {String} planId
 * @param {Object} data Ordered array of objects containing the activity Id and the new status
 * @param {Function} successCallBack
 * @param {Function} failCallBack
 * @returns {Object} An object containing the task information
 */
export const updateActivities = (planId, data, token) => {
  return new Promise(function (resolve, reject) {
    let confirmationRequest = client.post(
      `api/v1/trainingplans/${planId}/activities`,
      data,
      {
        headers: { authorization: token },
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

export default {
  createTrainingPlan: createTrainingPlan,
  deleteTrainingPlan: deleteTrainingPlan,
  discardTrainingPlanChanges: discardTrainingPlanChanges,
  generateNewBaseline: generateNewBaseline,
  getTrainingPlanById: getTrainingPlanById,
  getListOfTrainingPlans: getListOfTrainingPlans,
  publishTrainingPlan: publishTrainingPlan,
  updateTrainingPlan: updateTrainingPlan,
  updateActivities: updateActivities,
};
