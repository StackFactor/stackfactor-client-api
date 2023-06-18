import axios from "./axios";

export default {
  /**
   * Create a new document to an existing template
   *
   * @param {String} templateId - the template id
   * @param {String} parentPhaseId - the parent of the new phase. If null, it will add the phase to the
   * root of the template
   * @param {Object} data - new phase data information
   * @param {String} token - authorization token
   *
   */
  create(templateId, parentPhaseId, data, token) {
    return new Promise(function (resolve, reject) {
      const requestData = {
        templateId: templateId,
        parentPhaseId: parentPhaseId,
        data: data,
      };
      let confirmationRequest = axios.put(
        "api/v1/templates/template/phases/phase/document",
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
  },

  /**
   * Delete an existing document from a template
   *
   * @param {String} templateId - the template id
   * @param {String} documentId - the document id
   * @param {String} token - authorization token
   *
   */
  delete(templateId, documentId, token) {
    return new Promise(function (resolve, reject) {
      const requestData = {
        templateId: templateId,
        documentId: documentId,
      };
      let confirmationRequest = axios.delete(
        `api/v1/templates/template/phases/phase/document`,
        { headers: { authorization: token }, data: requestData }
      );
      confirmationRequest
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },

  /**
   * Move an existing document
   *
   * @param {String} templateId - the template id
   * @param {String} documentId - the id of the document to be moved
   * @param {String} newParentPhaseId - the new parent phase id
   * @param {String} token - authorization token
   *
   */
  move(templateId, documentId, newParentPhaseId, token) {
    return new Promise(function (resolve, reject) {
      const requestData = {
        templateId: templateId,
        documentId: documentId,
        newParentPhaseId: newParentPhaseId,
      };
      let confirmationRequest = axios.patch(
        "api/v1/templates/template/phases/phase/document/move",
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
  },

  /**
   * Update an existing document phase
   *
   * @param {String} templateId - template id
   * @param {String} documentId - document id
   * @param {Object} data - data containing the updated document information
   * @param {String} token - authorization token
   *
   */
  update(templateId, documentId, data, token) {
    return new Promise(function (resolve, reject) {
      const requestData = {
        templateId: templateId,
        documentId: documentId,
        data: data,
      };
      let confirmationRequest = axios.patch(
        "api/v1/templates/template/phases/phase/document",
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
  },
};
