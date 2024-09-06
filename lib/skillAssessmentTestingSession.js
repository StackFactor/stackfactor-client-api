import { client } from "./axiosClient.js";

/**
 * End an existing testing session
 * @param {String} testingSessionId
 * @param {String} token Authorization token
 */
const endSession = (testingSessionId, token) => {
  return new Promise(function (resolve, reject) {
    let confirmationRequest = client.put(
      "api/v1/skillassessmenttestingsession/endsession",
      { id: testingSessionId },
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
 * End an existing testing session
 * @param {String} testingSessionId
 * @param {Array<String>} selectedAnswers
 * @param {String} token Authorization token
 */
const getNextStep = (testingSessionId, selectedAnswers, token) => {
  return new Promise(function (resolve, reject) {
    let data = {
      id: testingSessionId,
    };
    if (selectedAnswers) data.selectedAnswers = selectedAnswers;
    let confirmationRequest = client.post(
      `api/v1/skillassessmenttestingsession/getnextstep`,
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
 * Get skill assessment by user and skill
 * @param {String} userId
 * @param {String} skillId
 * @param {String} token
 * @returns
 */
const getSkillTestAssessment = (userId, skillId, token) => {
  return new Promise(function (resolve, reject) {
    let confirmationRequest = client.post(
      `api/v1/skillassessmenttestingsession/getbyuserandskill`,
      {
        userId: userId,
        skillId: skillId,
      },
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
 * Pause skill assessment
 * @param {String} testingSessionId
 * @param {String} token
 * @returns
 */
const pause = (testingSessionId, token) => {
  return new Promise(function (resolve, reject) {
    let confirmationRequest = client.post(
      `api/v1/skillassessmenttestingsession/pausesession`,
      {
        id: testingSessionId,
      },
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
 * Start a new test skill test assessment session
 * @param {String} skillId
 * @param {Boolean} saveSession
 * @param {String} token
 */
const startSession = (skillId, saveSession, token) => {
  return new Promise(function (resolve, reject) {
    let confirmationRequest = client.post(
      "api/v1/skillassessmenttestingsession/startsession",
      {
        saveSession: saveSession,
        skillId: skillId,
      },
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
  endSession,
  getNextStep,
  getSkillTestAssessment,
  pause,
  startSession,
};
