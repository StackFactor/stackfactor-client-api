const { axios } = require("./axios");

module.exports = {
  axios: axios,

  /**
   * Create learning content and set information
   * @param {Object} data Learning content data
   * @param {String} token Authorization token
   * @returns {Promise<Object>} The created learning content
   */
  createLearningContent: (data, token) => {
    return new Promise(function (resolve, reject) {
      const requestData = {
        data: data,
      };
      let confirmationRequest = axios.put(
        "api/v1/learningcontent",
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
   * Delete learning content
   * @param {String} id The id of the learning content to be deleted
   * @param {String} comment The comment included with the deletion
   * @param {String} token Authorization token
   * @returns {Promise<Object>} The response from the server
   */
  deleteLearningContent: (id, comment, token) => {
    const data = {
      id: id,
    };
    if (comment) data.comment = comment;
    return new Promise(function (resolve, reject) {
      const request = axios.delete(`api/v1/learningcontent/`, {
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
   * Discard the learning content draft changes
   * @param {String} id The id of the learning content to be deleted
   * @param {String} token Authorization token
   * @returns {Promise<Object>} The response from the server
   */
  discardLearningContentChanges: (id, token) => {
    return new Promise(function (resolve, reject) {
      const data = {};
      const request = axios.get(`api/v1/learningcontent/discard/${id}`, {
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
   * Get the learning content information by id
   * @param {String} id The id of the learning content
   * @param {String} version The version of the learning content
   * @param {String} token Authorization token
   * @returns {Promise<Object>} The response from the server
   */
  getLearningContentInformationById: (id, version, token) => {
    return new Promise(function (resolve, reject) {
      let confirmationRequest = axios.get(
        `api/v1/learningcontent/${id}/${version}`,
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
   * Get the list of available content types
   * @param {Array<String>} filter The filter used to select the learning content
   * @param {String} version The version to be retrieved
   * @param {boolean} includeDeleted When true it will return the deleted records as well
   * @param {String} token Authorization token
   * @returns {Promise<Array<Object>>} The list of available content
   */
  getLearningContentList: (filter, version, includeDeleted, token) => {
    return new Promise(function (resolve, reject) {
      const requestData = {
        version: version,
        includeDeleted: includeDeleted,
      };
      if (filter) requestData.filter = filter;
      let confirmationRequest = axios.post(
        `api/v1/learningcontent`,
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
   * Publish learning content
   * @param {String} id The id of the content to be published
   * @param {String} comment The comment to be include with the request
   * @param {String} token Authorization token
   * @returns {Promise<Object>} The response from the server
   */
  publishLearningContent: (id, comment, token) => {
    return new Promise(function (resolve, reject) {
      let data = {};
      if (comment) data.comment = comment;

      let confirmationRequest = axios.post(
        `api/v1/learningcontent/publish/${id}`,
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
   * Set learning content information
   * @param {String} id The id of the learning content to be updated
   * @param {Object} data Data used to update the learning content
   * @param {String} token Authorization token
   * @returns {Promise<Object>} The updated learning content
   */
  setLearningContentInformation: (id, data, token) => {
    return new Promise(function (resolve, reject) {
      const requestData = {
        data: data,
        id: id,
      };
      let confirmationRequest = axios.post(
        `api/v1/learningcontent/update`,
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
   * Update the learning content tags
   * @param {String} id The id of the learning to be updated
   * @param {Object} tags Updated learning content tags
   * @param {String} token Authorization token
   */
  setLearningContentTags: (id, tags, token) => {
    return new Promise(function (resolve, reject) {
      const requestData = {
        tags: tags,
        id: id,
      };
      let confirmationRequest = axios.post(
        `api/v1/learningcontent/updatetags/`,
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
   * Watch learning content
   * @param {String} id The id of the learning content to be updated
   * @param {Boolean} watch Set to true or false
   * @param {String} token Authorization token
   */
  watchLearningContent: (id, watch, token) => {
    return new Promise(function (resolve, reject) {
      const requestData = {
        id: id,
        watch: watch,
      };
      let confirmationRequest = axios.post(
        `api/v1/learningcontent/watch`,
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
