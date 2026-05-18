import { AxiosError, AxiosResponse } from "axios";
import { client } from "./axiosClient.js";

/**
 * Create requirement template and set information
 * @param {Object} data
 * @param {String} token Authorization token
 * @returns {Promise<object>}
 */
export const createRequirementTemplate = (
  data: object,
  token: string,
): Promise<object> => {
  return new Promise((resolve, reject) => {
    const requestData = {
      data: data,
    };
    const confirmationRequest = client.put(
      "/api/v1/requirementtemplates",
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
 * Delete requirement template
 * @param {number} id The id of the template to be deleted
 * @param {String} comments The comments included with the deletion
 * @param {String} token Authorization token
 * @returns {Promise<object>}
 */
export const deleteRequirementTemplate = (
  id: number,
  comments: string,
  token: string,
): Promise<object> => {
  const data: { id: number; comments?: string } = {
    id: id,
  };
  if (comments) data.comments = comments;
  return new Promise((resolve, reject) => {
    const request = client.delete(`/api/v1/requirementtemplates/`, {
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
 * Discard the requirement template draft changes
 * @param {String} id The id of the requirement template to be discarded
 * @param {String} token Authorization token
 * @returns {Promise<object>}
 */
export const discardRequirementTemplateChanges = (
  id: string,
  token: string,
): Promise<object> => {
  return new Promise((resolve, reject) => {
    const data = {};
    const request = client.get(`/api/v1/requirementtemplates/discard/${id}`, {
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
 * Get requirement template information
 * @param {String} id The id of the template
 * @param {String} version The version of the template
 * @param {Boolean} returnNullIfVersionNotFound When true it will return null if the version is not found
 * @param {String} token Authorization token
 * @returns {Promise<object>}
 */
export const getRequirementTemplateInformationById = (
  id: string,
  version: string,
  returnNullIfVersionNotFound: boolean,
  token: string,
): Promise<object> => {
  return new Promise((resolve, reject) => {
    const confirmationRequest = client.get(
      `/api/v1/requirementtemplates/${id}/${version}/${returnNullIfVersionNotFound}`,
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
 * Get requirement template list
 * @param {Array<String>} filter The filter used to select the template
 * @param {String} version The version to be retrieved
 * @param {Boolean} includeDeleted When true it will return the deleted records as well
 * @param {Boolean} namesOnly When true it will return only the names of the templates
 * @param {String} token Authorization token
 * @returns {Promise<object>}
 */
export const getRequirementTemplateList = (
  filter: string[],
  version: string,
  includeDeleted: boolean,
  namesOnly: boolean,
  token: string,
): Promise<object> => {
  return new Promise((resolve, reject) => {
    const requestData: {
      includeDeleted: boolean;
      namesOnly: boolean;
      version: string;
      filter?: string[];
    } = {
      includeDeleted: includeDeleted,
      namesOnly: namesOnly,
      version: version,
    };
    if (filter) requestData.filter = filter;
    const confirmationRequest = client.post(
      `/api/v1/requirementtemplates`,
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
 * Publish requirement template
 * @param {number} id The id of the template to be published
 * @param {String} comments The comments to be include with the request
 * @param {String} token Authorization token
 * @returns {Promise<object>}
 */
export const publishRequirementTemplate = (
  id: number,
  comments: string,
  token: string,
): Promise<object> => {
  return new Promise((resolve, reject) => {
    const data: { comments?: string } = {};
    if (comments) data.comments = comments;
    const confirmationRequest = client.post(
      `/api/v1/requirementtemplates/publish/${id}`,
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
 * Set requirement template information
 * @param {String} id The id of the template to be updated
 * @param {Object} data Data used to update the template
 * @param {String} token Authorization token
 * @returns {Promise<object>}
 */
export const setRequirementTemplateInformation = (
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
      `/api/v1/requirementtemplates/update`,
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
 * Update the requirement template tags
 * @param {String} id The id of the template to be updated
 * @param {Object} tags Updated template tags
 * @param {String} token Authorization token
 * @returns {Promise<object>}
 */
export const setRequirementTemplateTags = (
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
      `/api/v1/requirementtemplates/updatetags`,
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
 * Get the requirement template related policy templates
 * @param {String} id The requirement template id
 * @param {String} token Authorization token
 * @returns {Promise<object>}
 */
export const getRequirementTemplateRelatedPolicyTemplates = (
  id: string,
  token: string,
): Promise<object> => {
  return new Promise((resolve, reject) => {
    const confirmationRequest = client.get(
      `/api/v1/requirementtemplates/policytemplates/${id}`,
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
 * Get the requirement template related standard templates
 * @param {String} id The requirement template id
 * @param {String} token Authorization token
 * @returns {Promise<object>}
 */
export const getRequirementTemplateRelatedStandardTemplates = (
  id: string,
  token: string,
): Promise<object> => {
  return new Promise((resolve, reject) => {
    const confirmationRequest = client.get(
      `/api/v1/requirementtemplates/standardtemplates/${id}`,
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
 * Get the requirement template related control templates
 * @param {String} id The requirement template id
 * @param {String} token Authorization token
 * @returns {Promise<object>}
 */
export const getRequirementTemplateRelatedControlTemplates = (
  id: string,
  token: string,
): Promise<object> => {
  return new Promise((resolve, reject) => {
    const confirmationRequest = client.get(
      `/api/v1/requirementtemplates/controltemplates/${id}`,
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
