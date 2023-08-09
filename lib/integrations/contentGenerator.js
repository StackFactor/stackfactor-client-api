import axios from "./axiosClient.js";

/**
 * Generate content
 * @param {Array<String>} data
 * @param {String} contentType
 * @param {String} integrationId
 * @param {String} token
 * @returns {Object}
 */
export const generateContent = (data, contentType, integrationId, token) => {
  return new Promise(function (resolve, reject) {
    let data_ = {
      data: data,
      contentType: contentType,
    };
    if (integrationId) data.integrationId = integrationId;
    const request = axios.post(`api/v1/contentgenerators/generate`, data_, {
      headers: { authorization: token },
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
 * Generate content aync
 * @param {String} id
 * @param {Object} data
 * @param {String} contentType
 * @param {String} elementType
 * @param {String} integrationId
 * @param {String} comments
 * @param {String} token
 * @returns {Object}
 */
export const generateContentAsync = (
  id,
  data,
  contentType,
  elementType,
  integrationId,
  comments,
  token
) => {
  return new Promise(function (resolve, reject) {
    let data_ = {
      data: data,
      comments: comments,
      contentType: contentType,
      elementType: elementType,
      id: id,
    };
    if (integrationId) data_.integrationId = integrationId;
    const request = axios.post(
      `api/v1/contentgenerators/generateasync`,
      data_,
      {
        headers: { authorization: token },
      }
    );
    request
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
