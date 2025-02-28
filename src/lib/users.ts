import { AxiosResponse, AxiosError } from "axios";
import { client } from "./axiosClient";

/**
 * Add a new API Token
 * @param {string} name Name of the token
 * @param {Date} expiration Expiration date of the token
 * @param {string} token Authorization token
 * @returns {Promise<object>}
 */
export const addAPIToken = (name: string, expiration: Date, token: string): Promise<object> => {
  return new Promise((resolve, reject) => {
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
      .catch((error : AxiosError) => {
        reject(error);
      });
  });
};

/**
 * Confirm email address
 * @param {string} validationCode The code was provided to the user in advance by email
 * @returns {Promise<void>}
 */
export const confirmEmailAddress = (validationCode: string): Promise<void> => {
  return new Promise((resolve, reject) => {
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
      .catch((error : AxiosError) => {
        reject(error);
      });
  });
};

/**
 * Confirm phone number
 * @param {string} validationCode The code was provided to the user in advance by email
 * @param {string} token Authorization token
 * @returns {Promise<object>}
 */
export const confirmPhone = (validationCode: string, token: string): Promise<object> => {
  return new Promise((resolve, reject) => {
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
      .then((response : AxiosResponse) => {
        resolve(response.data);
      })
      .catch((error : AxiosError) => {
        reject(error);
      });
  });
};

/**
 * Generate confirmation code
 * @param {string} phoneNumber Send confirmation code to the phone number
 * @param {string} token Authorization token
 * @returns {Promise<object>}
 */
export const confirmPhoneGenerateCode = (phoneNumber: string, token: string): Promise<object> => {
  return new Promise((resolve, reject) => {
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
      .then((response : AxiosResponse) => {
        resolve(response.data);
      })
      .catch((error : AxiosError) => {
        reject(error);
      });
  });
};

/**
 * Create a new account (tenant). It returns a promise
 * @param {string} email User's email address
 * @param {string} firstName User's first name
 * @param {string} lastName User's last name
 * @param {string} password User's password
 * @param {string} subSite Subsite where the new account will be created
 * @param {string} inviteCode Invitation code received in advance from one of the account owners
 * @returns {Promise<object>}
 */
export const createAccount = (
  email: string,
  firstName: string,
  lastName: string,
  password: string,
  subSite: string,
  inviteCode: string
): Promise<object> => {
  return new Promise((resolve, reject) => {
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
      const request = client.post("api/v1/users/createAccount", signupData);
      request
        .then((result) => {
          resolve(result.data.user);
        })
        .catch((error : AxiosError) => {
          reject(error);
        });
    }
  });
};

/**
 * Create a new user account. It returns a promise
 * @param {string} email User's email address
 * @param {string} firstName User's first name
 * @param {string} lastName User's last name
 * @param {string} password User's password
 * @param {string} token Invitation token provided to the user
 * @returns {Promise<object>}
 */
export const createUserAccount = (
  email: string,
  firstName: string,
  lastName: string,
  password: string,
  token: string
): Promise<object> => {
  return new Promise((resolve, reject) => {
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
      const request = client.post("api/v1/users/createUser", signupData);
      request
        .then((result) => {
          resolve(result.data.user);
        })
        .catch((error : AxiosError) => {
          reject(error);
        });
    }
  });
};

/**
 * Delete an existing API token
 * @param {string} token Expiration date of the token
 * @param {string} authToken Authorization token
 * @returns {Promise<string>}
 */
export const deleteAPIToken = (token: string, authToken: string): Promise<string> => {
  return new Promise((resolve, reject) => {
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
      .catch((error : AxiosError) => {
        reject(error);
      });
  });
};

/**
 * Delete existing users
 * @param {string[]} userIds The ID of the users to be deleted
 * @param {string} token Authorization token
 * @returns {Promise<object>}
 */
export const deleteUsers = (userIds: string[], token: string): Promise<object> => {
  return new Promise((resolve, reject) => {
    const deleteTokenRequest = client.delete(`api/v1/users/`, {
      headers: { authorization: token },
      data: {
        userIds: userIds,
      },
    });
    deleteTokenRequest
      .then((response : AxiosResponse) => {
        resolve(response.data);
      })
      .catch((error : AxiosError) => {
        reject(error);
      });
  });
};

/**
 * Get all the API tokens
 * @param {string} token Authorization token
 * @returns {Promise<object>}
 */
export const getAPITokens = (token: string): Promise<object> => {
  return new Promise((resolve, reject) => {
    const getTokensRequest = client.get(`api/v1/users/getapitokens`, {
      headers: { authorization: token },
    });
    getTokensRequest
      .then((result) => {
        resolve(result.data);
      })
      .catch((error : AxiosError) => {
        reject(error);
      });
  });
};

