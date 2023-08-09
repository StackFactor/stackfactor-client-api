import axios from "./axiosClient";

/**
 * Get all permissions
 * @param {String} authToken The authentication token
 */
export const getAllUserNotifications = (authToken) => {
  return new Promise(function (resolve, reject) {
    const request = axios.get(`api/v1/actionnotifications`, {
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
    const request = axios.put(
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
    const request = axios.put(
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

/**
 * Get groups for current tenant
 * @param {String} authToken The authentication token
 */
export const getGroups = (authToken) => {
  return new Promise(function (resolve, reject) {
    const request = axios.get(`api/v1/groups/`, {
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
 * Get current user permissions
 * @param {String} authToken The authentication token
 */
export const getUserPermissions = (authToken) => {
  return new Promise(function (resolve, reject) {
    const request = axios.get(`api/v1/groups/users/getuserpermissions`, {
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
 * Remove permissions from group
 * @param {String} groupId The group Id
 * @param {Array<String>} permissions The permissions to be removed from the group
 * @param {String} authToken The authentication token
 */
export const removePermissionsFromGroup = (groupId, permissions, authToken) => {
  return new Promise(function (resolve, reject) {
    const request = axios.post(
      `api/v1/groups/permissions/remove/`,
      {
        groupId: groupId,
        permissions: permissions,
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
 * Remove users from group
 * @param {String} groupId The group Id
 * @param {Array<String>} users The users to be removed from the group
 * @param {String} authToken The authentication token
 */
export const removeUsersFromGroup = (groupId, users, authToken) => {
  return new Promise(function (resolve, reject) {
    const request = axios.post(
      `api/v1/groups/users/remove/`,
      {
        groupId: groupId,
        users: users,
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

/*
 * Set group as defualt
 * @param {String} groupId The group Id
 * @param {String} authToken The authentication token
 */
export const setDefault = (groupId, authToken) => {
  return new Promise(function (resolve, reject) {
    const request = axios.put(
      `api/v1/groups/setDefault/`,
      {
        id: groupId,
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
 * Update group
 * @param {String} groupId The group Id
 * @param {string} name The updated name of the group
 * @param {string} description The updated description of the group
 * @param {String} authToken The authentication token
 */
export const updateGroup = (groupId, name, description, authToken) => {
  return new Promise(function (resolve, reject) {
    const request = axios.patch(
      `api/v1/groups/group/`,
      {
        id: groupId,
        name: name,
        description: description,
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
