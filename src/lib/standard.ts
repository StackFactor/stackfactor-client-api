import { AxiosError, AxiosResponse } from "axios";
import { client } from "./axiosClient.js";

/**
 * Create standard and set information
 * @param {Object} data
 * @param {String} token Authorization token
 * @returns {Promise<object>}
 */
export const createStandard = (
  data: object,
  token: string,
): Promise<object> => {
  return new Promise((resolve, reject) => {
    const confirmationRequest = client.put(
      "/api/v1/standards",
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
 * Create standards from templates
 * @param {Array<String>} templateIds
 * @param {String} token Authorization token
 * @returns {Promise<object>}
 */
export const createStandardsFromTemplates = (
  templateIds: string[],
  token: string,
): Promise<object> => {
  return new Promise((resolve, reject) => {
    const requestData = {
      templateIds: templateIds,
    };
    const confirmationRequest = client.put(
      "/api/v1/standards/createfromtemplate/",
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
 * Delete standard
 * @param {String} id The id of the standard to be deleted
 * @param {String} comments The comments included with the deletion
 * @param {String} token Authorization token
 * @returns {Promise<object>}
 */
export const deleteStandard = (
  id: string,
  comments: string,
  token: string,
): Promise<object> => {
  return new Promise((resolve, reject) => {
    const data: { id: string; comments?: string } = {
      id: id,
    };
    if (comments) data.comments = comments;
    const request = client.delete(`/api/v1/standards/`, {
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
 * Discard the standard draft changes
 * @param {String} id The id of the standard to be discarded
 * @param {String} token Authorization token
 * @returns {Promise<object>}
 */
export const discardStandardChanges = (
  id: string,
  token: string,
): Promise<object> => {
  return new Promise((resolve, reject) => {
    const data = {};
    const request = client.get(`/api/v1/standards/discard/${id}`, {
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
 * Get standard information
 * @param {String} id The id of the standard
 * @param {String} version The version of the standard
 * @param {Boolean} returnNullIfVersionNotFound When true it will return null if the version is not found
 * @param {String} token Authorization token
 * @returns {Promise<object>}
 */
export const getStandardInformationById = (
  id: string,
  version: string,
  returnNullIfVersionNotFound: boolean,
  token: string,
): Promise<object> => {
  return new Promise((resolve, reject) => {
    const confirmationRequest = client.get(
      `/api/v1/standards/${id}/${version}/${returnNullIfVersionNotFound}`,
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
 * Get standard list
 * @param {Array<String>} filter The filter used to select the standard
 * @param {String} version The version to be retrieved
 * @param {Boolean} includeDeleted If true it will return deleted records as well
 * @param {Boolean} returnDefaultIfVersionNotAvailable Return the default version if published not available
 * @param {Boolean} namesOnly Return only the names of the standards
 * @param {String} token Authorization token
 * @returns {Promise<object>}
 */
export const getStandardList = (
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
    const confirmationRequest = client.post(`/api/v1/standards`, requestData, {
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
 * Publish standard
 * @param {String} id The id of the standard to be published
 * @param {String} comments The comments to be include with the request
 * @param {String} token Authorization token
 * @returns {Promise<object>}
 */
export const publishStandard = (
  id: string,
  comments: string,
  token: string,
): Promise<object> => {
  return new Promise((resolve, reject) => {
    const data: { comments?: string } = {};
    if (comments) data.comments = comments;
    const confirmationRequest = client.post(
      `/api/v1/standards/publish/${id}`,
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
 * Set standard information
 * @param {String} id The id of the standard to be updated
 * @param {Object} data Data used to update the standard
 * @param {String} token Authorization token
 * @returns {Promise<object>}
 */
export const setStandardInformation = (
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
      `/api/v1/standards/update`,
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
 * Set the standard information from template
 * @param {String} id The id of the standard to be updated
 * @param {Object} data Data used to update the standard
 * @param {String} token Authorization token
 * @returns {Promise<object>}
 */
export const setStandardInformationFromTemplate = (
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
      `/api/v1/standards/updatefromtemplate/`,
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
 * Watch standard
 * @param {String} id The id of the standard to be updated
 * @param {Boolean} watch Set to true or false
 * @param {String} token Authorization token
 * @returns {Promise<object>}
 */
export const watchStandard = (
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
      `/api/v1/standards/watch`,
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
 * Get the standard related policies
 * @param {String} id The standard id
 * @param {String} token Authorization token
 * @returns {Promise<object>}
 */
export const getStandardRelatedPolicies = (
  id: string,
  token: string,
): Promise<object> => {
  return new Promise((resolve, reject) => {
    const confirmationRequest = client.get(`/api/v1/standards/policies/${id}`, {
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
 * Get the standard related requirements
 * @param {String} id The standard id
 * @param {String} token Authorization token
 * @returns {Promise<object>}
 */
export const getStandardRequirements = (
  id: string,
  token: string,
): Promise<object> => {
  return new Promise((resolve, reject) => {
    const confirmationRequest = client.get(
      `/api/v1/standards/requirements/${id}`,
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
 * Get the standard related controls
 * @param {String} id The standard id
 * @param {String} token Authorization token
 * @returns {Promise<object>}
 */
export const getStandardControls = (
  id: string,
  token: string,
): Promise<object> => {
  return new Promise((resolve, reject) => {
    const confirmationRequest = client.get(`/api/v1/standards/controls/${id}`, {
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