/**
 * Get the specified user account by Id. It returns a promise
 * @param {string} id Id of the user for which information is being requested
 * @param {string} token Authorization token
 * @returns {Promise<object>}
 */
export const getUserById = (id: string, token: string): Promise<object> => {
  return new Promise((resolve, reject) => {
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
      .catch((error : AxiosError) => {
        reject(error);
      });
  });
};

/**
 * Get user information
 * @param {string} userId User Id
 * @param {string} category User information category
 * @param {string} token Authorization token
 * @returns {Promise<object>}
 */
export const getUserInformation = (userId: string, category: string, token: string): Promise<object> => {
  return new Promise((resolve, reject) => {
    const confirmationRequest = client.get(
      `api/v1/users/user/${userId || 0}/${category || "*"}`,
      {
        headers: { authorization: token },
      }
    );
    confirmationRequest
      .then((response : AxiosResponse) => {
        resolve(response.data);
      })
      .catch((error : AxiosError) => {
        reject(error);
      });
  });
};

/**
 * Get the list of users
 * @param {object} filter Filter to select the users. Ex: {firstName : "John"}
 * @param {string[]} fields Fields to be loaded. Ex: ["firstName"]
 * @param {string} token Authorization token
 * @returns {Promise<object>}
 */
export const getUsers = (filter: object, fields: string[], token: string): Promise<object> => {
  return new Promise((resolve, reject) => {
    const requestData = {
      filter: filter,
      fields: fields,
    };
    const confirmationRequest = client.post(`api/v1/users/`, requestData, {
      headers: { authorization: token },
    });
    confirmationRequest
      .then((response : AxiosResponse) => {
        resolve(response.data);
      })
      .catch((error : AxiosError) => {
        reject(error);
      });
  });
};

/**
 * Invite other users to join the same account
 * @param {string[]} invitees List of emails of the invitees
 * @param {string} groupId The group the user should be added to
 * @param {string} teamId The team the user should be added to
 * @param {string} authToken Authorization token
 * @returns {Promise<object>}
 */
