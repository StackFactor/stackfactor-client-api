import { axios } from "./axiosClient";

module.exports = {
  axios: axios,

  /**
   * Add permissions to group
   * @param {String} groupId The group Id
   * @param {Array<String>} permissions The permissions to be added
   * @param {String} authToken - Authentication token
   */
  addPermissionsToGroup: (groupId, permissions, authToken) => {
    return new Promise(function (resolve, reject) {
      const request = axios.post(
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
  },

  /**
   * Add users to group
   * @param {String} groupId The group Id
   * @param {Array<String>} users The users to be added
   * @param {String} authToken - Authentication token
   */
  addUsersToGroup: (groupId, users, authToken) => {
    return new Promise(function (resolve, reject) {
      const request = axios.post(
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
  },

  /**
   * Create group
   * @param {String} name The name of the group
   * @param {String} description The description of the group
   * @param {String} authToken The authorization token
   */
  createGroup: (name, description, authToken) => {
    return new Promise(function (resolve, reject) {
      const request = axios.post(
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
  },

  /**
   * Delete group
   * @param {String} groupId The group to be deleted
   * @param {String} defaultGroupId The default group all the users will be moved to
   * @param {String} authToken The authentication token
   */
  deleteGroup: (groupId, defaultGroupId, authToken) => {
    return new Promise(function (resolve, reject) {
      const request = axios.delete(`api/v1/groups/delete`, {
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
  },

  /**
   * Get all permissions
   * @param {String} authToken The authentication token
   */
  getAllPermissions: (authToken) => {
    return new Promise(function (resolve, reject) {
      const request = axios.get(`api/v1/groups/permissions/getAllPermissions`, {
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
   * Get group by Id
   * @param {String} groupId The group Id
   * @param {String} authToken The authentication token
   */
  getGroupById: (groupId, authToken) => {
    return new Promise(function (resolve, reject) {
      const request = axios.get(`api/v1/groups/group/${groupId}`, {
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
   * Get groups for current tenant
   * @param {String} authToken The authentication token
   */
  getGroups: (authToken) => {
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
  },

  /**
   * Get current user permissions
   * @param {String} authToken The authentication token
   */
  getUserPermissions: (authToken) => {
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
  },

  /**
   * Build in permissions
   */
  permissions: {
    ADMIN_AUTHOR_CONTENT: "5ea3d1152839450e16e72bba",
    ADMIN_PROMOTE_CONTENT: "5ea3d10bea252025c8ec351b",
    ADMIN_MANAGE_CONTENT_PROVIDERS: "61970935cee185acf08111f6",
    AUTHOR_CONTENT: "5fac210560e43de7c6b4a208",
    MANAGE_BILLING: "5e1570cd03f676213bfdcd08",
    MANAGE_CONTENT_PROVIDERS: "5f0fa12f16a720fde58ea820",
    MANAGE_GROUPS: "5dd612fe59e518ac87b8cf8e",
    MANAGE_OWN_PROFILE_INFORMATION_AUTO_APP: "5fac210e7e6539d37a897c94",
    MANAGE_ORGANIZATION_INFORMATION: "5dd612d5338ea9a6ae6326da",
    MANAGE_OWN_SKILL_SET_AUTO_APPROVE: "5fac21164351c6727a34cd4e",
    MANAGE_SETTINGS: "5e1570e087d836dc77888a5f",
    MANAGE_TEAM_INFORMATION_AUTO_APPROVE: "5fac211e6c8f874bd7137b98",
    MANAGE_TEAMS: "5dd61314afc2455a89b1a37b",
    MANAGE_USERS: "5dd612e40f0bc559c41a2b29",
    PROMOTE_CONTENT: "5fac2126427ce31f8a92c0cb",
    MANAGE_PLAN_TEMPLATES: "5dd61305a73c68b44c3f0827",
  },
  /**
   * Remove permissions from group
   * @param {String} groupId The group Id
   * @param {Array<String>} permissions The permissions to be removed from the group
   * @param {String} authToken The authentication token
   */
  removePermissionsFromGroup: (groupId, permissions, authToken) => {
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
  },

  /**
   * Remove users from group
   * @param {String} groupId The group Id
   * @param {Array<String>} users The users to be removed from the group
   * @param {String} authToken The authentication token
   */
  removeUsersFromGroup: (groupId, users, authToken) => {
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
  },

  /*
   * Set group as defualt
   * @param {String} groupId The group Id
   * @param {String} authToken The authentication token
   */
  setDefault: (groupId, authToken) => {
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
  },

  /**
   * Update group
   * @param {String} groupId The group Id
   * @param {String} name The updated name of the group
   * @param {String} description The updated description of the group
   * @param {String} authToken The authentication token
   */
  updateGroup: (groupId, name, description, authToken) => {
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
  },
};
