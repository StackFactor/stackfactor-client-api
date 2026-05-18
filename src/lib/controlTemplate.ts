import { AxiosError, AxiosResponse } from "axios";
import { client } from "./axiosClient.js";

/**
 * Create control template and set information
 * @param {Object} data
 * @param {String} token Authorization token
 * @returns {Promise<object>}
 */
export const createControlTemplate = (
  data: object,
  token: string,
): Promise<object> => {
  return new Promise((resolve, reject) => {
    const requestData = {
      data: data,
    };
    const confirmationRequest = client.put(
      "/api/v1/controltemplates",
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
 * Delete control template
 * @param {number} id The id of the template to be deleted
 * @param {String} comments The comments included with the deletion
 * @param {String} token Authorization token
 * @returns {Promise<object>}
 */
export const deleteControlTemplate = (
  id: number,
  comments: string,
  token: string,
): Promise<object> => {
  const data: { id: number; comments?: string } = {
    id: id,
  };
  if (comments) data.comments = comments;
  return new Promise((resolve, reject) => {
    const request = client.delete(`/api/v1/controltemplates/`, {
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
 * Discard the control template draft changes
 * @param {String} id The id of the control template to be discarded
 * @param {String} token Authorization token
 * @returns {Promise<object>}
 */
export const discardControlTemplateChanges = (
  id: string,
  token: string,
): Promise<object> => {
  return new Promise((resolve, reject) => {
    const data = {};
    const request = client.get(`/api/v1/controltemplates/discard/${id}`, {
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
 * Get control template information
 * @param {String} id The id of the template
 * @param {String} version The version of the template
 * @param {Boolean} returnNullIfVersionNotFound When true it will return null if the version is not found
 * @param {String} token Authorization token
 * @returns {Promise<object>}
 */
export const getControlTemplateInformationById = (
  id: string,
  version: string,
  returnNullIfVersionNotFound: boolean,
  token: string,
): Promise<object> => {
  return new Promise((resolve, reject) => {
    const confirmationRequest = client.get(
      `/api/v1/controltemplates/${id}/${version}/${returnNullIfVersionNotFound}`,
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
 * Get control template list
 * @param {Array<String>} filter The filter used to select the template
 * @param {String} version The version to be retrieved
 * @param {Boolean} includeDeleted When true it will return the deleted records as well
 * @param {String} details The level of detail to return ("ID", "NAME", "DEFAULT")
 * @param {String} token Authorization token
 * @returns {Promise<object>}
 */
export const getControlTemplateList = (
  filter: string[],
  version: string,
  includeDeleted: boolean,
  details: string,
  token: string,
): Promise<object> => {
  return new Promise((resolve, reject) => {
    const requestData: {
      includeDeleted: boolean;
      details: string;
      version: string;
      filter?: string[];
    } = {
      includeDeleted: includeDeleted,
      details: details,
      version: version,
    };
    if (filter) requestData.filter = filter;
    const confirmationRequest = client.post(
      `/api/v1/controltemplates`,
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
 * Publish control template
 * @param {number} id The id of the template to be published
 * @param {String} comments The comments to be include with the request
 * @param {String} token Authorization token
 * @returns {Promise<object>}
 */
export const publishControlTemplate = (
  id: number,
  comments: string,
  token: string,
): Promise<object> => {
  return new Promise((resolve, reject) => {
    const data: { comments?: string } = {};
    if (comments) data.comments = comments;
    const confirmationRequest = client.post(
      `/api/v1/controltemplates/publish/${id}`,
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
 * Set control template information
 * @param {String} id The id of the template to be updated
 * @param {Object} data Data used to update the template
 * @param {String} token Authorization token
 * @returns {Promise<object>}
 */
export const setControlTemplateInformation = (
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
      `/api/v1/controltemplates/update`,
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
 * Update the control template tags
 * @param {String} id The id of the template to be updated
 * @param {Object} tags Updated template tags
 * @param {String} token Authorization token
 * @returns {Promise<object>}
 */
export const setControlTemplateTags = (
  id: string,
  tags: object,
  token: string,
): Promise<object> => {
  return new Promise((resolve, reject) => {
    const requestData = {
      tags: tags,
      id: id,
    };
    const confirmationRequest = client.post(
      `/api/v1/controltemplates/updatetags`,
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
 * Get the control template related policy templates
 * @param {String} id The control template id
 * @param {String} token Authorization token
 * @returns {Promise<object>}
 */
export const getControlTemplateRelatedPolicyTemplates = (
  id: string,
  token: string,
): Promise<object> => {
  return new Promise((resolve, reject) => {
    const confirmationRequest = client.get(
      `/api/v1/controltemplates/policytemplates/${id}`,
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
 * Get the control template related standard templates
 * @param {String} id The control template id
 * @param {String} token Authorization token
 * @returns {Promise<object>}
 */
export const getControlTemplateRelatedStandardTemplates = (
  id: string,
  token: string,
): Promise<object> => {
  return new Promise((resolve, reject) => {
    const confirmationRequest = client.get(
      `/api/v1/controltemplates/standardtemplates/${id}`,
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
 * Get the control template related requirement templates
 * @param {String} id The control template id
 * @param {String} token Authorization token
 * @returns {Promise<object>}
 */
export const getControlTemplateRelatedRequirementTemplates = (
  id: string,
  token: string,
): Promise<object> => {
  return new Promise((resolve, reject) => {
    const confirmationRequest = client.get(
      `/api/v1/controltemplates/requirementtemplates/${id}`,
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
