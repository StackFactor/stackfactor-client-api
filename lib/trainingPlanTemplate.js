import { client } from "./axiosClient.js";

/**
 * Create training plan template and set information
 * @param {Object} data
 * @param {String} token Authorization token
 */
export const createTrainingPlanTemplate = (data, token) => {
  return new Promise(function (resolve, reject) {
    let confirmationRequest = client.put(
      "api/v1/trainingplantemplates",
      { data: data },
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
 * Delete training plan template
 * @param {String} id The id of the template to be deleted
 * @param {String} comment The comment for approver
 * @param {String} token Authorization token
 */
export const deleteTrainingPlanTemplate = (id, comment, token) => {
  return new Promise(function (resolve, reject) {
    const data = {
      id: id,
    };
    if (comment) data.comment = comment;
    const request = client.delete(`api/v1/trainingplantemplates/`, {
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
    const data = {};
    const request = client.get(`api/v1/trainingplantemplates/discard/${id}`, {
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
 * Get traing plan template information
 * @param {String} id The id of the template
 * @param {String} token Authorization token
 */
export const getTrainingPlanTemplateInformationById = (id, version, token) => {
  return new Promise(function (resolve, reject) {
    let confirmationRequest = client.get(
      `api/v1/trainingplantemplates/${id}/${version}`,
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
 * Get training plan template list
 * @param {Array<String>} list The filter used to select the skill
 * @param {String} version The version to be retrieved
 * @param {String} token Authorization token
 */
export const getTrainingPlanTemplatesList = (
  list,
  version,
  includeDeleted,
  token
) => {
  return new Promise(function (resolve, reject) {
    const requestData = {
      version: version,
      includeDeleted: includeDeleted,
    };
    if (list) requestData.list = list;
    let confirmationRequest = client.post(
      `api/v1/trainingplantemplates`,
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
 * Publish training pplan template
 * @param {String} id The id of the template to be published
 * @param {String} comment The comment to be include with the request
 * @param {String} token Authorization token
 */
export const publishTrainingPlanTemplate = (id, comment, token) => {
  return new Promise(function (resolve, reject) {
    let data = {};
    if (comment) data.comment = comment;
    let confirmationRequest = client.post(
      `api/v1/trainingplantemplates/publish/${id}`,
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
 * Set training plan template profile information
 * @param {String} id The id of the template to be updated
 * @param {Object} data Data used to update the template
 * @param {String} token Authorization token
 */
export const setTrainingPlanTemplateInformation = (id, data, token) => {
  return new Promise(function (resolve, reject) {
    const requestData = {
      data: data,
      id: id,
    };
    let confirmationRequest = client.post(
      `api/v1/trainingplantemplates/update/`,
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
 * Update training plan template tags
 * @param {String} id The id of the template to be updated
 * @param {Object} tags The updated tags
 * @param {String} token Authorization token
 */
export const setTrainingPlanTemplateTags = (id, tags, token) => {
  return new Promise(function (resolve, reject) {
    const requestData = {
      tags: tags,
      id: id,
    };
    let confirmationRequest = client.post(
      `api/v1/trainingplantemplates/updatetags/`,
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
  createTrainingPlanTemplate: createTrainingPlanTemplate,
  deleteTrainingPlanTemplate: deleteTrainingPlanTemplate,
  discardTrainingPlanChanges: discardTrainingPlanChanges,
  getTrainingPlanTemplateInformationById:
    getTrainingPlanTemplateInformationById,
  getTrainingPlanTemplatesList: getTrainingPlanTemplatesList,
  publishTrainingPlanTemplate: publishTrainingPlanTemplate,
  setTrainingPlanTemplateInformation: setTrainingPlanTemplateInformation,
  setTrainingPlanTemplateTags: setTrainingPlanTemplateTags,
};
