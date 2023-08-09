const { axios } = require("./axiosClient");

module.exports = {
  axios: axios,

  /**
   * Add a card to the dashboard
   * @param {String} id - the id of the card to be added to the dashboard
   * @param {Number} position - The position on the dashboard
   * @param {Object} data - The card settings data
   * @param {String} authToken - Authorization token
   */
  addCardToDashboard: (id, position, data, authToken) => {
    return new Promise(function (resolve, reject) {
      const request = axios.put(
        `/api/v1/dashboard/card`,
        {
          id: id,
          position: position,
          data: data ? data : {},
        },
        { headers: { authorization: authToken } }
      );
      request
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },

  /**
   * Get the list of the cards from the dashboard
   * @param {String} authToken - Authorization token
   */
  getDashboardCardsList: (authToken) => {
    return new Promise(function (resolve, reject) {
      const request = axios.get(`/api/v1/dashboard/card`, {
        headers: { authorization: authToken },
      });
      request
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },

  /**
   * Remove a card from the dashboard
   * @param {String} id - the id of the configuration element
   * @param {String} authToken - Authorization token
   */
  removeCardFromDashboard: (id, authToken) => {
    return new Promise(function (resolve, reject) {
      const request = axios.delete(`/api/v1/dashboard/card`, {
        headers: { authorization: authToken },
        data: {
          id: id,
        },
      });
      request
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
};
