import { AxiosError, AxiosResponse } from "axios";
import { client } from "./axiosClient.js";

/**
 * Add a card to the dashboard
 * @param {String} id - the id of the card to be added to the dashboard
 * @param {Number} position - The position on the dashboard
 * @param {Object} data - The card settings data
 * @param {String} authToken - Authorization token
 * @returns {Promise<object>}
 */
export const addCardToDashboard = (
  id: string,
  position: number,
  data: object,
  authToken: string
): Promise<object> => {
  return new Promise((resolve, reject) => {
    const request = client.put(
      `/api/v1/dashboard/card`,
      {
        id: id,
        position: position,
        data: data || {},
      },
      { headers: { authorization: authToken } }
    );
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
 * Get the list of the cards from the dashboard
 * @param {String} authToken - Authorization token
 * @returns {Promise<object>}
 */
export const getDashboardCardsList = (authToken: string): Promise<object> => {
  return new Promise((resolve, reject) => {
    const request = client.get(`/api/v1/dashboard/card`, {
      headers: { authorization: authToken },
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
 * Remove a card from the dashboard
 * @param {String} id - the id of the configuration element
 * @param {String} authToken - Authorization token
 * @returns {Promise<object>}
 */
export const removeCardFromDashboard = (
  id: string,
  authToken: string
): Promise<object> => {
  return new Promise((resolve, reject) => {
    const request = client.delete(`/api/v1/dashboard/card`, {
      headers: { authorization: authToken },
      data: {
        id: id,
      },
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
