import { client } from "./axiosClient.js";

/**
 * Create learning content and set information
 * @param {Object} data Learning content data
 * @param {String} token Authorization token
 * @returns {Promise<Object>} The created learning content
 */
const createLearningContent = (data, token) => {
  return new Promise(function (resolve, reject) {
    const requestData = {
      data: data,
    };
    let confirmationRequest = client.put(
      "api/v1/learningcontent",
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
 * Delete learning content
 * @param {String} id The id of the learning content to be deleted
 * @param {String} comments The comments included with the deletion
 * @param {String} token Authorization token
 * @returns {Promise<Object>} The response from the server
 */
const deleteLearningContent = (id, comments, token) => {
  const data = {
    id: id,
  };
  if (comments) data.comments = comments;
  return new Promise(function (resolve, reject) {
    const request = client.delete(`api/v1/learningcontent/`, {
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
 * Discard the learning content draft changes
 * @param {String} id The id of the learning content to be deleted
 * @param {String} token Authorization token
 * @returns {Promise<Object>} The response from the server
 */
const discardLearningContentChanges = (id, token) => {
  return new Promise(function (resolve, reject) {
    const data = {};
    const request = client.get(`api/v1/learningcontent/discard/${id}`, {
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
 * Generate the learning activity content
 * @param {String} learningObjectives
 * @param {String} skillId
 * @param {String} microSkillId
 * @param {Object} learningActivity
 * @param {List<String>} otherLearningActivities
 * @param {List<String>} sections
 * @param {String} token
 */
const generateLearningActivityContent = (
  learningObjectives,
  skillId,
  microSkillId,
  learningActivity,
  otherLearningActivities,
  sections,
  token
) => {
  return new Promise(function (resolve, reject) {
    const requestData = {
      learningObjectives: learningObjectives,
      learningActivity: learningActivity,
      microSkillId: microSkillId,
      sections: sections,
    };
    if (otherLearningActivities) {
      requestData.otherLearningActivities = otherLearningActivities;
    }
    const request = client.post(
      `api/v1/learningcontent/generatelearningactivitycontent/${skillId}`,
      requestData,
      {
        headers: { authorization: token },
        withCredentials: true,
      }
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
 * Generate micro skill test knowledge
 * @param {String} microSkill
 * @param {String} token
 * @returns {Promise}
 */
const generateMicroSkillTestKnowledge = (microSkill, token) => {
  return new Promise(function (resolve, reject) {
    let data = {
      microSkill: microSkill,
    };
    let confirmationRequest = client.post(
      `api/v1/learningcontent/generatemicroskilltestknowledge`,
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
 * Get the learning content information by id
 * @param {String} id The id of the learning content
 * @param {String} version The version of the learning content
 * @param {String} token Authorization token
 * @returns {Promise<Object>} The response from the server
 */
const getLearningContentInformationById = (id, version, token) => {
  return new Promise(function (resolve, reject) {
    let confirmationRequest = client.get(
      `api/v1/learningcontent/${id}/${version}`,
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
 * Get the list of available content types
 * @param {Array<String>} filter The filter used to select the learning content
 * @param {String} version The version to be retrieved
 * @param {boolean} includeDeleted When true it will return the deleted records as well
 * @param {String} token Authorization token
 * @returns {Promise<Array<Object>>} The list of available content
 */
const getLearningContentList = (filter, version, includeDeleted, token) => {
  return new Promise(function (resolve, reject) {
    const requestData = {
      version: version,
      includeDeleted: includeDeleted,
    };
    if (filter) requestData.filter = filter;
    let confirmationRequest = client.post(
      `api/v1/learningcontent`,
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
 * Publish learning content
 * @param {String} id The id of the content to be published
 * @param {String} comments The comments to be include with the request
 * @param {String} token Authorization token
 * @returns {Promise<Object>} The response from the server
 */
const publishLearningContent = (id, comments, token) => {
  return new Promise(function (resolve, reject) {
    let data = {};
    if (comments) data.comments = comments;

    let confirmationRequest = client.post(
      `api/v1/learningcontent/publish/${id}`,
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
 * Set learning content information
 * @param {String} id The id of the learning content to be updated
 * @param {Object} data Data used to update the learning content
 * @param {String} token Authorization token
 * @returns {Promise<Object>} The updated learning content
 */
const setLearningContentInformation = (id, data, token) => {
  return new Promise(function (resolve, reject) {
    const requestData = {
      data: data,
      id: id,
    };
    let confirmationRequest = client.post(
      `api/v1/learningcontent/update`,
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
 * Set partial content information
 * @param {*} id
 * @param {*} data
 * @param {*} token
 * @returns
 */
const setLearningContentPartialContentInformation = (id, data, token) => {
  return new Promise(function (resolve, reject) {
    const requestData = {
      data: data,
      id: id,
    };
    let confirmationRequest = client.post(
      `api/v1/learningcontent/updatepartialcontent/${id}`,
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
 * Set the content for a specific learning activity
 * @param {String} id
 * @param {String} learningcontentid
 * @param {String} microSkillId
 * @param {Object} data
 * @param {String} token
 * @returns {Promise<String>} OK word if the operation was succesful
 */
const setLearningContentLearningContentInformation = (
  id,
  learningcontentid,
  microSkillId,
  data,
  token
) => {
  return new Promise(function (resolve, reject) {
    const requestData = {
      data: data,
      id: id,
      learningcontentid: learningcontentid,
      microSkillId: microSkillId,
    };
    let confirmationRequest = client.post(
      `api/v1/learningcontent/updatelearningcontent/`,
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
 * Set all the learning content for a specific micro skill
 * @param {String} id
 * @param {String} microskillid
 * @param {Object} data
 * @param {String} token
 * @returns {Promise<String>} OK word if the operation was succesful
 */
const setLearningContentLearningMicroSkillContentInformation = (
  id,
  microskillid,
  data,
  token
) => {
  return new Promise(function (resolve, reject) {
    const requestData = {
      data: data,
    };
    let confirmationRequest = client.post(
      `api/v1/learningcontent/updatemicroskilllearningcontent/${id}/${microskillid}`,
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
 * Update the learning content tags
 * @param {String} id The id of the learning to be updated
 * @param {Object} tags Updated learning content tags
 * @param {String} token Authorization token
 */
const setLearningContentTags = (id, tags, token) => {
  return new Promise(function (resolve, reject) {
    const requestData = {
      tags: tags,
      id: id,
    };
    let confirmationRequest = client.post(
      `api/v1/learningcontent/updatetags/`,
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
 * Watch learning content
 * @param {String} id The id of the learning content to be updated
 * @param {Boolean} watch Set to true or false
 * @param {String} token Authorization token
 */
const watchLearningContent = (id, watch, token) => {
  return new Promise(function (resolve, reject) {
    const requestData = {
      id: id,
      watch: watch,
    };
    let confirmationRequest = client.post(
      `api/v1/learningcontent/watch`,
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
  createLearningContent,
  deleteLearningContent,
  discardLearningContentChanges,
  getLearningContentInformationById,
  generateLearningActivityContent,
  generateMicroSkillTestKnowledge,
  getLearningContentList,
  publishLearningContent,
  setLearningContentPartialContentInformation,
  setLearningContentLearningContentInformation,
  setLearningContentLearningMicroSkillContentInformation,
  setLearningContentInformation,
  setLearningContentTags,
  watchLearningContent,
};
