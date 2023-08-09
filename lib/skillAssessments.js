import { axios } from "./axiosClient";

module.exports = {
  axios: axios,

  /**
   * Add new entry skill assessment
   * @param {String} id
   * @param {Object} data
   * @param {String} comments
   * @param {String} token Authorization token
   */
  addEntry: (id, data, comments, token) => {
    return new Promise(function (resolve, reject) {
      const requestData = {
        comments: comments,
        data: data,
        id: id,
      };
      let confirmationRequest = axios.put(
        "api/v1/skillassessments/addentry",
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
   * Create skill assessment
   * @param {Object} data
   * @param {String} comments
   * @param {String} userId
   * @param {String} token Authorization token
   */
  create: (data, comments, userId, token) => {
    return new Promise(function (resolve, reject) {
      const requestData = {
        comments: comments,
        data: data,
        userId: userId,
      };
      let confirmationRequest = axios.put(
        "api/v1/skillassessments/",
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
   * Delete skill assessment
   * @param {number} id The id of the skill to be deleted
   * @param {String} comments The comment included with the deletion
   * @param {String} token Authorization token
   */
  deleteSkillAssessment: (id, comments, token) => {
    return new Promise(function (resolve, reject) {
      const data = {
        id: id,
      };
      if (comments) data.comments = comments;
      const request = axios.delete(`api/v1/skillassessments`, {
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
   * Get skill assessment by id
   * @param {String} id
   * @param {String} token
   */
  getById: (id, token) => {
    return new Promise(function (resolve, reject) {
      let confirmationRequest = axios.get(`api/v1/skillassessments/${id}`, {
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
   * Get list
   * @param {Object} userId The user used to select the skill
   * @param {String} token Authorization token
   */
  getList: (userId, token) => {
    return new Promise(function (resolve, reject) {
      const requestData = {};
      if (userId) requestData.userId = userId;
      let confirmationRequest = axios.post(
        `api/v1/skillassessments`,
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
