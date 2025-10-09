import { AxiosError, AxiosResponse } from "axios";
import { client } from "./axiosClient.js";

/**
 * Get responses for a microskill quiz
 * @param {String} learningContentId
 * @param {String} microSkillId
 * @param {String} token
 * @returns {Promise<object>}
 */
export const getResponses = (
  learningContentId: string,
  microSkillId: string,
  token: string
): Promise<object> => {
  return new Promise((resolve, reject) => {
    const confirmationRequest = client.get(
      `/api/v1/microskillsresponses/${learningContentId}/${microSkillId}`,
      {
        headers: { authorization: token },
      }
    );
    confirmationRequest
      .then((response: AxiosResponse) => {
        resolve(response.data);
      })
      .catch((error: AxiosError) => {
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
 * @returns {Promise<object>}
 */
export const saveResponses = (
  learningContentId: string,
  microSkillId: string,
  responses: object[],
  token: string
): Promise<object> => {
  return new Promise((resolve, reject) => {
    const data = {
      responses: responses,
    };
    const confirmationRequest = client.post(
      `/api/v1/microskillsresponses/${learningContentId}/${microSkillId}`,
      data,
      {
        headers: { authorization: token },
      }
    );
    confirmationRequest
      .then((response: AxiosResponse) => {
        resolve(response.data);
      })
      .catch((error: AxiosError) => {
        reject(error);
      });
  });
};
