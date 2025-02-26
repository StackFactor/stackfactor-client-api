import { client } from "./axiosClient.js";

/**
 * Add users to team
 * @param {String} teamId The team Id
 * @param {Array<String>} users The users to be added
 * @param {String} authToken - Authentication token
 * @returns {Promise<Object>}
 */
const addUsersToTeam = (
  teamId: string,
  users: string[],
  authToken: string
): Promise<object> => {
  return new Promise((resolve, reject) => {
    const request = client.post(
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
};

/**
 * Create team
 * @param {String} name The name of the team
 * @param {String} managerId The id of the manager
 * @param {String} description The description of the team
 * @param {String} authToken The authorization token
 * @returns {Promise<Object>}
 */
const createTeam = (
  name: string,
  managerId: string,
  description: string,
  authToken: string
): Promise<object> => {
  return new Promise((resolve, reject) => {
    const request = client.post(
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
};

/**
 * Delete team
 * @param {String} teamId The team to be deleted
 * @param {String} defaultTeamId The default team all the users will be moved to
 * @param {String} authToken The authentication token
 * @returns {Promise<Object>}
 */
const deleteTeam = (
  teamId: string,
  defaultTeamId: string,
  authToken: string
): Promise<object> => {
  return new Promise((resolve, reject) => {
    const request = client.delete(`api/v1/teams/delete`, {
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
};

/**
 * Get team by Id
 * @param {String} teamId The team Id
 * @param {Boolean} includeUserSummaryInformation True if request to load user summary information
 * @param {String} authToken The authentication token
 * @returns {Promise<Object>}
 */
const getTeamById = (
  teamId: string,
  includeUserSummaryInformation: boolean,
  authToken: string
): Promise<object> => {
  return new Promise((resolve, reject) => {
    const request = client.post(
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
};

/**
 * Get team roles
 * @param {String} teamId The team Id
 * @param {String} authToken The authentication token
 * @returns {Promise<Object>}
 */
const getTeamByIdRoles = (
  teamId: string,
  authToken: string
): Promise<object> => {
  return new Promise((resolve, reject) => {
    const request = client.get(`api/v1/teams/getroles/${teamId}`, {
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
 * Get teams for current tenant
 * @param {String} authToken The authentication token
 * @returns {Promise<Object>}
 */
const getTeams = (authToken: string): Promise<object> => {
  return new Promise((resolve, reject) => {
    const request = client.get(`api/v1/teams/`, {
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
 * Get the team for the selected user
 * @param {String} userId
 * @param {Boolean} includeUserSummaryInformation True if request to load user summary information
 * @param {String} authToken The authentication token
 * @returns {Promise<Object>}
 */
const getTeamByUserId = (
  userId: string,
  includeUserSummaryInformation: boolean,
  authToken: string
): Promise<object> => {
  return new Promise((resolve, reject) => {
    const request = client.post(
      `/api/v1/teams/getuserteam/${userId || ""}`,
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
};

/**
 * Get top team in the organization, usually the executive team
 * @param {Boolean} includeUserSummaryInformation True if request to load user summary information
 * @param {String} authToken The authentication token
 * @returns {Promise<Object>}
 */
const getTopTeam = (
  includeUserSummaryInformation: boolean,
  authToken: string
): Promise<object> => {
  return new Promise((resolve, reject) => {
    const request = client.post(
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
};

/**
 * Remove users from team
 * @param {String} teamId The team Id
 * @param {Array<String>} users The users to be removed from the team
 * @param {String} authToken The authentication token
 * @returns {Promise<Object>}
 */
const removeUsersFromTeam = (
  teamId: string,
  users: string[],
  authToken: string
): Promise<object> => {
  return new Promise((resolve, reject) => {
    const request = client.post(
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
};

/**
 * Set team as default
 * @param {String} teamId The team Id
 * @param {String} authToken The authentication token
 * @returns {Promise<Object>}
 */
const setDefault = (teamId: string, authToken: string): Promise<object> => {
  return new Promise((resolve, reject) => {
    const request = client.put(
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
};

/**
 * Update team
 * @param {String} teamId The team Id
 * @param {Object} data The updated data of the team
 * @param {String} authToken The authentication token
 * @returns {Promise<Object>}
 */
const updateTeam = (
  teamId: string,
  data: object,
  authToken: string
): Promise<object> => {
  return new Promise((resolve, reject) => {
    const request = client.patch(
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
};

export default {
  addUsersToTeam,
  createTeam,
  deleteTeam,
  getTeamById,
  getTeamByIdRoles,
  getTeams,
  getTeamByUserId,
  getTopTeam,
  removeUsersFromTeam,
  setDefault,
  updateTeam,
};
