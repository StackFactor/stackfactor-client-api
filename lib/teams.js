const axios = require("./axios");

module.exports = {
  axios: axios,

  /**
   * Add users to team
   * @param {String} teamId The team Id
   * @param {Array<String>} users The users to be added
   * @param {String} authToken - Authentication token
   */
  addUsersToTeam: (teamId, users, authToken) => {
    return new Promise(function (resolve, reject) {
      const request = axios.post(
        `api/v1/teams/users/add`,
        {
          teamId: teamId,
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
   * Create team
   * @param {String} name The name of the team
   * @param {String} managerId The id of the manager
   * @param {String} description The description of the team
   * @param {String} authToken The authorization token
   */
  createTeam: (name, managerId, description, authToken) => {
    return new Promise(function (resolve, reject) {
      const request = axios.post(
        `api/v1/teams/team`,
        {
          name: name,
          managerId: managerId,
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
   * Delete team
   * @param {String} teamId The team to be deleted
   * @param {String} defaultTeamId The default team all the users will be moved to
   * @param {String} authToken The authentication token
   */
  deleteTeam: (teamId, defaultTeamId, authToken) => {
    return new Promise(function (resolve, reject) {
      const request = axios.delete(`api/v1/teams/delete`, {
        headers: { authorization: authToken },
        data: {
          id: teamId,
          defaultTeamId: defaultTeamId,
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
   * Get team by Id
   * @param {String} teamId The team Id
   * @param {Boolean} includeUserSummaryInformation True if request to load user summary information
   * @param {String} authToken The authentication token
   */
  getTeamById: (teamId, includeUserSummaryInformation, authToken) => {
    return new Promise(function (resolve, reject) {
      const request = axios.post(
        `api/v1/teams/team/${teamId}`,
        {
          includeUserSummaryInformation: includeUserSummaryInformation,
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
   * Get team roles
   * @param {String} teamId The team Id
   * @param {String} authToken The authentication token
   */
  getTeamByIdRoles: (teamId, authToken) => {
    return new Promise(function (resolve, reject) {
      const request = axios.get(`api/v1/teams/getroles/${teamId}`, {
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
   * Get teams for current tenant
   * @param {String} userId
   * @param {String} authToken The authentication token
   */
  getTeams: (authToken) => {
    return new Promise(function (resolve, reject) {
      const request = axios.get(`api/v1/teams/`, {
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
   * Get the team for the selected user
   * @param {String} userId
   * @param {Boolean} includeUserSummaryInformation True if request to load user summary information
   * @param {String} authToken The authentication token
   */
  getTeamByUserId: (userId, includeUserSummaryInformation, authToken) => {
    return new Promise(function (resolve, reject) {
      const request = axios.post(
        `/api/v1/teams/getuserteam/${userId ? userId : ""}`,
        {
          includeUserSummaryInformation: includeUserSummaryInformation,
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
   * Get top team in the organization, usually the executive team
   * @param {Boolean} includeUserSummaryInformation True if request to load user summary information
   * @param {String} authToken The authentication token
   */
  getTopTeam: (includeUserSummaryInformation, authToken) => {
    return new Promise(function (resolve, reject) {
      const request = axios.post(
        `api/v1/teams/gettopteam`,
        {
          includeUserSummaryInformation: includeUserSummaryInformation,
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
   * Remove users from team
   * @param {String} teamId The team Id
   * @param {Array<String>} users The users to be removed from the team
   * @param {String} authToken The authentication token
   */
  removeUsersFromTeam: (teamId, users, authToken) => {
    return new Promise(function (resolve, reject) {
      const request = axios.post(
        `api/v1/teams/users/remove/`,
        {
          teamId: teamId,
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
   * Set team as defualt
   * @param {String} teamId The team Id
   * @param {String} authToken The authentication token
   */
  setDefault: (teamId, authToken) => {
    return new Promise(function (resolve, reject) {
      const request = axios.put(
        `api/v1/teams/setDefault/`,
        {
          id: teamId,
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
   * Update team
   * @param {String} teamId The team Id
   * @param {String} data The updated name of the team
   * @param {String} authToken The authentication token
   */
  updateTeam: (teamId, data, authToken) => {
    return new Promise(function (resolve, reject) {
      const request = axios.patch(
        `api/v1/teams/team/`,
        {
          id: teamId,
          data: data,
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
