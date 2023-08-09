import { client } from "./axiosClient.js";

/**
 * Add permissions to group
 * @param {String} groupId The group Id
 * @param {Array<String>} permissions The permissions to be added
 * @param {String} authToken - Authentication token
 */
export const addPermissionsToGroup = (groupId, permissions, authToken) => {
  return new Promise(function (resolve, reject) {
    const request = client.post(
      `api/v1/groups/permissions/add`,
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
 * Add users to group
 * @param {String} groupId The group Id
 * @param {Array<String>} users The users to be added
 * @param {String} authToken - Authentication token
 */
export const addUsersToGroup = (groupId, users, authToken) => {
  return new Promise(function (resolve, reject) {
    const request = client.post(
      `api/v1/groups/users/add`,
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

/**
 * Create group
 * @param {String} name The name of the group
 * @param {String} description The description of the group
 * @param {String} authToken The authorization token
 */
export const createGroup = (name, description, authToken) => {
  return new Promise(function (resolve, reject) {
    const request = client.post(
      `api/v1/groups/group`,
      {
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

/**
 * Delete group
 * @param {String} groupId The group to be deleted
 * @param {String} defaultGroupId The default group all the users will be moved to
 * @param {String} authToken The authentication token
 */
export const deleteGroup = (groupId, defaultGroupId, authToken) => {
  return new Promise(function (resolve, reject) {
    const request = client.delete(`api/v1/groups/delete`, {
      headers: { authorization: authToken },
      data: {
        id: groupId,
        defaultGroupId: defaultGroupId,
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
};

/**
 * Get all permissions
 * @param {String} authToken The authentication token
 */
export const getAllPermissions = (authToken) => {
  return new Promise(function (resolve, reject) {
    const request = client.get(`api/v1/groups/permissions/getAllPermissions`, {
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
 * Get group by Id
 * @param {String} groupId The group Id
 * @param {String} authToken The authentication token
 */
export const getGroupById = (groupId, authToken) => {
  return new Promise(function (resolve, reject) {
    const request = client.get(`api/v1/groups/group/${groupId}`, {
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
 * Get groups for current tenant
 * @param {String} authToken The authentication token
 */
export const getGroups = (authToken) => {
  return new Promise(function (resolve, reject) {
    const request = client.get(`api/v1/groups/`, {
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
    const request = client.get(`api/v1/groups/users/getuserpermissions`, {
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
    const request = client.post(
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
    const request = client.post(
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
    const request = client.put(
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
 * @param {String} name The updated name of the group
 * @param {String} description The updated description of the group
 * @param {String} authToken The authentication token
 */
export const updateGroup = (groupId, name, description, authToken) => {
  return new Promise(function (resolve, reject) {
    const request = client.patch(
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

export default {
  addPermissionsToGroup: addPermissionsToGroup,
  addUsersToGroup: addUsersToGroup,
  createGroup: createGroup,
  deleteGroup: deleteGroup,
  getAllPermissions: getAllPermissions,
  getGroupById: getGroupById,
  getGroups: getGroups,
  getUserPermissions: getUserPermissions,
  removePermissionsFromGroup: removePermissionsFromGroup,
  removeUsersFromGroup: removeUsersFromGroup,
  setDefault: setDefault,
  updateGroup: updateGroup,
};
