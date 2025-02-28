import { client } from "./axiosClient";

/**
 * Create comments for a specified element id
 * @param {String} elementId
 * @param {String} elementType
 * @param {Object} data
 * @param {String} token Authorization token
 * @returns {Promise<Object>}
 */
const comments = (
  elementId: string,
  elementType: string,
  data: object,
  token: string
): Promise<object> => {
  return new Promise((resolve, reject) => {
    let confirmationRequest = client.post(
      "api/v1/logger/comments/",
      {
        data: data,
        elementId: elementId,
        elementType: elementType,
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
 * Get the list of logger entries for selected element
 * @param {String} elementId
 * @param {Number} page The results page
 * @param {Number} elementsPerPage The number of elements per page
 * @param {String} token
 * @returns {Promise<Object>}
 */
const getListByElementId = (
  elementId: string,
  page: number | null,
  elementsPerPage: number | null,
  token: string
): Promise<object> => {
  return new Promise((resolve, reject) => {
    let data: { elementsPerPage?: number, page?: number } = {};
    if (elementsPerPage !== null) data.elementsPerPage = elementsPerPage;
    if (page !== null) data.page = page;
    const getTokensRequest = client.post(`api/v1/logger/${elementId}`, data, {
      headers: { authorization: token },
    });
    getTokensRequest
      .then((result) => {
        resolve(result.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export default { comments, getListByElementId };
