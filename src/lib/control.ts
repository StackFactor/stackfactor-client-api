import { AxiosError, AxiosResponse } from "axios";
import { client } from "./axiosClient.js";

/**
 * Create control and set information
 * @param {Object} data
 * @param {String} token Authorization token
 * @returns {Promise<object>}
 */
export const createControl = (data: object, token: string): Promise<object> => {
  return new Promise((resolve, reject) => {
    const confirmationRequest = client.put(
      "/api/v1/controls",
      { data: data },
      {
        headers: { authorization: token },
      },
    );
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
 * Create controls from templates
 * @param {Array<String>} templateIds
 * @param {String} token Authorization token
 * @returns {Promise<object>}
 */
export const createControlsFromTemplates = (
  templateIds: string[],
  token: string,
): Promise<object> => {
  return new Promise((resolve, reject) => {
    const requestData = {
      templateIds: templateIds,
    };
    const confirmationRequest = client.put(
      "/api/v1/controls/createfromtemplate/",
      requestData,
      {
        headers: { authorization: token },
      },
    );
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
 * Delete control
 * @param {String} id The id of the control to be deleted
 * @param {String} comments The comments included with the deletion
 * @param {String} token Authorization token
 * @returns {Promise<object>}
 */
export const deleteControl = (
  id: string,
  comments: string,
  token: string,
): Promise<object> => {
  return new Promise((resolve, reject) => {
    const data: { id: string; comments?: string } = {
      id: id,
    };
    if (comments) data.comments = comments;
    const request = client.delete(`/api/v1/controls/`, {
      headers: { authorization: token },
      data: data,
    });
    request
      .then((response: AxiosResponse) => {
        resolve(response.data);
      })
      .catch((error: AxiosError) => {
        reject(error);
      });
  });
};

/**
 * Discard the control draft changes
 * @param {String} id The id of the control to be discarded
 * @param {String} token Authorization token
 * @returns {Promise<object>}
 */
export const discardControlChanges = (
  id: string,
  token: string,
): Promise<object> => {
  return new Promise((resolve, reject) => {
    const data = {};
    const request = client.get(`/api/v1/controls/discard/${id}`, {
      headers: { authorization: token },
      data: data,
    });
    request
      .then((response: AxiosResponse) => {
        resolve(response.data);
      })
      .catch((error: AxiosError) => {
        reject(error);
      });
  });
};

/**
 * Get control information
 * @param {String} id The id of the control
 * @param {String} version The version of the control
 * @param {Boolean} returnNullIfVersionNotFound When true it will return null if the version is not found
 * @param {String} token Authorization token
 * @returns {Promise<object>}
 */
export const getControlInformationById = (
  id: string,
  version: string,
  returnNullIfVersionNotFound: boolean,
  token: string,
): Promise<object> => {
  return new Promise((resolve, reject) => {
    const confirmationRequest = client.get(
      `/api/v1/controls/${id}/${version}/${returnNullIfVersionNotFound}`,
      {
        headers: { authorization: token },
      },
    );
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
 * Get control list
 * @param {Array<String>} filter The filter used to select the control
 * @param {String} version The version to be retrieved
 * @param {Boolean} includeDeleted If true it will return deleted records as well
 * @param {Boolean} returnDefaultIfVersionNotAvailable Return the default version if published not available
 * @param {Boolean} namesOnly Return only the names of the controls
 * @param {String} token Authorization token
 * @returns {Promise<object>}
 */
export const getControlList = (
  filter: string[],
  version: string,
  includeDeleted: boolean,
  returnDefaultIfVersionNotAvailable: boolean,
  namesOnly: boolean,
  token: string,
): Promise<object> => {
  return new Promise((resolve, reject) => {
    const requestData = {
      includeDeleted: includeDeleted,
      namesOnly: namesOnly,
      returnDefaultIfVersionNotAvailable: returnDefaultIfVersionNotAvailable,
      version: version,
      filter: filter,
    };
    if (filter) requestData.filter = filter;
    const confirmationRequest = client.post(`/api/v1/controls`, requestData, {
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
 * Publish control
 * @param {String} id The id of the control to be published
 * @param {String} comments The comments to be include with the request
 * @param {String} token Authorization token
 * @returns {Promise<object>}
 */
export const publishControl = (
  id: string,
  comments: string,
  token: string,
): Promise<object> => {
  return new Promise((resolve, reject) => {
    const data: { comments?: string } = {};
    if (comments) data.comments = comments;
    const confirmationRequest = client.post(
      `/api/v1/controls/publish/${id}`,
      data,
      {
        headers: { authorization: token },
      },
    );
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
 * Set control information
 * @param {String} id The id of the control to be updated
 * @param {Object} data Data used to update the control
 * @param {String} token Authorization token
 * @returns {Promise<object>}
 */
export const setControlInformation = (
  id: string,
  data: object,
  token: string,
): Promise<object> => {
  return new Promise((resolve, reject) => {
    const requestData = {
      data: data,
      id: id,
    };
    const confirmationRequest = client.post(
      `/api/v1/controls/update`,
      requestData,
      {
        headers: { authorization: token },
      },
    );
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
 * Set the control information from template
 * @param {String} id The id of the control to be updated
 * @param {Object} data Data used to update the control
 * @param {String} token Authorization token
 * @returns {Promise<object>}
 */
export const setControlInformationFromTemplate = (
  id: string,
  data: object,
  token: string,
): Promise<object> => {
  return new Promise((resolve, reject) => {
    const requestData = {
      data: data,
      id: id,
    };
    const confirmationRequest = client.post(
      `/api/v1/controls/updatefromtemplate/`,
      requestData,
      {
        headers: { authorization: token },
      },
    );
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
 * Watch control
 * @param {String} id The id of the control to be updated
 * @param {Boolean} watch Set to true or false
 * @param {String} token Authorization token
 * @returns {Promise<object>}
 */
export const watchControl = (
  id: string,
  watch: boolean,
  token: string,
): Promise<object> => {
  return new Promise((resolve, reject) => {
    const requestData = {
      id: id,
      watch: watch,
    };
    const confirmationRequest = client.post(
      `/api/v1/controls/watch`,
      requestData,
      {
        headers: { authorization: token },
      },
    );
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
 * Get the control related requirements
 * @param {String} id The control id
 * @param {String} token Authorization token
 * @returns {Promise<object>}
 */
export const getControlRelatedRequirements = (
  id: string,
  token: string,
): Promise<object> => {
  return new Promise((resolve, reject) => {
    const confirmationRequest = client.get(
      `/api/v1/controls/requirements/${id}`,
      {
        headers: { authorization: token },
      },
    );
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
 * Get the control related standards
 * @param {String} id The control id
 * @param {String} token Authorization token
 * @returns {Promise<object>}
 */
export const getControlRelatedStandards = (
  id: string,
  token: string,
): Promise<object> => {
  return new Promise((resolve, reject) => {
    const confirmationRequest = client.get(`/api/v1/controls/standards/${id}`, {
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
 * Get the control related policies
 * @param {String} id The control id
 * @param {String} token Authorization token
 * @returns {Promise<object>}
 */
export const getControlRelatedPolicies = (
  id: string,
  token: string,
): Promise<object> => {
  return new Promise((resolve, reject) => {
    const confirmationRequest = client.get(`/api/v1/controls/policies/${id}`, {
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