export const inviteUsers = (invitees: string[], groupId: string, teamId: string, authToken: string): Promise<object> => {
  return new Promise((resolve, reject) => {
    const requestData = {
      invitees: invitees,
      groupId: groupId,
      teamId: teamId,
      token: authToken,
    };
    const request = client.post("api/v1/users/invite", requestData, {
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
 * Login using email and password. It returns a promise
 * @param {string} email User's email address
 * @param {string} password User's password
 * @returns {Promise<object>}
 */
export const login = (email: string, password: string): Promise<object> => {
  return new Promise((resolve, reject) => {
    const requestData = {
      email: email,
      password: password,
    };
    const request = client.post("api/v1/auth/login", requestData);
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
 * Login callback after authentication to exchange the code token for authentication and refresh tokens
 * @param {string} code
 * @param {string} codeVerifier
 * @param {string} redirectUri
 * @returns {Promise<object>}
 */
export const loginExchangeKeys = (code: string, codeVerifier: string, redirectUri: string): Promise<object> => {
  return new Promise((resolve, reject) => {
    const requestData = {
      code: code,
      codeVerifier: codeVerifier,
      redirectUri: redirectUri,
    };
    const request = client.post("api/v1/auth/loginexchangekeys", requestData);
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
 * Logout from the server. It returns a promise
 * @param {string} token Authorization token
 * @returns {Promise<object>}
 */
export const logout = (token: string): Promise<object> => {
  return new Promise((resolve, reject) => {
    const request = client.post(
      "api/v1/auth/logout",
      {},
      {
        headers: { authorization: token },
      }
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
 * Checks the current auth token and maintain it alive. It returns a promise. In case the token is invalid
 * a new token can be restablished using login
 * @param {string} refreshToken User's auth token to be refreshed
 * @returns {Promise<object>}
 */
export const refreshToken = (refreshToken: string): Promise<object> => {
  return new Promise((resolve, reject) => {
    const request = client.post("api/v1/auth/refreshToken", {
      refreshToken: refreshToken,
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
 * Remove an existing API token
 * @param {string} id The ID of the token to be removed
 * @param {string} authToken Authorization token
 * @returns {Promise<string>}
 */
export const removeAPIToken = (id: string, authToken: string): Promise<string> => {
  return new Promise((resolve, reject) => {
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
      .catch((error : AxiosError) => {
        reject(error);
      });
  });
};

/**
 * Resend invitation emails
 * @param {string[]} invitees List of emails of the invitees
 * @param {string} authToken Authorization token
 * @returns {Promise<object>}
 */
export const resendInvitationEmails = (invitees: string[], authToken: string): Promise<object> => {
  return new Promise((resolve, reject) => {
    const requestData = {
      invitees: invitees,
      token: authToken,
    };
    const request = client.post("api/v1/users/resendinvite", requestData, {
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
 * Reset the password. It returns a promise
 * @param {string} code Code provided to the user by email
 * @param {string} email User's email address
 * @param {string} password User's new password
 * @returns {Promise<object>}
 */
export const resetPassword = (email: string, code: string, password: string): Promise<object> => {
  return new Promise((resolve, reject) => {
    const postData = {
      email: email,
      code: code,
      password: password,
    };
    const request = client.post("api/v1/users/resetpassword", postData);
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
 * Send email confirmation code
 * @param {string} email
 * @param {string} token
 * @returns {Promise<object>}
 */
export const sendEmailConfirmationCode = (email: string, token: string): Promise<object> => {
  return new Promise((resolve, reject) => {
    const postData = {
      email: email,
    };
    const request = client.post(
      "api/v1/users/sendemailconfirmationcode",
      postData,
      {
        headers: { authorization: token },
      }
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
 * Send an email to the user indicated by the email address to reset the password. It returns a promise
 * @param {string} email Email of the user who needs to reset the password
 * @returns {Promise<object>}
 */
export const sendPasswordResetNotification = (email: string): Promise<object> => {
  return new Promise((resolve, reject) => {
    const postData = {
      email: email,
    };
    const request = client.post(
      "api/v1/users/sendpasswordresetnotification",
      postData
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
 * Set user profile information
 * @param {string} userId User Id
 * @param {string} category User information category
 * @param {object} data New or updated user data information
 * @param {string} token Authorization token
 * @returns {Promise<object>}
 */
export const setUserInformation = (userId: string, category: string, data: object, token: string): Promise<object> => {
  return new Promise((resolve, reject) => {
    const requestData = {
      data: category ? { [category]: data } : data,
      userId: userId,
    };
    const confirmationRequest = client.post("api/v1/users/user", requestData, {
      headers: { authorization: token },
    });
    confirmationRequest
      .then((response: AxiosResponse) => {
        resolve(response.data);
      })
      .catch((error: AxiosError) => {
        reject(error);
      });
  });
};

/**
 * Update user email
 * @param {string} email The new email address
 * @param {string} verificationCode The verification code
 * @param {string} password The current password
 * @param {string} token Authorization token
 * @returns {Promise<object>}
 */
export const updateUserEmail = (
  email: string,
  verificationCode: string,
  password: string,
  token: string
): Promise<object> => {
  return new Promise((resolve, reject) => {
    const requestData = {
      email: email,
      verificationCode: verificationCode,
      password: password,
    };
    const confirmationRequest = client.post(
      "api/v1/users/updateemail",
      requestData,
      {
        headers: { authorization: token },
      }
    );
    confirmationRequest
      .then((response : AxiosResponse) => {
        resolve(response.data);
      })
      .catch((error : AxiosError) => {
        reject(error);
      });
  });
};

/**
 * Update user groups
 * @param {String} userId The id of the user
 * @param {Array<String>} groups The id of the groups the user should belong to
 * @param {String} token Authorization token
 * @returns {Promise<object>}
 */
export const updateUserGroups = (
  userId: string,
  groups: string[],
  token: string
): Promise<object> => {
  return new Promise((resolve, reject) => {
    const requestData = {
      userId: userId,
      groups: groups || [],
    };
    const confirmationRequest = client.post(
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
      .catch((error : AxiosError) => {
        reject(error);
      });
  });
};

/**
 * Update user password
 * @param {String} password The current password
 * @param {String} newPassword The new password
 * @param {String} token Authorization token
 * @returns {Promise<object>}
 */
export const updateUserPassword = (
  password: string,
  newPassword: string,
  token: string
): Promise<object> => {
  return new Promise((resolve, reject) => {
    const requestData = {
      password: password,
      newPassword: newPassword,
    };
    const confirmationRequest = client.post(
      "api/v1/users/updatepassword",
      requestData,
      {
        headers: { authorization: token },
      }
    );
    confirmationRequest
      .then((response : AxiosResponse) => {
        resolve(response.data);
      })
      .catch((error : AxiosError) => {
        reject(error);
      });
  });
};

/**
 * Validate reset password code. It returns a promise
 * @param {String} email User's email address
 * @param {String} code Provided reset code
 * @returns {Promise<object>}
 */
export const validateResetPasswordCode = (
  email: string,
  code: string
): Promise<object> => {
  return new Promise((resolve, reject) => {
    const postData = {
      email: email,
      code: code,
    };
    const request = client.post("api/v1/users/validateresetpasswordcode", postData);
    request
      .then((response : AxiosResponse) => {
        resolve(response.data);
      })
      .catch((error : AxiosError) => {
        reject(error);
      });
  });
};