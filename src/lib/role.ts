import { client } from "./axiosClient";

/**
 * Create role and set information
 * @param {Object} data
 * @param {String} token Authorization token
 * @returns {Promise<Object>}
 */
const createRole = (data: object, token: string): Promise<object> => {
  return new Promise((resolve, reject) => {
    const confirmationRequest = client.put(
      "api/v1/roles",
      { data: data },
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
 * Create from from template
 * @param {String} templateId
 * @param {Object} data
 * @param {String} token Authorization token
 * @returns {Promise<Object>}
 */
const createRoleFromTemplate = (
  templateId: string,
  data: object,
  token: string
): Promise<object> => {
  return new Promise((resolve, reject) => {
    const requestData: { 
      includeDeleted: boolean; 
      includeDetailedInformation: boolean; 
      namesOnly: boolean; 
      returnDefaultIfVersionNotAvailable: boolean; 
      version: string; 
      filter?: object;
      templateId: string;
    } = {
      templateId: templateId,
      includeDeleted: false,
      includeDetailedInformation: false,
      namesOnly: false,
      returnDefaultIfVersionNotAvailable: false,
      version: "1.0",
    };
    const confirmationRequest = client.put(
      "api/v1/roles/createfromtemplate/",
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
 * Delete role
 * @param {String} id The id of the role to be deleted
 * @param {String} comments The comments included with the deletion
 * @param {String} token Authorization token
 * @returns {Promise<Object>}
 */
const deleteRole = (
  id: string,
  comments: string,
  token: string
): Promise<object> => {
  return new Promise((resolve, reject) => {
    const data: { id: string, comments?: string } = {
      id: id,
    };
    if (comments) data.comments = comments;
    const request = client.delete(`api/v1/roles/`, {
      headers: { authorization: token },
      data: data,
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
 * Discard the role draft changes
 * @param {String} id The id of the role to be deleted
 * @param {String} token Authorization token
 * @returns {Promise<Object>}
 */
const discardRoleChanges = (id: string, token: string): Promise<object> => {
  return new Promise((resolve, reject) => {
    const data = {};
    const request = client.get(`api/v1/roles/discard/${id}`, {
      headers: { authorization: token },
      data: data,
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
 * Get the list of imported role templates
 * @param {String} token
 * @returns {Promise<Object>}
 */
const getImportedRoleTemplates = (token: string): Promise<object> => {
  return new Promise((resolve, reject) => {
    const request = client.get(`api/v1/roles/getimportedroletemplates`, {
      headers: { authorization: token },
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
 * Get role information
 * @param {number} id The id of the role
 * @param {String} version The version to be retrieved
 * @param {Boolean} returnNullIfVersionNotFound Return null if the version is not found
 * @param {String} token Authorization token
 * @returns {Promise<Object>}
 */
const getRoleInformationById = (
  id: number,
  version: string,
  returnNullIfVersionNotFound: boolean,
  token: string
): Promise<object> => {
  return new Promise((resolve, reject) => {
    const confirmationRequest = client.get(
      `api/v1/roles/role/${id}/${version}/${returnNullIfVersionNotFound}`,
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
 * Get roles list
 * @param {Object} filter The filter used to select the roles
 * @param {String} version The version to be retrieved
 * @param {Boolean} includeDeleted If true it will return deleted records as well
 * @param {boolean} includeDetailedInformation If true it will return detailed information
 * @param {Boolean} returnDefaultIfVersionNotAvailable Return the default version if published not available
 * @param {Boolean} namesOnly Return only the names of the roles
 * @param {String} token Authorization token
 * @returns {Promise<Object>}
 */
const getRolesList = (
  filter: object,
  version: string,
  includeDeleted: boolean,
  includeDetailedInformation: boolean,
  returnDefaultIfVersionNotAvailable: boolean,
  namesOnly: boolean,
  token: string
): Promise<object> => {
  return new Promise((resolve, reject) => {
    const requestData: { 
      includeDeleted: boolean; 
      includeDetailedInformation: boolean; 
      namesOnly: boolean; 
      returnDefaultIfVersionNotAvailable: boolean; 
      version: string; 
      filter?: object;
    } = {
      includeDeleted: includeDeleted,
      includeDetailedInformation: includeDetailedInformation,
      namesOnly: namesOnly,
      returnDefaultIfVersionNotAvailable: returnDefaultIfVersionNotAvailable,
      version: version,
    };
    if (filter) requestData.filter = filter;
    const confirmationRequest = client.post(`api/v1/roles`, requestData, {
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
 * Get role template updates
 * @param {String} id The role id
 * @param {String} token
 * @returns {Promise<Object>}
 */
const getRoleTemplateUpdates = (id: string, token: string): Promise<object> => {
  return new Promise((resolve, reject) => {
    const confirmationRequest = client.get(
      `api/v1/roles/getroletemplateupdates/${id}`,
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
 * Import role templates
 * @param {Array<Object>} data The list of role templates to be imported
 * @param {String} token
 * @returns {Promise<Object>}
 */
const importRoleTemplates = (
  data: object[],
  token: string
): Promise<object> => {
  return new Promise((resolve, reject) => {
    const requestData: { roles: object[]; jobDescription: string; userid?: string } = {
      roles: data,
      jobDescription: "default job description", // Add a default job description or pass it as a parameter
    };
    const confirmationRequest = client.post(
      `api/v1/roles/importRoleTemplates`,
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
 * Publish role
 * @param {number} id The id of the role to be published
 * @param {String} comments The comments to be include with the request
 * @param {String} token Authorization token
 * @returns {Promise<Object>}
 */
const publishRole = (
  id: number,
  comments: string,
  token: string
): Promise<object> => {
  return new Promise((resolve, reject) => {
    const data: { comments?: string } = {};
    if (comments) data.comments = comments;
    const confirmationRequest = client.post(`api/v1/roles/publish/${id}`, data, {
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
 * Set role profile information
 * @param {String} id The id of the role to be updated
 * @param {Object} data Data used to update the role
 * @param {String} token Authorization token
 * @returns {Promise<Object>}
 */
const setRoleInformation = (
  id: string,
  data: object,
  token: string
): Promise<object> => {
  return new Promise((resolve, reject) => {
    const requestData = {
      data: data,
      id: id,
    };
    const confirmationRequest = client.post(`api/v1/roles/update`, requestData, {
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
 * Set the role information from template
 * @param {String} id The id of the role to be updated
 * @param {Object} data Data used to update the role
 * @param {String} token Authorization token
 * @returns {Promise<Object>}
 */
const setRoleInformationFromTemplate = (
  id: string,
  data: object,
  token: string
): Promise<object> => {
  return new Promise((resolve, reject) => {
    const requestData = {
      data: data,
      id: id,
    };
    const confirmationRequest = client.post(
      `api/v1/roles/updatefromtemplate/`,
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
 * Set user roles
 * @param {String} id The id of the user to be updated
 * @param {Array<Object>} roles The list of roles to be assigned to the user
 * @param {String} jobDescription The job description to be assigned to the user
 * @param {String} token Authorization token
 * @returns {Promise<Object>}
 */
const setUserRoles = (
  id: string,
  roles: object[],
  jobDescription: string,
  token: string
): Promise<object> => {
  return new Promise((resolve, reject) => {
    const requestData: { roles: object[]; jobDescription: string; userid?: string } = {
      roles: roles,
      jobDescription: jobDescription,
    };
    if (id) requestData.userid = id;
    const request = client.post(`api/v1/roles/settouser/`, requestData, {
      headers: { authorization: token },
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
 * Watch role
 * @param {String} id The id of the role to be updated
 * @param {Boolean} watch Set to true or false
 * @param {String} token Authorization token
 * @returns {Promise<Object>}
 */
const watchRole = (
  id: string,
  watch: boolean,
  token: string
): Promise<object> => {
  return new Promise((resolve, reject) => {
    const requestData = {
      id: id,
      watch: watch,
    };
    const confirmationRequest = client.post(`api/v1/roles/watch`, requestData, {
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

export default {
  createRole,
  createRoleFromTemplate,
  deleteRole,
  discardRoleChanges,
  getImportedRoleTemplates,
  getRoleInformationById,
  getRolesList,
  getRoleTemplateUpdates,
  importRoleTemplates,
  publishRole,
  setRoleInformation,
  setRoleInformationFromTemplate,
  setUserRoles,
  watchRole,
};
