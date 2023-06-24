const { axios } = require("./axios");

// eslint-disable-next-line no-undef
module.exports = {
  axios: axios,

  /**
   * End an existing testing session
   * @param {String} testingSessionId
   * @param {String} token Authorization token
   */
  endSession: (testingSessionId, token) => {
    return new Promise(function (resolve, reject) {
      let confirmationRequest = axios.put(
        "api/v1/skillassessmenttestingsession/endsession",
        { id: testingSessionId },
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
   * End an existing testing session
   * @param {String} testingSessionId
   * @param {Array<String>} selectedAnswers
   * @param {String} token Authorization token
   */
  getNextStep: (testingSessionId, selectedAnswers, token) => {
    return new Promise(function (resolve, reject) {
      let data = {
        id: testingSessionId,
      };
      if (selectedAnswers) data.selectedAnswers = selectedAnswers;
      let confirmationRequest = axios.post(
        `api/v1/skillassessmenttestingsession/getnextstep`,
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
   * Get skill assessment by user and skill
   * @param {String} userId
   * @param {String} skillId
   * @param {String} token
   * @returns
   */
  getSkillTestAssessment: (userId, skillId, token) => {
    return new Promise(function (resolve, reject) {
      let confirmationRequest = axios.post(
        `api/v1/skillassessmenttestingsession/getbyuserandskill`,
        {
          userId: userId,
          skillId: skillId,
        },
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
   * Pause skill assessment
   * @param {String} testingSessionId
   * @param {String} token
   * @returns
   */
  pause: (testingSessionId, token) => {
    return new Promise(function (resolve, reject) {
      let confirmationRequest = axios.post(
        `api/v1/skillassessmenttestingsession/pausesession`,
        {
          id: testingSessionId,
        },
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
   * Start a new test skill test assessment session
   * @param {String} skillId
   * @param {Boolean} saveSession
   * @param {String} token
   */
  startSession: (skillId, saveSession, token) => {
    return new Promise(function (resolve, reject) {
      let confirmationRequest = axios.post(
        "api/v1/skillassessmenttestingsession/startsession",
        {
          saveSession: saveSession,
          skillId: skillId,
        },
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
