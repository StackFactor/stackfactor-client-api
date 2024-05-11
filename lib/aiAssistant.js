import { client } from "./axiosClient.js";

/**
 * Ask Question to the AI
 * @param {String} conversationId
 * @param {String} question
 * @param {String} updatedContext
 * @param {String} token Authorization token
 * @returns {Promise}
 */
const askQuestion = (conversationId, question, updatedContext, token) => {
  return new Promise(function (resolve, reject) {
    let data = {
      conversationId: conversationId,
      question: question,
      updatedContext: updatedContext,
    };
    let confirmationRequest = client.post(
      "/api/v1/aiassistant/askquestion",
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

/**
 * End conversation with the AI
 * @param {String} conversationId
 * @param {String} token Authorization token
 * @returns {Promise}
 */
const endConversation = (conversationId, token) => {
  return new Promise(function (resolve, reject) {
    let data = {
      conversationId: conversationId,
    };
    let confirmationRequest = client.post(
      "/api/v1/aiassistant/endconversation",
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

/**
 * Get conversation by elementId
 * @param {String} elementId
 * @param {String} token
 * @returns {Promise}
 */
const getConversationByElementId = (elementId, token) => {
  return new Promise(function (resolve, reject) {
    let confirmationRequest = client.get(
      `/api/v1/aiassistant/getconversation/${elementId}`,
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
 * Start conversation with the AI
 * @param {String} elementId
 * @param {String} elementType
 * @param {String} context
 * @param {Boolean} autoContextRefresh
 * @param {String} token
 * @param {String} conversationId Optional
 * @returns {Promise}
 */
const startConversation = (
  elementId,
  elementType,
  question,
  context,
  autoContextRefresh,
  token,
  conversationId = null
) => {
  return new Promise(function (resolve, reject) {
    let data = {
      autoContextRefresh: autoContextRefresh,
      context: context,
      question: question,
      elementId: elementId,
      elementType: elementType,
    };
    if (conversationId) {
      data.conversationId = conversationId;
    }
    let confirmationRequest = client.post(
      "/api/v1/aiassistant/startconversation",
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
  askQuestion,
  endConversation,
  getConversationByElementId,
  startConversation,
};
