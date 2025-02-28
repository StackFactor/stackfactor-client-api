import { AxiosError, AxiosResponse } from "axios";
import { client } from "./axiosClient";

/**
 * Create comments for a specified element id
 * @param {String} elementId
 * @param {String} elementType
 * @param {Object} data
 * @param {String} token Authorization token
 * @returns {Promise<object>}
 */
const comments = (
  elementId: string,
  elementType: string,
  data: object,
  token: string
): Promise<object> => {
  return new Promise((resolve, reject) => {
    const confirmationRequest = client.post(
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
      .then((response : AxiosResponse) => {
        resolve(response.data);
      })
      .catch((error : AxiosError) => {
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
 * @returns {Promise<object>}
 */
const getListByElementId = (
  elementId: string,
  page: number | null,
  elementsPerPage: number | null,
  token: string
): Promise<object> => {
  return new Promise((resolve, reject) => {
    const data: { elementsPerPage?: number, page?: number } = {};
    if (elementsPerPage !== null) data.elementsPerPage = elementsPerPage;
    if (page !== null) data.page = page;
    const getTokensRequest = client.post(`api/v1/logger/${elementId}`, data, {
      headers: { authorization: token },
    });
    getTokensRequest
      .then((result) => {
        resolve(result.data);
      })
      .catch((error : AxiosError) => {
        reject(error);
      });
  });
};

export default { comments, getListByElementId };
