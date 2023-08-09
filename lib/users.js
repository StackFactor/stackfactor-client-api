import { client } from "./axiosClient";
const { removeNullProperties } = require("./utils");

/**
 * Add a new API Token
 * @param {Date} expiration Expiration date of the token
 * @param {String} authToken Authorization token
 */
export const addAPIToken = (name, expiration, authToken) => {
  return new Promise(function (resolve, reject) {
    const requestData = removeNullProperties({
      name: name,
      expiration: expiration,
    });
    const addTokenRequest = client.post(
      `api/v1/users/addapitoken`,
      requestData,
      {
        headers: { authorization: authToken },
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
 */
export const confirmEmailAddress = (validationCode) => {
  return new Promise(function (resolve, reject) {
    const requestData = removeNullProperties({
      validationCode: validationCode,
    });
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
 * Create a new account (tenant). It returns a promise
 * @param {String} email User's email address
 * @param {String} firstName User's first name
 * @param {String} lastName User's last name
 * @param {String} password User's password
 * @param {String} subSite Subsite where the new account will be created
 * @param {String} inviteCode Invitation code received in advance from one of the account owners
 * @param
 */
export const createAccount = (
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
      const signupData = removeNullProperties({
        email: email,
        firstName: firstName,
        inviteCode: inviteCode,
        lastName: lastName,
        password: password,
        subSite: subSite,
      });
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
 */
export const createUserAccount = (
  email,
  firstName,
  lastName,
  password,
  token
) => {
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
      const signupData = removeNullProperties({
        email: email,
        firstName: firstName,
        lastName: lastName,
        password: password,
        token: token,
      });
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
 */
export const deleteAPIToken = (token, authToken) => {
  return new Promise(function (resolve, reject) {
    const deleteTokenRequest = client.delete(
      `api/v1/users/user/token`,
      removeNullProperties({
        headers: { authorization: authToken },
        data: {
          token: token,
        },
      })
    );
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
 * @param {String} authToken Authorization token
 */
export const deleteUsers = (userIds, authToken) => {
  return new Promise(function (resolve, reject) {
    const deleteTokenRequest = client.delete(
      `api/v1/users/`,
      removeNullProperties({
        headers: { authorization: authToken },
        data: {
          userIds: userIds,
        },
      })
    );
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
 * @param {String} authToken Authorization token
 */
export const getAPITokens = (authToken) => {
  return new Promise(function (resolve, reject) {
    const getTokensRequest = client.get(`api/v1/users/getapitokens`, {
      headers: { authorization: authToken },
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
 */
export const getUserById = (id) => {
  return new Promise(function (resolve, reject) {
    const getUserInformationRequest = client.get(`api/v1/users/user/${id}`);
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
 */
export const getUserInformation = (userId, category, token) => {
  return new Promise(function (resolve, reject) {
    let confirmationRequest = client.get(
      `api/v1/users/user/${userId ? userId : 0}/${category ? category : "*"}`,
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
 */
export const getUsers = (filter, fields, token) => {
  return new Promise(function (resolve, reject) {
    const requestData = removeNullProperties({
      filter: filter,
      fields: fields,
    });
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
 * @param {String} token Authorization token
 */
export const inviteUsers = (invitees, authToken) => {
  return new Promise(function (resolve, reject) {
    const requestData = removeNullProperties({
      invitees: invitees,
      token: authToken,
    });
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
 * @param {boolean} rememberMe Set to true if the user wants his account to be saved on the current machine
 */
export const login = (email, password, rememberMe) => {
  return new Promise(function (resolve, reject) {
    const requestData = removeNullProperties({
      email: email,
      password: password,
      rememberMe: rememberMe,
    });
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
 * Logout from the server. It returns a promise
 * @param {String} token Authorization token
 */
export const logout = (token) => {
  return new Promise(function (resolve, reject) {
    const options = removeNullProperties({
      headers: { authorization: token },
    });
    let request = client.post("api/v1/auth/logout", {}, options);
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
 */
export const refreshToken = (token) => {
  return new Promise(function (resolve, reject) {
    let options = removeNullProperties({ headers: { Authorization: token } });
    let request = client.post("api/v1/auth/refreshToken", {}, options);
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
 */
export const removeAPIToken = (id, authToken) => {
  return new Promise(function (resolve, reject) {
    const requestData = removeNullProperties({
      id: id,
    });
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
 */
export const resendInvitationEmails = (invitees, authToken) => {
  return new Promise(function (resolve, reject) {
    const requestData = removeNullProperties({
      invitees: invitees,
      token: authToken,
    });
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
 */
export const resetPassword = (email, code, password) => {
  return new Promise(function (resolve, reject) {
    let postData = removeNullProperties({
      email: email,
      code: code,
      password: password,
    });
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
 */
export const sendPasswordResetNotification = (email) => {
  return new Promise(function (resolve, reject) {
    let postData = removeNullProperties({
      email: email,
    });
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
 */
export const setUserInformation = (userId, category, data, token) => {
  return new Promise(function (resolve, reject) {
    const requestData = removeNullProperties({
      data: category ? { category: { ...data } } : data,
      userId: userId,
    });
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
 */
export const updateUserEmail = (email, password, token) => {
  return new Promise(function (resolve, reject) {
    const requestData = removeNullProperties({
      email: email,
      password: password,
    });
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
 */
export const updateUserGroups = (userId, groups, token) => {
  return new Promise(function (resolve, reject) {
    const requestData = removeNullProperties({
      userId: userId,
      groups: groups ? groups : [],
    });
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
 */
export const updateUserPassword = (password, newPassword, token) => {
  return new Promise(function (resolve, reject) {
    const requestData = removeNullProperties({
      password: password,
      newPassword: newPassword,
    });
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
 */
export const validateResetPasswordCode = (email, code) => {
  return new Promise(function (resolve, reject) {
    let postData = removeNullProperties({
      email: email,
      code: code,
    });
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
  addAPIToken: addAPIToken,
  confirmEmailAddress: confirmEmailAddress,
  createAccount: createAccount,
  createUserAccount: createUserAccount,
  deleteAPIToken: deleteAPIToken,
  deleteUsers: deleteUsers,
  getAPITokens: getAPITokens,
  getUserById: getUserById,
  getUserInformation: getUserInformation,
  getUsers: getUsers,
  inviteUsers: inviteUsers,
  login: login,
  logout: logout,
  refreshToken: refreshToken,
  removeAPIToken: removeAPIToken,
  resendInvitationEmails: resendInvitationEmails,
  resetPassword: resetPassword,
  sendPasswordResetNotification: sendPasswordResetNotification,
  setUserInformation: setUserInformation,
  updateUserEmail: updateUserEmail,
  updateUserGroups: updateUserGroups,
  updateUserPassword: updateUserPassword,
  validateResetPasswordCode: validateResetPasswordCode,
};
