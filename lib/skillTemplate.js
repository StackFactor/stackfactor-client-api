import axios from "./axios";

export default {
  axios: axios,

  /**
   * Create skill template and set information
   * @param {Object} data
   * @param {String} token Authorization token
   */
  createSkillTemplate(data, token) {
    return new Promise(function (resolve, reject) {
      const requestData = {
        data: data,
      };
      let confirmationRequest = axios.put(
        "api/v1/skilltemplates",
        requestData,
        { headers: { authorization: token } }
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
   * Delete skill template
   * @param {number} id The id of the template to be deleted
   * @param {String} comment The comment included with the deletion
   * @param {String} token Authorization token
   */
  deleteSkillTemplate(id, comment, token) {
    const data = {
      id: id,
    };
    if (comment) data.comment = comment;
    return new Promise(function (resolve, reject) {
      const request = axios.delete(`api/v1/skilltemplates/`, {
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
   * Discard the skill template draft changes
   * @param {String} id The id of the skill template to be deleted
   * @param {String} token Authorization token
   */
  discardSkillTemplateChanges(id, token) {
    return new Promise(function (resolve, reject) {
      const data = {};
      const request = axios.get(`api/v1/skilltemplates/discard/${id}`, {
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
   * Get skill template information
   * @param {String} id The id of the template
   * @param {String} version The version of the template
   * @param {String} token Authorization token
   */
  getSkillTemplateInformationById(id, version, token) {
    return new Promise(function (resolve, reject) {
      let confirmationRequest = axios.get(
        `api/v1/skilltemplates/${id}/${version}`,
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
   * Get skill template list
   * @param {Array<String>} filter The filter used to select the template
   * @param {String} version The version to be retrieved
   * @param {boolean} includeDeleted When true it will return the deleted records as well
   * @param {String} token Authorization token
   */
  getSkillTemplateList(filter, version, includeDeleted, token) {
    return new Promise(function (resolve, reject) {
      const requestData = {
        version: version,
        includeDeleted: includeDeleted,
      };
      if (filter) requestData.filter = filter;
      let confirmationRequest = axios.post(
        `api/v1/skilltemplates`,
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
   * Publish template
   * @param {number} id The id of the template to be published
   * @param {String} comment The comment to be include with the request
   * @param {String} token Authorization token
   */
  publishTemplate(id, comment, token) {
    return new Promise(function (resolve, reject) {
      let data = {};
      if (comment) data.comment = comment;

      let confirmationRequest = axios.post(
        `api/v1/skilltemplates/publish/${id}`,
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
   * Set template profile information
   * @param {String} id The id of the template to be updated
   * @param {Object} data Data used to update the template
   * @param {String} token Authorization token
   */
  setTemplateInformation(id, data, token) {
    return new Promise(function (resolve, reject) {
      const requestData = {
        data: data,
        id: id,
      };
      let confirmationRequest = axios.post(
        `api/v1/skilltemplates/update`,
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
   * Update the skill template tags
   * @param {String} id The id of the template to be updated
   * @param {Object} tags Updated template tags
   * @param {String} token Authorization token
   */
  setTemplateTags(id, tags, token) {
    return new Promise(function (resolve, reject) {
      const requestData = {
        tags: tags,
        id: id,
      };
      let confirmationRequest = axios.post(
        `api/v1/skilltemplates/updatetags/`,
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
   * Watch skill template
   * @param {String} id The id of the skill template to be updated
   * @param {Boolean} watch Set to true or false
   * @param {String} token Authorization token
   */
  watchSkillTemplate(id, watch, token) {
    return new Promise(function (resolve, reject) {
      const requestData = {
        id: id,
        watch: watch,
      };
      let confirmationRequest = axios.post(
        `api/v1/skilltemplates/watch`,
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
};
