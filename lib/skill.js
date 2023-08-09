import { axios } from "./axiosClient";

module.exports = {
  axios: axios,

  /**
   * Create skill and set information
   * @param {Object} data
   * @param {String} token Authorization token
   */
  createSkill: (data, token) => {
    return new Promise(function (resolve, reject) {
      let confirmationRequest = axios.put(
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
  },

  /**
   * Create skills from templates
   * @param {Array<String>} templateIds,
   * @param {String} token Authorization token
   */
  createSkillsFromTemplates: (templateIds, token) => {
    return new Promise(function (resolve, reject) {
      const requestData = {
        templateIds: templateIds,
      };
      let confirmationRequest = axios.put(
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
  },

  /**
   * Delete skill
   * @param {String} id The id of the skill to be deleted
   * @param {String} comment The comment included with the deletion
   * @param {String} token Authorization token
   */
  deleteSkill: (id, comment, token) => {
    return new Promise(function (resolve, reject) {
      const data = {
        id: id,
      };
      if (comment) data.comment = comment;
      const request = axios.delete(`api/v1/skills/`, {
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
  },

  /**
   * Discard the skill draft changes
   * @param {String} id The id of the skill to be deleted
   * @param {String} token Authorization token
   */
  discardSkillChanges: (id, token) => {
    return new Promise(function (resolve, reject) {
      const data = {};
      const request = axios.get(`api/v1/skills/discard/${id}`, {
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
  },

  /**
   * Get the skill related roles
   * @param {String} id
   * @param {String} token
   * @returns
   */
  getSkillRelatedRoles: (id, token) => {
    return new Promise(function (resolve, reject) {
      let confirmationRequest = axios.get(
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
  },

  /**
   * Get skill required assessment type
   * @param {String} id
   * @param {String} token
   */
  getSkillRequiredAssessmentType: (id, token) => {
    return new Promise(function (resolve, reject) {
      let confirmationRequest = axios.get(
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
  },

  /**
   * Get skill skill information
   * @param {String} id The id of the skill
   * @param {String} token Authorization token
   */
  getSkillInformationById: (id, version, token) => {
    return new Promise(function (resolve, reject) {
      let confirmationRequest = axios.get(
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
  },

  /**
   * Get skill list
   * @param {Array<String>} filter The filter used to select the skill
   * @param {String} version The version to be retrieved
   * @param {Boolean} includeDeleted If true it will return deleted records as well
   * @param {Boolean} returnDefaultIfVersionNotAvailable Return the default version if published not available
   * @param {String} token Authorization token
   */
  getSkillList: (
    filter,
    version,
    includeDeleted,
    returnDefaultIfVersionNotAvailable,
    token
  ) => {
    return new Promise(function (resolve, reject) {
      const requestData = {
        version: version,
        includeDeleted: includeDeleted,
        returnDefaultIfVersionNotAvailable: returnDefaultIfVersionNotAvailable,
      };
      if (filter) requestData.filter = filter;
      let confirmationRequest = axios.post(`api/v1/skills`, requestData, {
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
  },

  /**
   * Get skills for team by id
   * @param {String} teamId The ID of the team for which skills will be loaded
   * @param {*} maxDepth How many levels down in the organization the skills will be loaded
   * @param {*} token Authorization token
   */
  getTeamSkillsById: (teamId, maxDepth, token) => {
    return new Promise(function (resolve, reject) {
      let confirmationRequest = axios.get(
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
  },

  /**
   * Get current user team skills
   * @param {*} maxDepth How many levels down in the organization the skills will be loaded
   * @param {*} token Authorization token
   */
  getCurrentUserTeamSkills: (maxDepth, token) => {
    return new Promise(function (resolve, reject) {
      let confirmationRequest = axios.get(
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
  },

  /**
   * Publish skill
   * @param {String} id The id of the skill to be published
   * @param {String} comment The comment to be include with the request
   * @param {String} token Authorization token
   */
  publishSkill: (id, comment, token) => {
    return new Promise(function (resolve, reject) {
      let data = {};
      if (comment) data.comment = comment;
      let confirmationRequest = axios.post(
        `api/v1/skills/publish/${id}`,
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
  },

  /**
   * Set skill information
   * @param {String} id The id of the skill to be updated
   * @param {Object} data Data used to update the skill
   * @param {String} token Authorization token
   */
  setSkillInformation: (id, data, token) => {
    return new Promise(function (resolve, reject) {
      const requestData = {
        data: data,
        id: id,
      };
      let confirmationRequest = axios.post(
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
  },

  /**
   * Watch skill
   * @param {String} id The id of the skill to be updated
   * @param {Boolean} watch Set to true or false
   * @param {String} token Authorization token
   */
  watchSkill: (id, watch, token) => {
    return new Promise(function (resolve, reject) {
      const requestData = {
        id: id,
        watch: watch,
      };
      let confirmationRequest = axios.post(`api/v1/skills/watch`, requestData, {
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
  },
};
