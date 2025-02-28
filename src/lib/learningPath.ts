import { client } from "./axiosClient";

interface LearningPathData {
  data?: object;
  id?: string;
  comments?: string;
  tags?: object;
  list?: string[];
  version?: string;
  includeDeleted?: boolean;
}

/**
 * Create learning path and set information
 * @param {Object} data
 * @param {String} token Authorization token
 * @returns {Promise<Object>}
 */
const createLearningPath = (data: object, token: string): Promise<object> => {
  return new Promise((resolve, reject) => {
    let confirmationRequest = client.put(
      "api/v1/learningpaths",
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
 * Delete learning path
 * @param {String} id The id of the template to be deleted
 * @param {String} comments The comments for approver
 * @param {String} token Authorization token
 * @returns {Promise<Object>}
 */
const deleteLearningPath = (id: string, comments: string, token: string): Promise<object> => {
  return new Promise((resolve, reject) => {
    const data: LearningPathData = {
      id: id,
    };
    if (comments) data.comments = comments;
    const request = client.delete(`api/v1/learningpaths/`, {
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
 * @returns {Promise<Object>}
 */
const discardLearningPathChanges = (id: string, token: string): Promise<object> => {
  return new Promise((resolve, reject) => {
    const data = {};
    const request = client.get(`api/v1/learningpaths/discard/${id}`, {
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
 * Get training plan template information
 * @param {String} id The id of the template
 * @param {String} version The version of the template
 * @param {String} token Authorization token
 * @returns {Promise<Object>}
 */
const getLearningPathInformationById = (id: string, version: string, token: string): Promise<object> => {
  return new Promise((resolve, reject) => {
    let confirmationRequest = client.get(
      `api/v1/learningpaths/${id}/${version}`,
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
 * Get learning path list
 * @param {Array<String>} list The filter used to select the skill
 * @param {String} version The version to be retrieved
 * @param {boolean} includeDeleted When true it will return the deleted records as well
 * @param {String} token Authorization token
 * @returns {Promise<Array<Object>>} The list of available content
 */
const getLearningPathsList = (
  list: string[],
  version: string,
  includeDeleted: boolean,
  token: string
): Promise<object[]> => {
  return new Promise((resolve, reject) => {
    const requestData: LearningPathData = {
      version: version,
      includeDeleted: includeDeleted,
    };
    if (list) requestData.list = list;
    let confirmationRequest = client.post(
      `api/v1/learningpaths`,
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
 * Publish training plan template
 * @param {String} id The id of the template to be published
 * @param {String} comments The comments to be include with the request
 * @param {String} token Authorization token
 * @returns {Promise<Object>}
 */
const publishLearningPath = (id: string, comments: string, token: string): Promise<object> => {
  return new Promise((resolve, reject) => {
    let data: LearningPathData = {};
    if (comments) data.comments = comments;
    let confirmationRequest = client.post(
      `api/v1/learningpaths/publish/${id}`,
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
 * Set learning path profile information
 * @param {String} id The id of the template to be updated
 * @param {Object} data Data used to update the template
 * @param {String} token Authorization token
 * @returns {Promise<Object>}
 */
const setLearningPathInformation = (id: string, data: object, token: string): Promise<object> => {
  return new Promise((resolve, reject) => {
    const requestData: LearningPathData = {
      data: data,
      id: id,
    };
    let confirmationRequest = client.post(
      `api/v1/learningpaths/update/`,
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
 * Update learning path tags
 * @param {String} id The id of the template to be updated
 * @param {Object} tags The updated tags
 * @param {String} token Authorization token
 * @returns {Promise<Object>}
 */
const setLearningPathTags = (id: string, tags: object, token: string): Promise<object> => {
  return new Promise((resolve, reject) => {
    const requestData: LearningPathData = {
      tags: tags,
      id: id,
    };
    let confirmationRequest = client.post(
      `api/v1/learningpaths/updatetags/`,
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
  createLearningPath,
  deleteLearningPath,
  discardLearningPathChanges,
  getLearningPathInformationById,
  getLearningPathsList,
  publishLearningPath,
  setLearningPathInformation,
  setLearningPathTags,
};