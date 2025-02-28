import { AxiosError, AxiosResponse } from "axios";
import { client } from "./axiosClient.js";

/**
 * Create skill template and set information
 * @param {Object} data
 * @param {String} token Authorization token
 * @returns {Promise<object>}
 */
export const createSkillTemplate = (data: object, token: string): Promise<object> => {
  return new Promise((resolve, reject) => {
    const requestData = {
      data: data,
    };
    const confirmationRequest = client.put("api/v1/skilltemplates", requestData, {
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
 * Delete skill template
 * @param {number} id The id of the template to be deleted
 * @param {String} comments The comments included with the deletion
 * @param {String} token Authorization token
 * @returns {Promise<object>}
 */
export const deleteSkillTemplate = (
  id: number,
  comments: string,
  token: string
): Promise<object> => {
  const data: { id: number; comments?: string } = {
    id: id,
  };
  if (comments) data.comments = comments;
  return new Promise((resolve, reject) => {
    const request = client.delete(`api/v1/skilltemplates/`, {
      headers: { authorization: token },
      data: data,
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
 * Discard the skill template draft changes
 * @param {String} id The id of the skill template to be deleted
 * @param {String} token Authorization token
 * @returns {Promise<object>}
 */
export const discardSkillTemplateChanges = (
  id: string,
  token: string
): Promise<object> => {
  return new Promise((resolve, reject) => {
    const data = {};
    const request = client.get(`api/v1/skilltemplates/discard/${id}`, {
      headers: { authorization: token },
      data: data,
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
 * Get skill template information
 * @param {String} id The id of the template
 * @param {String} version The version of the template
 * @param {Boolean} returnNullIfVersionNotFound When true it will return null if the version is not found
 * @param {String} token Authorization token
 * @returns {Promise<object>}
 */
export const getSkillTemplateInformationById = (
  id: string,
  version: string,
  returnNullIfVersionNotFound: boolean,
  token: string
): Promise<object> => {
  return new Promise((resolve, reject) => {
    const confirmationRequest = client.get(
      `api/v1/skilltemplates/${id}/${version}/${returnNullIfVersionNotFound}`,
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
 * Get skill template list
 * @param {Array<String>} filter The filter used to select the template
 * @param {String} version The version to be retrieved
 * @param {Boolean} includeDeleted When true it will return the deleted records as well
 * @param {Boolean} namesOnly When true it will return only the names of the templates
 * @param {String} token Authorization token
 * @returns {Promise<object>}
 */
export const getSkillTemplateList = (
  filter: string[],
  version: string,
  includeDeleted: boolean,
  namesOnly: boolean,
  token: string
): Promise<object> => {
  return new Promise((resolve, reject) => {
    const requestData: { includeDeleted: boolean; namesOnly: boolean; version: string; filter?: string[] } = {
      includeDeleted: includeDeleted,
      namesOnly: namesOnly,
      version: version,
    };
    if (filter) requestData.filter = filter;
    const confirmationRequest = client.post(
      `api/v1/skilltemplates`,
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
 * Get skill technology stacks template list
 * @param {String} token Authorization token
 * @returns {Promise<object>}
 */
export const getTechnologyStacks = (token: string): Promise<object> => {
  return new Promise((resolve, reject) => {
    const confirmationRequest = client.get(`api/v1/skilltemplates/stacks`, {
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
 * Publish template
 * @param {number} id The id of the template to be published
 * @param {String} comments The comments to be include with the request
 * @param {String} token Authorization token
 * @returns {Promise<object>}
 */
export const publishTemplate = (
  id: number,
  comments: string,
  token: string
): Promise<object> => {
  return new Promise((resolve, reject) => {
    const data: { comments?: string } = {};
    if (comments) data.comments = comments;
    const confirmationRequest = client.post(
      `api/v1/skilltemplates/publish/${id}`,
      data,
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
 * Set template profile information
 * @param {String} id The id of the template to be updated
 * @param {Object} data Data used to update the template
 * @param {String} token Authorization token
 * @returns {Promise<object>}
 */
export const setTemplateInformation = (
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
      `api/v1/skilltemplates/update`,
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
 * Update the skill template tags
 * @param {String} id The id of the template to be updated
 * @param {Object} tags Updated template tags
 * @param {String} token Authorization token
 * @returns {Promise<object>}
 */
export const setTemplateTags = (
  id: string,
  tags: object,
  token: string
): Promise<object> => {
  return new Promise((resolve, reject) => {
    const requestData = {
      tags: tags,
      id: id,
    };
    const confirmationRequest = client.post(
      `api/v1/skilltemplates/updatetags/`,
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
 * Validate skill template information
 * @param {String} id The id of the skill to be updated
 * @param {String} token Authorization token
 * @returns {Promise<object>}
 */
export const validateTemplate = (id: string, token: string): Promise<object> => {
  return new Promise((resolve, reject) => {
    const requestData = {
      id: id,
    };
    const confirmationRequest = client.post(
      `api/v1/skilltemplates/validate/`,
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
 * Watch skill template
 * @param {String} id The id of the skill template to be updated
 * @param {Boolean} watch Set to true or false
 * @param {String} token Authorization token
 * @returns {Promise<object>}
 */
export const watchSkillTemplate = (
  id: string,
  watch: boolean,
  token: string
): Promise<object> => {
  return new Promise((resolve, reject) => {
    const requestData = {
      id: id,
      watch: watch,
    };
    const confirmationRequest = client.post(
      `api/v1/skilltemplates/watch`,
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
