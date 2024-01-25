import { client } from "./axiosClient.js";

/**
 * Get responses for a microskill quiz
 * @param {String} learningContentId
 * @param {String} microSkillId
 * @param {String} token
 * @returns {Promise}
 */
const getResponses = (learningContentId, microSkillId, token) => {
  return new Promise(function (resolve, reject) {
    let confirmationRequest = client.get(
      `/api/v1/microskillsresponses/${learningContentId}/${microSkillId}`,
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
 * Save responses for a microskill quiz
 * @param {String} learningContentId
 * @param {String} microSkillId
 * @param {Array<Object>} responses
 * @param {String} token Authorization token
 * @returns {Promise}
 */
export const saveResponses = (
  learningContentId,
  microSkillId,
  responses,
  token
) => {
  return new Promise(function (resolve, reject) {
    let data = {
      responses: responses,
    };
    let confirmationRequest = client.post(
      `/api/v1/microskillsresponses/${learningContentId}/${microSkillId}`,
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
};

const microSkillsQuizes = {
  getResponses,
  saveResponses,
};

export default microSkillsQuizes;
