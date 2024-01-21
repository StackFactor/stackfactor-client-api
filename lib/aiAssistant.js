import { client } from "./axiosClient.js";

/**
 * Ask Question to the AI
 * @param {String} conversationId
 * @param {String} question
 * @param {String} updatedContext
 * @param {String} token Authorization token
 * @returns {Promise}
 */
export const askQuestion = (
  conversationId,
  question,
  updatedContext,
  token
) => {
  return new Promise(function (resolve, reject) {
    let data = {
      conversationId: conversationId,
      question: question,
      updatedContext: updatedContext,
    };
    let confirmationRequest = client.post(
      "/api/v1/aiassistant/askquestion",
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
};

/**
 * End conversation with the AI
 * @param {String} conversationId
 * @param {String} token Authorization token
 * @returns {Promise}
 */
export const endConversation = (conversationId, token) => {
  return new Promise(function (resolve, reject) {
    let data = {
      conversationId: conversationId,
    };
    let confirmationRequest = client.post(
      "/api/v1/aiassistant/endconversation",
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
 * @returns {Promise}
 */
const startConversation = (
  elementId,
  elementType,
  context,
  autoContextRefresh,
  token
) => {
  return new Promise(function (resolve, reject) {
    let data = {
      autoContextRefresh: autoContextRefresh,
      context: context,
      elementId: elementId,
      elementType: elementType,
    };
    let confirmationRequest = client.post(
      "/api/v1/aiassistant/startconversation",
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
};

const aiAssistant = {
  askQuestion,
  endConversation,
  getConversationByElementId,
  startConversation,
};

export default aiAssistant;
