import { client } from "./axiosClient.js";

/**
 * Create skill template and set information
 * @param {Object} data
 * @param {String} token Authorization token
 */
const createSkillTemplate = (data, token) => {
  return new Promise(function (resolve, reject) {
    const requestData = {
      data: data,
    };
    let confirmationRequest = client.put("api/v1/skilltemplates", requestData, {
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
 * Delete skill template
 * @param {number} id The id of the template to be deleted
 * @param {String} comments The comments included with the deletion
 * @param {String} token Authorization token
 */
const deleteSkillTemplate = (id, comments, token) => {
  const data = {
    id: id,
  };
  if (comments) data.comments = comments;
  return new Promise(function (resolve, reject) {
    const request = client.delete(`api/v1/skilltemplates/`, {
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
 * Discard the skill template draft changes
 * @param {String} id The id of the skill template to be deleted
 * @param {String} token Authorization token
 */
const discardSkillTemplateChanges = (id, token) => {
  return new Promise(function (resolve, reject) {
    const data = {};
    const request = client.get(`api/v1/skilltemplates/discard/${id}`, {
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
 * Get skill template information
 * @param {String} id The id of the template
 * @param {String} version The version of the template
 * @param {Boolean} returnNullIfVersionNotFound When true it will return null if the version is not found
 * @param {String} token Authorization token
 */
const getSkillTemplateInformationById = (
  id,
  version,
  returnNullIfVersionNotFound,
  token
) => {
  return new Promise(function (resolve, reject) {
    let confirmationRequest = client.get(
      `api/v1/skilltemplates/${id}/${version}/${returnNullIfVersionNotFound}`,
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
 * Get skill template list
 * @param {Array<String>} filter The filter used to select the template
 * @param {String} version The version to be retrieved
 * @param {Boolean} includeDeleted When true it will return the deleted records as well
 * @param {Boolean} namesOnly When true it will return only the names of the templates
 * @param {String} token Authorization token
 */
const getSkillTemplateList = (
  filter,
  version,
  includeDeleted,
  namesOnly,
  token
) => {
  return new Promise(function (resolve, reject) {
    const requestData = {
      includeDeleted: includeDeleted,
      namesOnly: namesOnly,
      version: version,
    };
    if (filter) requestData.filter = filter;
    let confirmationRequest = client.post(
      `api/v1/skilltemplates`,
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
 * Get skill tecnology stacks template list
 * @param {String} token Authorization token
 */
const getTechnologyStacks = (token) => {
  return new Promise(function (resolve, reject) {
    let confirmationRequest = client.get(`api/v1/skilltemplates/stacks`, {
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
 * Publish template
 * @param {number} id The id of the template to be published
 * @param {String} comments The comments to be include with the request
 * @param {String} token Authorization token
 */
const publishTemplate = (id, comments, token) => {
  return new Promise(function (resolve, reject) {
    let data = {};
    if (comments) data.comments = comments;
    let confirmationRequest = client.post(
      `api/v1/skilltemplates/publish/${id}`,
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
 * Set template profile information
 * @param {String} id The id of the template to be updated
 * @param {Object} data Data used to update the template
 * @param {String} token Authorization token
 */
const setTemplateInformation = (id, data, token) => {
  return new Promise(function (resolve, reject) {
    const requestData = {
      data: data,
      id: id,
    };
    let confirmationRequest = client.post(
      `api/v1/skilltemplates/update`,
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
 * Update the skill template tags
 * @param {String} id The id of the template to be updated
 * @param {Object} tags Updated template tags
 * @param {String} token Authorization token
 */
const setTemplateTags = (id, tags, token) => {
  return new Promise(function (resolve, reject) {
    const requestData = {
      tags: tags,
      id: id,
    };
    let confirmationRequest = client.post(
      `api/v1/skilltemplates/updatetags/`,
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

/*
 * Validate skill template information
 * @param {String} id The id of the skill to be updated
 * @param {String} token Authorization token
 * @returns {Promise}
 */
const validateTemplate = (id, token) => {
  return new Promise(function (resolve, reject) {
    const requestData = {
      id: id,
    };
    let confirmationRequest = client.post(
      `api/v1/skilltemplates/validate/`,
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
 * Watch skill template
 * @param {String} id The id of the skill template to be updated
 * @param {Boolean} watch Set to true or false
 * @param {String} token Authorization token
 */
const watchSkillTemplate = (id, watch, token) => {
  return new Promise(function (resolve, reject) {
    const requestData = {
      id: id,
      watch: watch,
    };
    let confirmationRequest = client.post(
      `api/v1/skilltemplates/watch`,
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
  createSkillTemplate,
  deleteSkillTemplate,
  discardSkillTemplateChanges,
  getSkillTemplateInformationById,
  getSkillTemplateList,
  getTechnologyStacks,
  publishTemplate,
  setTemplateInformation,
  setTemplateTags,
  validateTemplate,
  watchSkillTemplate,
};
