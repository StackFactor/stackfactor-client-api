import { client } from "./axiosClient";

/**
 * Get responses for a microskill quiz
 * @param {String} learningContentId
 * @param {String} microSkillId
 * @param {String} token
 * @returns {Promise<Object>}
 */
const getResponses = (
  learningContentId: string,
  microSkillId: string,
  token: string
): Promise<object> => {
  return new Promise((resolve, reject) => {
    let confirmationRequest = client.get(
      `api/v1/microskillsresponses/${learningContentId}/${microSkillId}`,
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
 * @returns {Promise<Object>}
 */
const saveResponses = (
  learningContentId: string,
  microSkillId: string,
  responses: object[],
  token: string
): Promise<object> => {
  return new Promise((resolve, reject) => {
    let data = {
      responses: responses,
    };
    let confirmationRequest = client.post(
      `api/v1/microskillsresponses/${learningContentId}/${microSkillId}`,
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

export default {
  getResponses,
  saveResponses,
};
