/* eslint-disable no-undef */
import { client } from "./axiosClient.js";

/**
 * Add a new API Token
 * @param {Date} expiration Expiration date of the token
 * @param {String} token Authorization token
 * @returns {Promise}
 */
const addAPIToken = (name, expiration, token) => {
  return new Promise(function (resolve, reject) {
    const requestData = {
      name: name,
      expiration: expiration,
    };
    const addTokenRequest = client.post(
      `api/v1/users/addapitoken`,
      requestData,
      {
        headers: { authorization: token },
      }
    );
    addTokenRequest
      .then((result) => {
        if (result != null) {
          resolve(result.data);
        } else {
          reject(process.env.ERROR_INVALID_INFORMATION);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};

/**
 * Confirm email address
 * @param {String} validationCode The code was provided to the user in advance by email
 * @returns {Promise}
 */
const confirmEmailAddress = (validationCode) => {
  return new Promise(function (resolve, reject) {
    const requestData = {
      validationCode: validationCode,
    };
    const confirmationRequest = client.post(
      "api/v1/users/confirmEmail",
      requestData
    );
    confirmationRequest
      .then(() => {
        resolve();
      })
      .catch((error) => {
        reject(error);
      });
  });
};

/**
 * Confirm phone number
 * @param {String} validationCode The code was provided to the user in advance by email
 * @param {String} token Authorization token
 * @returns {Promise}
 */
const confirmPhone = (validationCode, token) => {
  return new Promise(function (resolve, reject) {
    const requestData = {
      validationCode: validationCode,
    };
    const confirmationRequest = client.post(
      "api/v1/users/confirmPhone",
      requestData,
      {
        headers: { authorization: token },
      }
    );
    confirmationRequest
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

/**
 * Generate confirmation code
 * @param {String} phoneNumber Send confirmation code to the phone number
 * @param {String} token Authorization token
 * @returns {Promise}
 */
const confirmPhoneGenerateCode = (phoneNumber, token) => {
  return new Promise(function (resolve, reject) {
    const requestData = {
      phoneNumber: phoneNumber,
    };
    const confirmationRequest = client.post(
      "api/v1/users/confirmPhoneGenerateCode",
      requestData,
      {
        headers: { authorization: token },
      }
    );
    confirmationRequest
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

/**
 * Create a new account (tenant). It returns a promise
 * @param {String} email User's email address
 * @param {String} firstName User's first name
 * @param {String} lastName User's last name
 * @param {String} password User's password
 * @param {String} subSite Subsite where the new account will be created
 * @param {String} inviteCode Invitation code received in advance from one of the account owners
 * @returns {Promise}
 */
const createAccount = (
  email,
  firstName,
  lastName,
  password,
  subSite,
  inviteCode
) => {
  return new Promise(function (resolve, reject) {
    if (
      email.trim() === "" ||
      firstName.trim() === "" ||
      lastName.trim() === "" ||
      password.trim() === "" ||
      subSite.trim() === "" ||
      inviteCode.trim() === ""
    ) {
      reject(process.env.ERROR_EMPTY_FIELDS);
    } else {
      const signupData = {
        email: email,
        firstName: firstName,
        inviteCode: inviteCode,
        lastName: lastName,
        password: password,
        subSite: subSite,
      };
      let request = client.post("api/v1/users/createAccount", signupData);
      request
        .then((result) => {
          resolve(result.data.user);
        })
        .catch((error) => {
          reject(error);
        });
    }
  });
};

/**
 * Create a new user account. It returns a promise
 * @param {String} email User's email address
 * @param {String} firstName User's first name
 * @param {String} lastName User's last name
 * @param {String} password User's password
 * @param {String} token Invitation token provided to the user
 * @returns {Promise}
 */
const createUserAccount = (email, firstName, lastName, password, token) => {
  return new Promise(function (resolve, reject) {
    if (
      email.trim() === "" ||
      firstName.trim() === "" ||
      lastName.trim() === "" ||
      password.trim() === "" ||
      token.trim() === ""
    ) {
      reject(process.env.ERROR_EMPTY_FIELDS);
    } else {
      const signupData = {
        email: email,
        firstName: firstName,
        lastName: lastName,
        password: password,
        token: token,
      };
      let request = client.post("api/v1/users/createUser", signupData);
      request
        .then((result) => {
          resolve(result.data.user);
        })
        .catch((error) => {
          reject(error);
        });
    }
  });
};

/**
 * Delete an existing API token
 * @param {String} token Expiration date of the token
 * @param {String} authToken Authorization token
 * @returns {Promise}
 */
const deleteAPIToken = (token, authToken) => {
  return new Promise(function (resolve, reject) {
    const deleteTokenRequest = client.delete(`api/v1/users/user/token`, {
      headers: { authorization: authToken },

      data: {
        token: token,
      },
    });
    deleteTokenRequest
      .then(() => {
        resolve(token);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

/**
 * Delete existing users
 * @param {Array<String>} userIds The ID of the users to be deleted
 * @param {String} token Authorization token
 * @returns {Promise}
 */
const deleteUsers = (userIds, token) => {
  return new Promise(function (resolve, reject) {
    const deleteTokenRequest = client.delete(`api/v1/users/`, {
      headers: { authorization: token },

      data: {
        userIds: userIds,
      },
    });
    deleteTokenRequest
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

/**
 * Get all the API tokens
 * @param {String} token Authorization token
 * @returns {Promise}
 */
const getAPITokens = (token) => {
  return new Promise(function (resolve, reject) {
    const getTokensRequest = client.get(`api/v1/users/getapitokens`, {
      headers: { authorization: token },
    });
    getTokensRequest
      .then((result) => {
        resolve(result.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

/**
 * Get the specified user account by Id. It returns a promise
 * @param {String} id Id of the user for which information is being requested
 * @param {String} token Authorization token
 * @returns {Promise}
 */
const getUserById = (id, token) => {
  return new Promise(function (resolve, reject) {
    const getUserInformationRequest = client.get(`api/v1/users/user/${id}`, {
      headers: { authorization: token },
    });
    getUserInformationRequest
      .then((result) => {
        if (result != null) {
          resolve(result.data.user);
        } else {
          reject(process.env.ERROR_INVALID_INFORMATION);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};

/**
 * Get user information
 * @param {String} userId User Id
 * @param {String} category User information category
 * @param {String} token Authorization token
 * @returns {Promise}
 */
const getUserInformation = (userId, category, token) => {
  return new Promise(function (resolve, reject) {
    let confirmationRequest = client.get(
      `api/v1/users/user/${userId || 0}/${category || "*"}`,
      {
        headers: { authorization: token },
      }
    );
    confirmationRequest
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

/**
 * Get the list of users
 * @param {Object} filter Filter to select the users. Ex: {firstName : "John"}
 * @param {Array} fields Fields to be loaded. Ex: ["firstName"]
 * @param {String} token Authorization token
 * @returns {Promise}
 */
const getUsers = (filter, fields, token) => {
  return new Promise(function (resolve, reject) {
    const requestData = {
      filter: filter,
      fields: fields,
    };
    let confirmationRequest = client.post(`api/v1/users/`, requestData, {
      headers: { authorization: token },
    });
    confirmationRequest
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

/**
 * Invite other users to join the same account
 * @param {Array<String>} invitees List of emails of the invitees
 * @param {String} groupId The group the user should be added to
 * @param {String} teamId The team the user should be added to
 * @param {String} token Authorization token
 * @returns {Promise}
 */
const inviteUsers = (invitees, groupId, teamId, authToken) => {
  return new Promise(function (resolve, reject) {
    const requestData = {
      invitees: invitees,
      groupId: groupId,
      teamId: teamId,
      token: authToken,
    };
    let request = client.post("api/v1/users/invite", requestData, {
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
 * Login using email and password. It returns a promise
 * @param {String} email User's email address
 * @param {String} password User's password
 * @returns {Promise}
 */
const login = (email, password) => {
  return new Promise(function (resolve, reject) {
    const requestData = {
      email: email,
      password: password,
    };
    let request = client.post("api/v1/auth/login", requestData);
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
 * Login callback after authentication to exchange the code token for authentication and refresh tokens
 * @param {String} code
 * @param {String} redirectUri
 * @returns {Promise}
 */
const loginExchangeKeys = (code, redirectUri) => {
  return new Promise(function (resolve, reject) {
    const requestData = {
      code: code,
      redirectUri: redirectUri,
    };
    let request = client.post("api/v1/auth/loginexchangekeys", requestData);
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
 * Logout from the server. It returns a promise
 * @param {String} token Authorization token
 * @returns {Promise}
 */
const logout = (token) => {
  return new Promise(function (resolve, reject) {
    let request = client.post(
      "api/v1/auth/logout",
      {},
      {
        headers: { authorization: token },
      }
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
 * Checks the current auth token and maintain it alive. It returns a promise. In case the token is invalid
 * a new token can be restablished using login
 * @param {String} token  User's auth token to be refreshed
 * @returns {Promise}
 */
const refreshToken = (refreshToken) => {
  return new Promise(function (resolve, reject) {
    let request = client.post("api/v1/auth/refreshToken", {
      refreshToken: refreshToken,
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
 * Remove an existing API token
 * @param {String} id The ID of the token to be removed
 * @param {String} authToken Authorization token
 * @returns {Promise}
 */
const removeAPIToken = (id, authToken) => {
  return new Promise(function (resolve, reject) {
    const requestData = {
      id: id,
    };
    const removeTokenRequest = client.post(
      `api/v1/users/removeapitoken`,
      requestData,
      {
        headers: { authorization: authToken },
      }
    );
    removeTokenRequest
      .then(() => {
        resolve(id);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

/**
 * Resend invitation emails
 * @param {Array<String>} invitees List of emails of the invitees
 * @param {String} token Authorization token
 * @returns {Promise}
 */
const resendInvitationEmails = (invitees, authToken) => {
  return new Promise(function (resolve, reject) {
    const requestData = {
      invitees: invitees,
      token: authToken,
    };
    let request = client.post("api/v1/users/resendinvite", requestData, {
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
 * Reset the password. It returns a promise
 * @param {String} code Code provided to the user by email
 * @param {String} email User's email address
 * @param {String} password User's new password
 * @returns {Promise}
 */
const resetPassword = (email, code, password) => {
  return new Promise(function (resolve, reject) {
    let postData = {
      email: email,
      code: code,
      password: password,
    };
    let request = client.post("api/v1/users/resetpassword", postData);
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
 * Send an email to the user indicated by the email address to reset the password. It returns a promise
 * @param {String} email Email of the user who needs to reset the password
 * @returns {Promise}
 */
const sendPasswordResetNotification = (email) => {
  return new Promise(function (resolve, reject) {
    let postData = {
      email: email,
    };
    let request = client.post(
      "api/v1/users/sendpasswordresetnotification",
      postData
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
 * Set user profile information
 * @param {String} userId User Id
 * @param {String} category User information category
 * @param {String} data New or updated user data information
 * @param {Object} token Authorization token
 * @returns {Promise}
 */
const setUserInformation = (userId, category, data, token) => {
  return new Promise(function (resolve, reject) {
    const requestData = {
      data: category ? { [category]: data } : data,
      userId: userId,
    };
    let confirmationRequest = client.post("api/v1/users/user", requestData, {
      headers: { authorization: token },
    });
    confirmationRequest
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

/**
 * Update user email
 * @param {String} email The new email address
 * @param {String} password The current password
 * @param {String} token Authorization token
 * @returns {Promise}
 */
const updateUserEmail = (email, password, token) => {
  return new Promise(function (resolve, reject) {
    const requestData = {
      email: email,
      password: password,
    };
    let confirmationRequest = client.post(
      "api/v1/users/updateemail",
      requestData,
      {
        headers: { authorization: token },
      }
    );
    confirmationRequest
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

/**
 * Update user groups
 * @param {String} userIds The id of the user
 * @param {Array<String>} groups The id of the groups the user should belong to
 * @param {String} token Authorization token
 * @returns {Promise}
 */
const updateUserGroups = (userId, groups, token) => {
  return new Promise(function (resolve, reject) {
    const requestData = {
      userId: userId,
      groups: groups || [],
    };
    let confirmationRequest = client.post(
      "api/v1/users/user/updategroups",
      requestData,
      {
        headers: { authorization: token },
      }
    );
    confirmationRequest
      .then(() => {
        resolve(requestData);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

/**
 * Update user password
 * @param {String} password The current password
 * @param {String} newPassword The new password
 * @param {String} token Authorization token
 * @returns {Promise}
 */
const updateUserPassword = (password, newPassword, token) => {
  return new Promise(function (resolve, reject) {
    const requestData = {
      password: password,
      newPassword: newPassword,
    };
    let confirmationRequest = client.post(
      "api/v1/users/updatepassword",
      requestData,
      {
        headers: { authorization: token },
      }
    );
    confirmationRequest
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

/**
 * Validate reset password code. It returns a promise
 * @param {String} email User's email address
 * @param {String} code Provided reset code
 * @returns {Promise}
 */
const validateResetPasswordCode = (email, code) => {
  return new Promise(function (resolve, reject) {
    let postData = {
      email: email,
      code: code,
    };
    let request = client.post(
      "api/v1/users/validateresetpasswordcode",
      postData
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
  addAPIToken,
  confirmEmailAddress,
  confirmPhone,
  confirmPhoneGenerateCode,
  createAccount,
  createUserAccount,
  deleteAPIToken,
  deleteUsers,
  getAPITokens,
  getUserById,
  getUserInformation,
  getUsers,
  inviteUsers,
  login,
  loginExchangeKeys,
  logout,
  refreshToken,
  removeAPIToken,
  resendInvitationEmails,
  resetPassword,
  sendPasswordResetNotification,
  setUserInformation,
  updateUserEmail,
  updateUserGroups,
  updateUserPassword,
  validateResetPasswordCode,
};
