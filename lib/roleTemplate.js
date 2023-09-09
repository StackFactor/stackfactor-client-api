import { client } from "./axiosClient.js";

/**
 * Create role template and set information
 * @param {Object} data
 * @param {String} token Authorization token
 */
export const createRoleTemplate = (data, token) => {
  return new Promise(function (resolve, reject) {
    const requestData = {
      data: data,
    };
    let confirmationRequest = client.put("api/v1/roletemplates", requestData, {
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
 * @param {String} comment The comment included with the deletion
 * @param {String} token Authorization token
 */
export const deleteRoleTemplate = (id, comment, token) => {
  return new Promise(function (resolve, reject) {
    const data = {
      id: id,
    };
    if (comment) data.comment = comment;
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
 */
export const discardRoleTemplateChanges = (id, token) => {
  return new Promise(function (resolve, reject) {
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
 * @param {String} token Authorization token
 */
export const getRoleTemplateInformationById = (id, version, token) => {
  return new Promise(function (resolve, reject) {
    let confirmationRequest = client.get(
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
 */
export const getRoleTemplateList = (
  filter,
  version,
  includeDeleted,
  namesOnly,
  token
) => {
  return new Promise(function (resolve, reject) {
    const requestData = {
      includeDeleted: includeDeleted,
      namesOnly: namesOnly,
      version: version,
    };
    if (filter) requestData.filter = filter;
    let confirmationRequest = client.post(`api/v1/roletemplates`, requestData, {
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
 * @param {String} comment The comment to be include with the request
 * @param {String} token Authorization token
 */
export const publishTemplate = (id, comment, token) => {
  return new Promise(function (resolve, reject) {
    let data = {};
    if (comment) data.comment = comment;
    let confirmationRequest = client.post(
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
 */
export const setTemplateInformation = (id, data, token) => {
  return new Promise(function (resolve, reject) {
    const requestData = {
      data: data,
      id: id,
    };
    let confirmationRequest = client.post(
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
 */
export const setTemplateTags = (id, tags, token) => {
  return new Promise(function (resolve, reject) {
    const requestData = {
      tags: tags,
      id: id,
    };
    let confirmationRequest = client.post(
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
 */
export const watchRoleTemplate = (id, watch, token) => {
  return new Promise(function (resolve, reject) {
    const requestData = {
      id: id,
      watch: watch,
    };
    let confirmationRequest = client.post(
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

const roleTemplate = {
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

export default roleTemplate;
