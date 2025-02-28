import { client } from "./axiosClient";

/**
 * Create role template and set information
 * @param {Object} data
 * @param {String} token Authorization token
 * @returns {Promise<Object>}
 */
const createRoleTemplate = (data: object, token: string): Promise<object> => {
  return new Promise((resolve, reject) => {
    const requestData = {
      data: data,
    };
    const confirmationRequest = client.put("api/v1/roletemplates", requestData, {
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
 * Delete role template
 * @param {String} id The id of the template to be deleted
 * @param {String} comments The comments included with the deletion
 * @param {String} token Authorization token
 * @returns {Promise<Object>}
 */
const deleteRoleTemplate = (
  id: string,
  comments: string,
  token: string
): Promise<object> => {
  return new Promise((resolve, reject) => {
    const data: { id: string, comments?: string } = {
      id: id,
    };
    if (comments) data.comments = comments;
    const request = client.delete(`api/v1/roletemplates/`, {
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
 * Discard the role template draft changes
 * @param {String} id The id of the role template to be deleted
 * @param {String} token Authorization token
 * @returns {Promise<Object>}
 */
const discardRoleTemplateChanges = (
  id: string,
  token: string
): Promise<object> => {
  return new Promise((resolve, reject) => {
    const data = {};
    const request = client.get(`api/v1/roletemplates/discard/${id}`, {
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
 * Get role template information
 * @param {String} id The id of the template
 * @param {String} version The version of the template
 * @param {String} token Authorization token
 * @returns {Promise<Object>}
 */
const getRoleTemplateInformationById = (
  id: string,
  version: string,
  token: string
): Promise<object> => {
  return new Promise((resolve, reject) => {
    const confirmationRequest = client.get(
      `api/v1/roletemplates/${id}/${version}`,
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
 * Get role template list
 * @param {Array<String>} filter The list of integrations to be received
 * @param {String} version The version of the template
 * @param {Boolean} includeDeleted When true it will return the deleted records as well
 * @param {Boolean} namesOnly When true it will return only the names of the templates
 * @param {String} token Authorization token
 * @returns {Promise<Object>}
 */
const getRoleTemplateList = (
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
    const confirmationRequest = client.post(`api/v1/roletemplates`, requestData, {
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
 * Publish template
 * @param {number} id The id of the template to be published
 * @param {String} comments The comments to be include with the request
 * @param {String} token Authorization token
 * @returns {Promise<Object>}
 */
const publishTemplate = (
  id: number,
  comments: string,
  token: string
): Promise<object> => {
  return new Promise((resolve, reject) => {
    const data: { comments?: string } = {};
    if (comments) data.comments = comments;
    const confirmationRequest = client.post(
      `api/v1/roletemplates/publish/${id}`,
      data,
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
 * Set template profile information
 * @param {String} id The id of the template to be updated
 * @param {Object} data Data used to update the template
 * @param {String} token Authorization token
 * @returns {Promise<Object>}
 */
const setTemplateInformation = (
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
      `api/v1/roletemplates/update`,
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
 * Update the role template tags
 * @param {String} id The id of the template to be updated
 * @param {Object} tags Updated template tags
 * @param {String} token Authorization token
 * @returns {Promise<Object>}
 */
const setTemplateTags = (
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
      `api/v1/roletemplates/updatetags/`,
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
 * Watch role template
 * @param {String} id The id of the skill to be updated
 * @param {Boolean} watch Set to true or false
 * @param {String} token Authorization token
 * @returns {Promise<Object>}
 */
const watchRoleTemplate = (
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
      `api/v1/roletemplates/watch`,
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

export default {
  createRoleTemplate,
  deleteRoleTemplate,
  discardRoleTemplateChanges,
  getRoleTemplateInformationById,
  getRoleTemplateList,
  publishTemplate,
  setTemplateInformation,
  setTemplateTags,
  watchRoleTemplate,
};
