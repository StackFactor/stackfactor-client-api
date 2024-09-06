import { client } from "./axiosClient.js";

/**
 * Create learning path and set information
 * @param {Object} data
 * @param {String} token Authorization token
 */
const createLearningPath = (data, token) => {
  return new Promise(function (resolve, reject) {
    let confirmationRequest = client.put(
      "api/v1/learningpaths",
      { data: data },
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
 * Delete learning path
 * @param {String} id The id of the template to be deleted
 * @param {String} comments The comments for approver
 * @param {String} token Authorization token
 */
const deleteLearningPath = (id, comments, token) => {
  return new Promise(function (resolve, reject) {
    const data = {
      id: id,
    };
    if (comments) data.comments = comments;
    const request = client.delete(`api/v1/learningpaths/`, {
      headers: { authorization: token },
      withCredentials: true,
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
const discardLearningPathChanges = (id, token) => {
  return new Promise(function (resolve, reject) {
    const data = {};
    const request = client.get(`api/v1/learningpaths/discard/${id}`, {
      headers: { authorization: token },
      withCredentials: true,
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
const getLearningPathInformationById = (id, version, token) => {
  return new Promise(function (resolve, reject) {
    let confirmationRequest = client.get(
      `api/v1/learningpaths/${id}/${version}`,
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
 * Get learning path list
 * @param {Array<String>} list The filter used to select the skill
 * @param {String} version The version to be retrieved
 * @param {String} token Authorization token
 */
const getLearningPathsList = (list, version, includeDeleted, token) => {
  return new Promise(function (resolve, reject) {
    const requestData = {
      version: version,
      includeDeleted: includeDeleted,
    };
    if (list) requestData.list = list;
    let confirmationRequest = client.post(`api/v1/learningpaths`, requestData, {
      headers: { authorization: token },
      withCredentials: true,
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
 * Publish training pplan template
 * @param {String} id The id of the template to be published
 * @param {String} comments The comments to be include with the request
 * @param {String} token Authorization token
 */
const publishLearningPath = (id, comments, token) => {
  return new Promise(function (resolve, reject) {
    let data = {};
    if (comments) data.comments = comments;
    let confirmationRequest = client.post(
      `api/v1/learningpaths/publish/${id}`,
      data,
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
 * Set learning path profile information
 * @param {String} id The id of the template to be updated
 * @param {Object} data Data used to update the template
 * @param {String} token Authorization token
 */
const setLearningPathInformation = (id, data, token) => {
  return new Promise(function (resolve, reject) {
    const requestData = {
      data: data,
      id: id,
    };
    let confirmationRequest = client.post(
      `api/v1/learningpaths/update/`,
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
 * Update learning path tags
 * @param {String} id The id of the template to be updated
 * @param {Object} tags The updated tags
 * @param {String} token Authorization token
 */
const setLearningPathTags = (id, tags, token) => {
  return new Promise(function (resolve, reject) {
    const requestData = {
      tags: tags,
      id: id,
    };
    let confirmationRequest = client.post(
      `api/v1/learningpaths/updatetags/`,
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

export default {
  createLearningPath,
  deleteLearningPath,
  discardLearningPathChanges,
  getLearningPathInformationById,
  getLearningPathsList,
  publishLearningPath,
  setLearningPathInformation,
  setLearningPathTags,
};
