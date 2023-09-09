import { client } from "./axiosClient.js";

/**
 * Create skill and set information
 * @param {Object} data
 * @param {String} token Authorization token
 * @returns {Promise}
 */
export const createSkill = (data, token) => {
  return new Promise(function (resolve, reject) {
    let confirmationRequest = client.put(
      "api/v1/skills",
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
 * Create skills from templates
 * @param {Array<String>} templateIds,
 * @param {String} token Authorization token
 * @returns {Promise}
 */
export const createSkillsFromTemplates = (templateIds, token) => {
  return new Promise(function (resolve, reject) {
    const requestData = {
      templateIds: templateIds,
    };
    let confirmationRequest = client.put(
      "api/v1/skills/createfromtemplate/",
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
 * Delete skill
 * @param {String} id The id of the skill to be deleted
 * @param {String} comment The comment included with the deletion
 * @param {String} token Authorization token
 * @returns {Promise}
 */
export const deleteSkill = (id, comment, token) => {
  return new Promise(function (resolve, reject) {
    const data = {
      id: id,
    };
    if (comment) data.comment = comment;
    const request = client.delete(`api/v1/skills/`, {
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
 * Discard the skill draft changes
 * @param {String} id The id of the skill to be deleted
 * @param {String} token Authorization token
 * @returns {Promise}
 */
export const discardSkillChanges = (id, token) => {
  return new Promise(function (resolve, reject) {
    const data = {};
    const request = client.get(`api/v1/skills/discard/${id}`, {
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
 * Get the list of imported skill templates
 * @param {String} token
 * @returns {Promise}
 */
export const getImportedSkillTemplates = (token) => {
  return new Promise(function (resolve, reject) {
    const request = client.get(`api/v1/skills/getimportedskilltemplates`, {
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
 * Get the skill related roles
 * @param {String} id
 * @param {String} token
 * @returns {Promise}
 */
export const getSkillRelatedRoles = (id, token) => {
  return new Promise(function (resolve, reject) {
    let confirmationRequest = client.get(
      `api/v1/skills/getskillrelatedroles/${id}`,
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
 * Get skill required assessment type
 * @param {String} id
 * @param {String} token
 * @returns {Promise}
 */
export const getSkillRequiredAssessmentType = (id, token) => {
  return new Promise(function (resolve, reject) {
    let confirmationRequest = client.get(
      `api/v1/skills/getrequiredassessmenttype/${id}`,
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
 * Get skill skill information
 * @param {String} id The id of the skill
 * @param {String} token Authorization token
 * @returns {Promise}
 */
export const getSkillInformationById = (id, version, token) => {
  return new Promise(function (resolve, reject) {
    let confirmationRequest = client.get(
      `api/v1/skills/skill/${id}/${version}`,
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
 * Get skill list
 * @param {Array<String>} filter The filter used to select the skill
 * @param {String} version The version to be retrieved
 * @param {Boolean} includeDeleted If true it will return deleted records as well
 * @param {Boolean} returnDefaultIfVersionNotAvailable Return the default version if published not available
 * @param {Boolean} namesOnly Return only the names of the skills
 * @param {String} token Authorization token
 * @returns {Promise}
 */
export const getSkillList = (
  filter,
  version,
  includeDeleted,
  returnDefaultIfVersionNotAvailable,
  namesOnly,
  token
) => {
  return new Promise(function (resolve, reject) {
    const requestData = {
      includeDeleted: includeDeleted,
      namesOnly: namesOnly,
      returnDefaultIfVersionNotAvailable: returnDefaultIfVersionNotAvailable,
      version: version,
    };
    if (filter) requestData.filter = filter;
    let confirmationRequest = client.post(`api/v1/skills`, requestData, {
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
 * Get skills for team by id
 * @param {String} teamId The ID of the team for which skills will be loaded
 * @param {Number} maxDepth How many levels down in the organization the skills will be loaded
 * @param {String} token Authorization token
 * @returns {Promise}
 */
export const getTeamSkillsById = (teamId, maxDepth, token) => {
  return new Promise(function (resolve, reject) {
    let confirmationRequest = client.get(
      `api/v1/skills/getteambyid/${teamId}/${maxDepth}`,
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
 * Get current user team skills
 * @param {Number} maxDepth How many levels down in the organization the skills will be loaded
 * @param {String} token Authorization token
 * @returns {Promise}
 */
export const getCurrentUserTeamSkills = (maxDepth, token) => {
  return new Promise(function (resolve, reject) {
    let confirmationRequest = client.get(
      `api/v1/skills/getcurrentuserteam/${maxDepth}`,
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
 * Import skill templates
 * @param {Array<String>} data The list of role templates to be imported
 * @param {Boolean} publish If true the imported templates will be published
 * @param {String} token
 * @returns {Promise}
 */
export const importSkillTemplates = (data, publish, token) => {
  return new Promise(function (resolve, reject) {
    const requestData = {
      data: data,
      publish: publish,
    };
    let confirmationRequest = client.post(
      `api/v1/skills/importtemplates`,
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
 * Publish skill
 * @param {String} id The id of the skill to be published
 * @param {String} comment The comment to be include with the request
 * @param {String} token Authorization token
 * @returns {Promise}
 */
export const publishSkill = (id, comment, token) => {
  return new Promise(function (resolve, reject) {
    let data = {};
    if (comment) data.comment = comment;
    let confirmationRequest = client.post(`api/v1/skills/publish/${id}`, data, {
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
 * Set skill information
 * @param {String} id The id of the skill to be updated
 * @param {Object} data Data used to update the skill
 * @param {String} token Authorization token
 * @returns {Promise}
 */
export const setSkillInformation = (id, data, token) => {
  return new Promise(function (resolve, reject) {
    const requestData = {
      data: data,
      id: id,
    };
    let confirmationRequest = client.post(
      `api/v1/skills/update/`,
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
 * Watch skill
 * @param {String} id The id of the skill to be updated
 * @param {Boolean} watch Set to true or false
 * @param {String} token Authorization token
 * @returns {Promise}
 */
export const watchSkill = (id, watch, token) => {
  return new Promise(function (resolve, reject) {
    const requestData = {
      id: id,
      watch: watch,
    };
    let confirmationRequest = client.post(`api/v1/skills/watch`, requestData, {
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

const skill = {
  createSkill,
  createSkillsFromTemplates,
  deleteSkill,
  discardSkillChanges,
  getImportedSkillTemplates,
  getSkillRelatedRoles,
  getSkillRequiredAssessmentType,
  getSkillInformationById,
  getSkillList,
  getTeamSkillsById,
  getCurrentUserTeamSkills,
  importSkillTemplates,
  publishSkill,
  setSkillInformation,
  watchSkill,
};

export default skill;
