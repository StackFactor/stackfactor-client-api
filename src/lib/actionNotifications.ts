import { AxiosError, AxiosResponse } from "axios";
import { client } from "./axiosClient";

/**
 * Get all permissions
 * @param {String} token The authentication token
 * @returns {Promise<object>}
 */
export const getAllUserNotifications = (token: string): Promise<object> => {
  return new Promise((resolve, reject) => {
    const request = client.get(`api/v1/actionnotifications`, {
      headers: { authorization: token },
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
 * Mark notifications as open or viewed
 * @param {Array<String>} ids The id of the notifications to be marked
 * @param {String} status The new status
 * @param {String} authToken The authentication token
 * @returns {Promise<object>}
 */
export const markNotifications = (
  ids: string[],
  status: string,
  authToken: string
): Promise<object> => {
  return new Promise((resolve, reject) => {
    const request = client.put(
      `api/v1/actionnotifications/mark`,
      {
        ids: ids,
        status: status,
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
 * Process a notification
 * @param {String} id The notification id
 * @param {String} action The action to be executed
 * @param {String} comments The comments to be saved in the notification
 * @param {String} authToken The authentication token
 * @returns {Promise<object>}
 */
export const processNotification = (
  id: string,
  action: string,
  comments: string,
  authToken: string
): Promise<object> => {
  return new Promise((resolve, reject) => {
    const request = client.put(
      `api/v1/actionnotifications/process`,
      {
        id: id,
        action: action,
        comments: comments,
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
