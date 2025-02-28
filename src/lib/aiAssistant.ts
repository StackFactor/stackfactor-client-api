import { client } from "./axiosClient.js";

interface AskQuestionData {
  conversationId: string;
  question: string;
  updatedContext: string;
}

interface EndConversationData {
  conversationId: string;
}

interface StartConversationData {
  autoContextRefresh: boolean;
  context: string;
  question: string;
  elementId: string;
  elementType: string;
  conversationId?: string | null;
}

/**
 * Ask Question to the AI
 * @param {String} conversationId
 * @param {String} question
 * @param {String} updatedContext
 * @param {String} token Authorization token
 * @returns {Promise<Object>}
 */
const askQuestion = (
  conversationId: string,
  question: string,
  updatedContext: string,
  token: string
): Promise<object> => {
  return new Promise((resolve, reject) => {
    let data: AskQuestionData = {
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
 * @returns {Promise<Object>}
 */
const endConversation = (
  conversationId: string,
  token: string
): Promise<object> => {
  return new Promise((resolve, reject) => {
    let data: EndConversationData = {
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
 * @returns {Promise<Object>}
 */
const getConversationByElementId = (
  elementId: string,
  token: string
): Promise<object> => {
  return new Promise((resolve, reject) => {
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
 * Get the voice assistant URL
 * @param {String} language
 * @param {String} token
 * @returns {Promise<Object>}
 */
const getVoiceAssistantUrl = (
  language: string,
  token: string
): Promise<object> => {
  return new Promise((resolve, reject) => {
    let confirmationRequest = client.get(
      `/api/v1/aiassistant/getvoiceassistanturl/${language}`,
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
 * @returns {Promise<Object>}
 */
const startConversation = (
  elementId: string,
  elementType: string,
  question: string,
  context: string,
  autoContextRefresh: boolean,
  token: string,
  conversationId: string | null = null
): Promise<object> => {
  return new Promise((resolve, reject) => {
    let data: StartConversationData = {
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
  getVoiceAssistantUrl,
  startConversation,
};
