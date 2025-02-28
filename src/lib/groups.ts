import { AxiosError, AxiosResponse } from "axios";
import { client } from "./axiosClient";

/**
 * Add permissions to group
 * @param {String} groupId The group Id
 * @param {Array<String>} permissions The permissions to be added
 * @param {String} authToken - Authentication token
 * @returns {Promise<object>}
 */
const addPermissionsToGroup = (
  groupId: string,
  permissions: string[],
  authToken: string
): Promise<object> => {
  return new Promise((resolve, reject) => {
    const request = client.post(
      `api/v1/groups/permissions/add`,
      {
        groupId: groupId,
        permissions: permissions,
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
 * Add users to group
 * @param {String} groupId The group Id
 * @param {Array<String>} users The users to be added
 * @param {String} authToken - Authentication token
 * @returns {Promise<object>}
 */
const addUsersToGroup = (
  groupId: string,
  users: string[],
  authToken: string
): Promise<object> => {
  return new Promise((resolve, reject) => {
    const request = client.post(
      `api/v1/groups/users/add`,
      {
        groupId: groupId,
        users: users,
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
 * Create group
 * @param {String} name The name of the group
 * @param {String} description The description of the group
 * @param {String} authToken The authorization token
 * @returns {Promise<object>}
 */
const createGroup = (
  name: string,
  description: string,
  authToken: string
): Promise<object> => {
  return new Promise((resolve, reject) => {
    const request = client.post(
      `api/v1/groups/group`,
      {
        name: name,
        description: description,
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
 * Delete group
 * @param {String} groupId The group to be deleted
 * @param {String} defaultGroupId The default group all the users will be moved to
 * @param {String} authToken The authentication token
 * @returns {Promise<object>}
 */
const deleteGroup = (
  groupId: string,
  defaultGroupId: string,
  authToken: string
): Promise<object> => {
  return new Promise((resolve, reject) => {
    const request = client.delete(`api/v1/groups/delete`, {
      headers: { authorization: authToken },
      data: {
        id: groupId,
        defaultGroupId: defaultGroupId,
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

/**
 * Get all permissions
 * @param {String} authToken The authentication token
 * @returns {Promise<object>}
 */
const getAllPermissions = (authToken: string): Promise<object> => {
  return new Promise((resolve, reject) => {
    const request = client.get(`api/v1/groups/permissions/getAllPermissions`, {
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
 * Get group by Id
 * @param {String} groupId The group Id
 * @param {String} authToken The authentication token
 * @returns {Promise<object>}
 */
const getGroupById = (groupId: string, authToken: string): Promise<object> => {
  return new Promise((resolve, reject) => {
    const request = client.get(`api/v1/groups/group/${groupId}`, {
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
 * Get groups for current tenant
 * @param {String} authToken The authentication token
 * @returns {Promise<object>}
 */
const getGroups = (authToken: string): Promise<object> => {
  return new Promise((resolve, reject) => {
    const request = client.get(`api/v1/groups/`, {
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
 * Get current user permissions
 * @param {String} authToken The authentication token
 * @returns {Promise<object>}
 */
const getUserPermissions = (authToken: string): Promise<object> => {
  return new Promise((resolve, reject) => {
    const request = client.get(`api/v1/groups/users/getuserpermissions`, {
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
 * Remove permissions from group
 * @param {String} groupId The group Id
 * @param {Array<String>} permissions The permissions to be removed from the group
 * @param {String} authToken The authentication token
 * @returns {Promise<object>}
 */
const removePermissionsFromGroup = (
  groupId: string,
  permissions: string[],
  authToken: string
): Promise<object> => {
  return new Promise((resolve, reject) => {
    const request = client.post(
      `api/v1/groups/permissions/remove/`,
      {
        groupId: groupId,
        permissions: permissions,
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
 * Remove users from group
 * @param {String} groupId The group Id
 * @param {Array<String>} users The users to be removed from the group
 * @param {String} authToken The authentication token
 * @returns {Promise<object>}
 */
const removeUsersFromGroup = (
  groupId: string,
  users: string[],
  authToken: string
): Promise<object> => {
  return new Promise((resolve, reject) => {
    const request = client.post(
      `api/v1/groups/users/remove/`,
      {
        groupId: groupId,
        users: users,
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
 * Set group as default
 * @param {String} groupId The group Id
 * @param {String} authToken The authentication token
 * @returns {Promise<object>}
 */
const setDefault = (groupId: string, authToken: string): Promise<object> => {
  return new Promise((resolve, reject) => {
    const request = client.put(
      `api/v1/groups/setDefault/`,
      {
        id: groupId,
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
 * Update group
 * @param {String} groupId The group Id
 * @param {String} name The updated name of the group
 * @param {String} description The updated description of the group
 * @param {String} authToken The authentication token
 * @returns {Promise<object>}
 */
const updateGroup = (
  groupId: string,
  name: string,
  description: string,
  authToken: string
): Promise<object> => {
  return new Promise((resolve, reject) => {
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
      .then((response : AxiosResponse) => {
        resolve(response.data);
      })
      .catch((error : AxiosError) => {
        reject(error);
      });
  });
};

export default {
  addPermissionsToGroup,
  addUsersToGroup,
  createGroup,
  deleteGroup,
  getAllPermissions,
  getGroupById,
  getGroups,
  getUserPermissions,
  removePermissionsFromGroup,
  removeUsersFromGroup,
  setDefault,
  updateGroup,
};
