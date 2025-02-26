import { client } from "../axiosClient.js";

interface GenerateContentData {
  data: string[];
  contentType: string;
  integrationId?: string;
}

interface GenerateContentAsyncData {
  id: string;
  data: object;
  contentType: string;
  elementType: string;
  integrationId?: string;
  comments: string;
}

/**
 * Generate content
 * @param {Array<String>} data
 * @param {String} contentType
 * @param {String} integrationId
 * @param {String} token
 * @returns {Promise<Object>}
 */
export const generateContent = (
  data: string[],
  contentType: string,
  integrationId: string,
  token: string
): Promise<object> => {
  return new Promise((resolve, reject) => {
    let data_: GenerateContentData = {
      data: data,
      contentType: contentType,
    };
    if (integrationId) data_.integrationId = integrationId;
    const request = client.post(`api/v1/contentgenerators/generate`, data_, {
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
 * Generate content async
 * @param {String} id
 * @param {Object} data
 * @param {String} contentType
 * @param {String} elementType
 * @param {String} integrationId
 * @param {String} comments
 * @param {String} token
 * @returns {Promise<Object>}
 */
export const generateContentAsync = (
  id: string,
  data: object,
  contentType: string,
  elementType: string,
  integrationId: string,
  comments: string,
  token: string
): Promise<object> => {
  return new Promise((resolve, reject) => {
    let data_: GenerateContentAsyncData = {
      id: id,
      data: data,
      comments: comments,
      contentType: contentType,
      elementType: elementType,
    };
    if (integrationId) data_.integrationId = integrationId;
    const request = client.post(
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

const contentGenerator = { generateContent, generateContentAsync };

export default contentGenerator;
