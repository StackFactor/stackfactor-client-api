import { AxiosError, AxiosResponse } from "axios";
import { client } from "./axiosClient.js";

interface GetNextStepPayload {
  id: string;
  selectedAnswers?: Array<string>;
}

/**
 * Add new entry skill assessment
 * @param {String} id
 * @param {Object} data
 * @param {String} comments
 * @param {String} token Authorization token
 * @returns {Promise<object>}
 */
export const addEntry = (
  id: string,
  data: object,
  comments: string,
  token: string
): Promise<object> => {
  return new Promise((resolve, reject) => {
    const requestData = {
      comments: comments,
      data: data,
      id: id,
    };
    const confirmationRequest = client.put(
      "api/v1/skillassessments/addentry",
      requestData,
      {
        headers: { authorization: token },
      }
    );
    confirmationRequest
      .then((response : AxiosResponse) => {
        resolve(response.data);
      })
      .catch((error : AxiosError) => {
        reject(error);
      });
  });
};

/**
 * Create skill assessment
 * @param {Object} data
 * @param {String} comments
 * @param {String} userId
 * @param {String} token Authorization token
 * @returns {Promise<object>}
 */
export const create = (
  data: object,
  comments: string,
  userId: string,
  token: string
): Promise<object> => {
  return new Promise((resolve, reject) => {
    const requestData = {
      comments: comments,
      data: data,
      userId: userId,
    };
    const confirmationRequest = client.put(
      "api/v1/skillassessments/",
      requestData,
      {
        headers: { authorization: token },
      }
    );
    confirmationRequest
      .then((response : AxiosResponse) => {
        resolve(response.data);
      })
      .catch((error : AxiosError) => {
        reject(error);
      });
  });
};

/**
 * Delete skill assessment
 * @param {number} id The id of the skill to be deleted
 * @param {String} comments The comments included with the deletion
 * @param {String} token Authorization token
 * @returns {Promise<object>}
 */
export const deleteSkillAssessment = (
  id: number,
  comments: string,
  token: string
): Promise<object> => {
  return new Promise((resolve, reject) => {
    const data: { id: number, comments?: string } = {
      id: id,
    };
    if (comments) data.comments = comments;
    const request = client.delete(`api/v1/skillassessments`, {
      headers: { authorization: token },
      data: data,
    });
    request
      .then((response : AxiosResponse) => {
        resolve(response.data);
      })
      .catch((error : AxiosError) => {
        reject(error);
      });
  });
};

/**
 * End an existing testing session
 * @param {String} testingSessionId
 * @param {String} token Authorization token
 * @param {Boolean} deletePartial
 */
export const endSession = (testingSessionId: string, token: string, keepPartial = false) => {
  return new Promise(function (resolve, reject) {
    const confirmationRequest = client.post(
      "api/v1/skillassessmenttestingsession/endsession",
      { id: testingSessionId, keepPartial: keepPartial },
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
 * Get skill assessment by id
 * @param {String} id
 * @param {String} token
 * @returns {Promise<object>}
 */
export const getById = (id: string, token: string): Promise<object> => {
  return new Promise((resolve, reject) => {
    const confirmationRequest = client.get(`api/v1/skillassessments/${id}`, {
      headers: { authorization: token },
    });
    confirmationRequest
      .then((response : AxiosResponse) => {
        resolve(response.data);
      })
      .catch((error : AxiosError) => {
        reject(error);
      });
  });
};

/**
 * Get skill assessment by user and skill
 * @param {String} userId
 * @param {String} skillId
 * @param {String} token
 * @returns {Promise<object>} The skill assessment
 */
export const getByUserAndSkill = (
  userId: string,
  skillId: string,
  token: string
): Promise<object> => {
  return new Promise((resolve, reject) => {
    const confirmationRequest = client.get(
      `api/v1/skillassessments/getbyuserandskill/${userId}/${skillId}`,
      {
        headers: { authorization: token },
      }
    );
    confirmationRequest
      .then((response : AxiosResponse) => {
        resolve(response.data);
      })
      .catch((error : AxiosError) => {
        reject(error);
      });
  });
};

/**
 * Get list
 * @param {String} userId The user used to select the skill
 * @param {String} token Authorization token
 * @returns {Promise<object>}
 */
export const getList = (userId: string, token: string): Promise<object> => {
  return new Promise((resolve, reject) => {
    const requestData: { userId?: string } = {};
    if (userId) requestData.userId = userId;
    const confirmationRequest = client.post(
      `api/v1/skillassessments`,
      requestData,
      {
        headers: { authorization: token },
      }
    );
    confirmationRequest
      .then((response : AxiosResponse) => {
        resolve(response.data);
      })
      .catch((error : AxiosError) => {
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
export const getNextStep = (testingSessionId: string, selectedAnswers: Array<string>, token: string) => {
  return new Promise(function (resolve, reject) {
    const data : GetNextStepPayload = {
      id: testingSessionId,
    };
    if (selectedAnswers) data.selectedAnswers = selectedAnswers;
    const confirmationRequest = client.post(
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
};

/**
 * Get skill assessment by user and skill
 * @param {String} userId
 * @param {String} skillId
 * @param {String} token
 * @returns
 */
export const getSkillTestAssessment = (userId: string, skillId: string, token: string) => {
  return new Promise(function (resolve, reject) {
    const confirmationRequest = client.post(
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
};

/**
 * Pause skill assessment
 * @param {String} testingSessionId
 * @param {String} token
 * @returns
 */
export const pause = (testingSessionId: string, token: string) => {
  return new Promise(function (resolve, reject) {
    const confirmationRequest = client.post(
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
};

/**
 * Start a new test skill test assessment session
 * @param {String} skillId
 * @param {Boolean} saveSession
 * @param {String} token
 */
export const startSession = (skillId: string, saveSession: boolean, token: string) => {
  return new Promise(function (resolve, reject) {
    const confirmationRequest = client.post(
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
};
