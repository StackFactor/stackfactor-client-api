import { client } from "./axiosClient";

/**
 * Add new entry skill assessment
 * @param {String} id
 * @param {Object} data
 * @param {String} comments
 * @param {String} token Authorization token
 * @returns {Promise<Object>}
 */
const addEntry = (
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
    let confirmationRequest = client.put(
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
};

/**
 * Create skill assessment
 * @param {Object} data
 * @param {String} comments
 * @param {String} userId
 * @param {String} token Authorization token
 * @returns {Promise<Object>}
 */
const create = (
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
    let confirmationRequest = client.put(
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
};

/**
 * Delete skill assessment
 * @param {number} id The id of the skill to be deleted
 * @param {String} comments The comments included with the deletion
 * @param {String} token Authorization token
 * @returns {Promise<Object>}
 */
const deleteSkillAssessment = (
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
 * @returns {Promise<Object>}
 */
const getById = (id: string, token: string): Promise<object> => {
  return new Promise((resolve, reject) => {
    let confirmationRequest = client.get(`api/v1/skillassessments/${id}`, {
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
};

/**
 * Get skill assessment by user and skill
 * @param {String} userId
 * @param {String} skillId
 * @param {String} token
 * @returns {Promise<Object>} The skill assessment
 */
const getByUserAndSkill = (
  userId: string,
  skillId: string,
  token: string
): Promise<object> => {
  return new Promise((resolve, reject) => {
    let confirmationRequest = client.get(
      `api/v1/skillassessments/getbyuserandskill/${userId}/${skillId}`,
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
 * Get list
 * @param {String} userId The user used to select the skill
 * @param {String} token Authorization token
 * @returns {Promise<Object>}
 */
const getList = (userId: string, token: string): Promise<object> => {
  return new Promise((resolve, reject) => {
    const requestData: { userId?: string } = {};
    if (userId) requestData.userId = userId;
    let confirmationRequest = client.post(
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
};

export default {
  addEntry,
  create,
  deleteSkillAssessment,
  getById,
  getByUserAndSkill,
  getList,
};
