import { client } from "./axiosClient.js";

/**
 * Create skill and set information
 * @param {Object} data
 * @param {String} token Authorization token
 * @returns {Promise<Object>}
 */
const createSkill = (data: object, token: string): Promise<object> => {
  return new Promise((resolve, reject) => {
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
 * @param {Array<String>} templateIds
 * @param {String} token Authorization token
 * @returns {Promise<Object>}
 */
const createSkillsFromTemplates = (
  templateIds: string[],
  token: string
): Promise<object> => {
  return new Promise((resolve, reject) => {
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
 * @param {String} comments The comments included with the deletion
 * @param {String} token Authorization token
 * @returns {Promise<Object>}
 */
const deleteSkill = (
  id: string,
  comments: string,
  token: string
): Promise<object> => {
  return new Promise((resolve, reject) => {
    const data: { id: string; comments?: string } = {
      id: id,
    };
    if (comments) data.comments = comments;
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
 * @param {String} id The id of the skill to be discarded
 * @param {String} token Authorization token
 * @returns {Promise<Object>}
 */
const discardSkillChanges = (id: string, token: string): Promise<object> => {
  return new Promise((resolve, reject) => {
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
 * @param {String} token Authorization token
 * @returns {Promise<Object>}
 */
const getImportedSkillTemplates = (token: string): Promise<object> => {
  return new Promise((resolve, reject) => {
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
 * @param {String} token Authorization token
 * @param {Boolean} includeRoleInformation
 * @returns {Promise<Object>}
 */
const getSkillRelatedRoles = (
  id: string,
  token: string,
  includeRoleInformation = false
): Promise<object> => {
  return new Promise((resolve, reject) => {
    let confirmationRequest = client.get(
      `api/v1/skills/getskillrelatedroles/${id}/${includeRoleInformation}`,
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
 * @param {String} token Authorization token
 * @returns {Promise<Object>}
 */
const getSkillRequiredAssessmentType = (
  id: string,
  token: string
): Promise<object> => {
  return new Promise((resolve, reject) => {
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
 * Get skill information
 * @param {String} id The id of the skill
 * @param {String} version The version of the skill
 * @param {Boolean} returnNullIfVersionNotFound When true it will return null if the version is not found
 * @param {String} token Authorization token
 * @returns {Promise<Object>}
 */
const getSkillInformationById = (
  id: string,
  version: string,
  returnNullIfVersionNotFound: boolean,
  token: string
): Promise<object> => {
  return new Promise((resolve, reject) => {
    let confirmationRequest = client.get(
      `api/v1/skills/skill/${id}/${version}/${returnNullIfVersionNotFound}`,
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
 * @returns {Promise<Object>}
 */
const getSkillList = (
  filter: string[],
  version: string,
  includeDeleted: boolean,
  returnDefaultIfVersionNotAvailable: boolean,
  namesOnly: boolean,
  token: string
): Promise<object> => {
  return new Promise((resolve, reject) => {
    const requestData = {
      includeDeleted: includeDeleted,
      namesOnly: namesOnly,
      returnDefaultIfVersionNotAvailable: returnDefaultIfVersionNotAvailable,
      version: version,
      filter: filter,
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
 * @param {Boolean} returnNullIfVersionNotFound Return null if the version is not found
 * @param {String} token Authorization token
 * @returns {Promise<Object>}
 */
const getTeamSkillsById = (
  teamId: string,
  maxDepth: number,
  returnNullIfVersionNotFound: boolean,
  token: string
): Promise<object> => {
  return new Promise((resolve, reject) => {
    let confirmationRequest = client.get(
      `api/v1/skills/getteambyid/${teamId}/${maxDepth}/${returnNullIfVersionNotFound}`,
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
 * @returns {Promise<Object>}
 */
const getCurrentUserTeamSkills = (
  maxDepth: number,
  token: string
): Promise<object> => {
  return new Promise((resolve, reject) => {
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
 * Get skill template updates
 * @param {String} id The skill id
 * @param {String} token Authorization token
 * @returns {Promise<Object>}
 */
const getSkillTemplateUpdates = (
  id: string,
  token: string
): Promise<object> => {
  return new Promise((resolve, reject) => {
    let confirmationRequest = client.get(
      `api/v1/skills/getskilltemplateupdates/${id}`,
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
 * @param {String} token Authorization token
 * @returns {Promise<Object>}
 */
const importSkillTemplates = (
  data: string[],
  publish: boolean,
  token: string
): Promise<object> => {
  return new Promise((resolve, reject) => {
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
 * @param {String} comments The comments to be include with the request
 * @param {String} token Authorization token
 * @returns {Promise<Object>}
 */
const publishSkill = (
  id: string,
  comments: string,
  token: string
): Promise<object> => {
  return new Promise((resolve, reject) => {
    let data: { comments?: string } = {};
    if (comments) data.comments = comments;
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
 * @returns {Promise<Object>}
 */
const setSkillInformation = (
  id: string,
  data: object,
  token: string
): Promise<object> => {
  return new Promise((resolve, reject) => {
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
 * Set the skill information from template
 * @param {String} id The id of the skill to be updated
 * @param {Object} data Data used to update the skill
 * @param {String} token Authorization token
 * @returns {Promise<Object>}
 */
const setSkillInformationFromTemplate = (
  id: string,
  data: object,
  token: string
): Promise<object> => {
  return new Promise((resolve, reject) => {
    const requestData = {
      data: data,
      id: id,
    };
    let confirmationRequest = client.post(
      `api/v1/skills/updatefromtemplate/`,
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
 * Validate skill information
 * @param {String} id The id of the skill to be updated
 * @param {String} token Authorization token
 * @returns {Promise<Object>}
 */
const validateSkill = (id: string, token: string): Promise<object> => {
  return new Promise((resolve, reject) => {
    const requestData = {
      id: id,
    };
    let confirmationRequest = client.post(
      `api/v1/skills/validate/`,
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
 * @returns {Promise<Object>}
 */
const watchSkill = (
  id: string,
  watch: boolean,
  token: string
): Promise<object> => {
  return new Promise((resolve, reject) => {
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

export default {
  createSkill,
  createSkillsFromTemplates,
  deleteSkill,
  discardSkillChanges,
  getImportedSkillTemplates,
  getSkillRelatedRoles,
  getSkillRequiredAssessmentType,
  getSkillInformationById,
  getSkillList,
  getSkillTemplateUpdates,
  getTeamSkillsById,
  getCurrentUserTeamSkills,
  importSkillTemplates,
  publishSkill,
  setSkillInformation,
  setSkillInformationFromTemplate,
  validateSkill,
  watchSkill,
};
