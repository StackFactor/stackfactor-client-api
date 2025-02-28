import { client } from "./axiosClient.js";

/**
 * Archive the training plan
 * @param {String} id The id of the training plan to be deleted
 * @param {String} token Authorization token
 */
const archiveTrainingPlan = (id: string, token: string): Promise<object> => {
  return new Promise((resolve, reject) => {
    const request = client.get(`api/v1/trainingplans/archive/${id}`, {
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
 * Create training plan and set information
 * @param {Object} data
 * @param {Number} type
 * @param {Boolean} saveAsDraft Save as draft flag
 * @param {String} token Authorization token
 */
const createTrainingPlan = (
  data: object,
  type: number,
  saveAsDraft: boolean,
  token: string
): Promise<void> => {
  return new Promise((resolve, reject) => {
    const requestData: { version: string; includeDeleted: boolean; includeDetailedInformation: boolean; returnDefaultIfVersionNotAvailable: boolean; fields?: string[]; types?: number[]; users?: string[] } = {
      version: "1.0",
      includeDeleted: false,
      includeDetailedInformation: true,
      returnDefaultIfVersionNotAvailable: true,
      types: [type],
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
 * @param {String} comments The comments for approver
 * @param {String} token Authorization token
 */
const deleteTrainingPlan = (
  id: string,
  comments: string,
  token: string
): Promise<object> => {
  return new Promise((resolve, reject) => {
    const data: { id: string; comments?: string } = {
      id: id,
    };
    if (comments) data.comments = comments;
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
const discardTrainingPlanChanges = (
  id: string,
  token: string
): Promise<object> => {
  return new Promise((resolve, reject) => {
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
 * Create a new baseline
 * @param {String} id The Id of the plan for which a new baseline is to be generated
 * @param {Object} data The data
 * @param {Boolean} returnMinimized If set to true just high level plan baseline information will be returned
 * @param {Boolean} saveBaseline If set to true it will save the baseline
 * @param {String} token Authorization token
 */
const generateNewBaseline = (
  id: string,
  data: object,
  returnMinimized: boolean,
  saveBaseline: boolean,
  token: string
): Promise<object> => {
  return new Promise((resolve, reject) => {
    const requestData: { data: object; returnMinimized: boolean; saveBaseline: boolean; id?: string } = {
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
 * Get training plan information
 * @param {String} id The id of the training plan
 * @param {String} version The version of the training plan
 * @param {String} token Authorization token
 */
const getTrainingPlanById = (
  id: string,
  version: string,
  token: string
): Promise<object> => {
  return new Promise((resolve, reject) => {
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
 * Get tasks summary for a recipient across all of the training plans
 * @param {String} token Authorization token
 */
const getAllTrainingPlansTasksSummary = (
  token: string | null = null
): Promise<object> => {
  return new Promise((resolve, reject) => {
    let confirmationRequest = client.get(`api/v1/trainingplans/taskssummary`, {
      headers: token ? { authorization: token } : {},
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
 * Get training plans list
 * @param {Array<string>} users The list of users for which the plans should be loaded
 * @param {Array<number>} types The types of plans to be loaded
 * @param {String} version The version of the document to be retrieved
 * @param {Array<string>} fields The fields to be selected
 * @param {Boolean} includeDeleted If set true it will return deleted plans too
 * @param {Boolean} includeDetailedInformation If set true it will return detailed information
 * @param {Boolean} returnDefaultIfVersionNotAvailable If set to true it will load the draft information if the plan was never published
 * @param {String} token Authorization token
 */
const getListOfTrainingPlans = (
  users: string[],
  types: number[],
  version: string,
  fields: string[],
  includeDeleted: boolean,
  includeDetailedInformation: boolean,
  returnDefaultIfVersionNotAvailable: boolean,
  token: string
): Promise<object> => {
  return new Promise((resolve, reject) => {
    const requestData: { version: string; includeDeleted: boolean; includeDetailedInformation: boolean; returnDefaultIfVersionNotAvailable: boolean; fields?: string[]; types?: number[]; users?: string[] } = {
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
 * @param {String} comments The comments to be include with the request
 * @param {String} token Authorization token
 */
const publishTrainingPlan = (
  id: string,
  comments: string,
  token: string
): Promise<object> => {
  return new Promise((resolve, reject) => {
    let data: { comments?: string } = {};
    if (comments) data.comments = comments;
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
 * @param {String} planId The ID of the training plan
 * @param {Object} data The updated data
 * @param {Boolean} saveAsDraft Save as draft flag
 * @param {String} token Authorization token
 */
const updateTrainingPlan = (
  planId: string,
  data: object,
  saveAsDraft: boolean,
  token: string
): Promise<object> => {
  return new Promise((resolve, reject) => {
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
 * Update training plan task status
 * @param {String} id The ID of the training plan
 * @param {Number} status
 * @param {String} token
 * @returns {Promise<Object>}
 */
const updateTrainingPlanTaskStatus = (
  id: string,
  status: number,
  token: string
): Promise<object> => {
  return new Promise((resolve, reject) => {
    let data = {
      id: id,
      status: status,
    };
    let confirmationRequest = client.post(`api/v1/trainingplans/task`, data, {
      headers: { authorization: token },
    });
    confirmationRequest
      .then(() => {
        resolve({});
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
 * @param {String} token Authorization token
 * @returns {Promise<Object>}
 */
const updateActivities = (
  planId: string,
  data: object,
  token: string
): Promise<object> => {
  return new Promise((resolve, reject) => {
    let confirmationRequest = client.post(
      `api/v1/trainingplans/${planId}/activities`,
      data,
      {
        headers: { authorization: token },
      }
    );
    confirmationRequest
      .then(() => {
        resolve({});
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export default {
  archiveTrainingPlan,
  createTrainingPlan,
  deleteTrainingPlan,
  discardTrainingPlanChanges,
  generateNewBaseline,
  getAllTrainingPlansTasksSummary,
  getTrainingPlanById,
  getListOfTrainingPlans,
  publishTrainingPlan,
  updateTrainingPlan,
  updateTrainingPlanTaskStatus,
  updateActivities,
};
