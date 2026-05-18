import { AxiosError, AxiosResponse } from "axios";
import { client } from "./axiosClient.js";

/**
 * Create policy and set information
 * @param {Object} data
 * @param {String} token Authorization token
 * @returns {Promise<object>}
 */
export const createPolicy = (data: object, token: string): Promise<object> => {
  return new Promise((resolve, reject) => {
    const confirmationRequest = client.put(
      "/api/v1/policies",
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
 * Create policies from templates
 * @param {Array<String>} templateIds
 * @param {String} token Authorization token
 * @returns {Promise<object>}
 */
export const createPoliciesFromTemplates = (
  templateIds: string[],
  token: string,
): Promise<object> => {
  return new Promise((resolve, reject) => {
    const requestData = {
      templateIds: templateIds,
    };
    const confirmationRequest = client.put(
      "/api/v1/policies/createfromtemplate/",
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
 * Delete policy
 * @param {String} id The id of the policy to be deleted
 * @param {String} comments The comments included with the deletion
 * @param {String} token Authorization token
 * @returns {Promise<object>}
 */
export const deletePolicy = (
  id: string,
  comments: string,
  token: string,
): Promise<object> => {
  return new Promise((resolve, reject) => {
    const data: { id: string; comments?: string } = {
      id: id,
    };
    if (comments) data.comments = comments;
    const request = client.delete(`/api/v1/policies/`, {
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
 * Discard the policy draft changes
 * @param {String} id The id of the policy to be discarded
 * @param {String} token Authorization token
 * @returns {Promise<object>}
 */
export const discardPolicyChanges = (
  id: string,
  token: string,
): Promise<object> => {
  return new Promise((resolve, reject) => {
    const data = {};
    const request = client.get(`/api/v1/policies/discard/${id}`, {
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
 * Get policy information
 * @param {String} id The id of the policy
 * @param {String} version The version of the policy
 * @param {Boolean} returnNullIfVersionNotFound When true it will return null if the version is not found
 * @param {String} token Authorization token
 * @returns {Promise<object>}
 */
export const getPolicyInformationById = (
  id: string,
  version: string,
  returnNullIfVersionNotFound: boolean,
  token: string,
): Promise<object> => {
  return new Promise((resolve, reject) => {
    const confirmationRequest = client.get(
      `/api/v1/policies/${id}/${version}/${returnNullIfVersionNotFound}`,
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
 * Get policy list
 * @param {Array<String>} filter The filter used to select the policy
 * @param {String} version The version to be retrieved
 * @param {Boolean} includeDeleted If true it will return deleted records as well
 * @param {Boolean} returnDefaultIfVersionNotAvailable Return the default version if published not available
 * @param {String} details The level of detail to return ("ID", "NAME", "DEFAULT")
 * @param {String} token Authorization token
 * @returns {Promise<object>}
 */
export const getPolicyList = (
  filter: string[],
  version: string,
  includeDeleted: boolean,
  returnDefaultIfVersionNotAvailable: boolean,
  details: string,
  token: string,
): Promise<object> => {
  return new Promise((resolve, reject) => {
    const requestData = {
      includeDeleted: includeDeleted,
      details: details,
      returnDefaultIfVersionNotAvailable: returnDefaultIfVersionNotAvailable,
      version: version,
      filter: filter,
    };
    if (filter) requestData.filter = filter;
    const confirmationRequest = client.post(`/api/v1/policies`, requestData, {
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
 * Publish policy
 * @param {String} id The id of the policy to be published
 * @param {String} comments The comments to be include with the request
 * @param {String} token Authorization token
 * @returns {Promise<object>}
 */
export const publishPolicy = (
  id: string,
  comments: string,
  token: string,
): Promise<object> => {
  return new Promise((resolve, reject) => {
    const data: { comments?: string } = {};
    if (comments) data.comments = comments;
    const confirmationRequest = client.post(
      `/api/v1/policies/publish/${id}`,
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
 * Set policy information
 * @param {String} id The id of the policy to be updated
 * @param {Object} data Data used to update the policy
 * @param {String} token Authorization token
 * @returns {Promise<object>}
 */
export const setPolicyInformation = (
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
      `/api/v1/policies/update`,
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
 * Set the policy information from template
 * @param {String} id The id of the policy to be updated
 * @param {Object} data Data used to update the policy
 * @param {String} token Authorization token
 * @returns {Promise<object>}
 */
export const setPolicyInformationFromTemplate = (
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
      `/api/v1/policies/updatefromtemplate/`,
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
 * Watch policy
 * @param {String} id The id of the policy to be updated
 * @param {Boolean} watch Set to true or false
 * @param {String} token Authorization token
 * @returns {Promise<object>}
 */
export const watchPolicy = (
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
      `/api/v1/policies/watch`,
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
 * Get the policy related standards
 * @param {String} id The policy id
 * @param {String} token Authorization token
 * @returns {Promise<object>}
 */
export const getPolicyStandards = (
  id: string,
  token: string,
): Promise<object> => {
  return new Promise((resolve, reject) => {
    const confirmationRequest = client.get(`/api/v1/policies/standards/${id}`, {
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
 * Get the policy related requirements
 * @param {String} id The policy id
 * @param {String} token Authorization token
 * @returns {Promise<object>}
 */
export const getPolicyRequirements = (
  id: string,
  token: string,
): Promise<object> => {
  return new Promise((resolve, reject) => {
    const confirmationRequest = client.get(
      `/api/v1/policies/requirements/${id}`,
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
 * Get the policy related controls
 * @param {String} id The policy id
 * @param {String} token Authorization token
 * @returns {Promise<object>}
 */
export const getPolicyControls = (
  id: string,
  token: string,
): Promise<object> => {
  return new Promise((resolve, reject) => {
    const confirmationRequest = client.get(`/api/v1/policies/controls/${id}`, {
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
