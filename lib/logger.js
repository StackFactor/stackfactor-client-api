import axios from "./axios";

export default {
  axios: axios,

  /**
   * Create a comment for a specified element id
   * @param {String} elementId
   * @param {String} elementType
   * @param {Object} data
   * @param {String} token Authorization token
   */
  comment(elementId, elementType, data, token) {
    return new Promise(function (resolve, reject) {
      let confirmationRequest = axios.post(
        "api/v1/logger/comment/",
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
  },

  /**
   * Get the list of logger entries for selected element
   * @param {String} elementId
   * @param {number} page The results page
   * @param {number} elementsPerPage The number of elements per page
   * @param {String} token
   * @returns
   */
  getListByElementId(elementId, page, elementsPerPage, token) {
    return new Promise(function (resolve, reject) {
      let data = {};
      if (elementsPerPage !== null) data.elementsPerPage = elementsPerPage;
      if (page !== null) data.page = page;
      const getTokensRequest = axios.post(`api/v1/logger/${elementId}`, data, {
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
  },
};
