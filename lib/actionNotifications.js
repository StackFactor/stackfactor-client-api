import { client } from "./axiosClient.js";

/**
 * Get all permissions
 * @param {String} authToken The authentication token
 */
export const getAllUserNotifications = (authToken) => {
  return new Promise(function (resolve, reject) {
    const request = client.get(`api/v1/actionnotifications`, {
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
};

/**
 * Mark notifications as open or viewed
 * @param {Array<String>} ids The id of the notifications to be marked
 * @param {String} status The new status
 * @param {String} authToken The authentication token
 */
export const markNotifications = (ids, status, authToken) => {
  return new Promise(function (resolve, reject) {
    const request = client.put(
      `api/v1/actionnotifications/mark`,
      {
        ids: ids,
        status: status,
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
};

/**
 * Process a notification
 * @param {String} id The notification id
 * @param {String} action The action to be executed
 * @param {String} comment The comment to be saved in the notification
 * @param {String} authToken The authentication token
 */
export const processNotification = (id, action, comment, authToken) => {
  return new Promise(function (resolve, reject) {
    const request = client.put(
      `api/v1/actionnotifications/process`,
      {
        id: id,
        action: action,
        comment: comment,
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
};

export default {
  getAllUserNotifications,
  markNotifications,
  processNotification,
};
