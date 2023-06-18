import axios from "./axios";

export default {
  /**
   * Add a new phase to an existing template
   *
   * @param {String} templateId - the template id
   * @param {String} parentPhaseId - the parent of the new phase. If null, it will add the phase to the root
   * of the template
   * @param {Object} data - new phase data information
   * @param {String} token - authorization token
   *
   */
  create(templateId, parentPhaseId, data, token) {
    return new Promise(function (resolve, reject) {
      const requestData = {
        templateId: templateId,
        data: data,
      };
      if (parentPhaseId) requestData.parentPhaseId = parentPhaseId;
      let confirmationRequest = axios.put(
        "api/v1/templates/template/phases/phase",
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
   * Delete an existing phase
   *
   * @param {String} templateId - the template id
   * @param {String} phaseId - the phase id
   * @param {String} token - authorization token
   *
   */
  delete(templateId, phaseId, token) {
    return new Promise(function (resolve, reject) {
      const requestData = {
        templateId: templateId,
        phaseId: phaseId,
      };
      let confirmationRequest = axios.delete(
        `api/v1/templates/template/phases/phase`,
        {
          headers: { authorization: token },
          data: requestData,
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
   * Move an existing phase
   *
   * @param {String} templateId - the template id
   * @param {String} phaseId - the id of the phase to be moved
   * @param {String} newParentPhaseId - the new parent phase id
   * @param {String} token - authorization token
   *
   */
  move(templateId, phaseId, newParentPhaseId, token) {
    return new Promise(function (resolve, reject) {
      const requestData = {
        templateId: templateId,
        phaseId: phaseId,
        newParentPhaseId: newParentPhaseId,
      };
      let confirmationRequest = axios.patch(
        "api/v1/templates/template/phases/phase/move",
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
   * Update an existing template phase
   *
   * @param {String} templateId - template id
   * @param {String} phaseId - phase id
   * @param {Object} data - data containing the new phase information
   * @param {String} token - authorization token
   *
   */
  update(templateId, phaseId, data, token) {
    return new Promise(function (resolve, reject) {
      const requestData = {
        templateId: templateId,
        phaseId: phaseId,
        data: data,
      };
      let confirmationRequest = axios.patch(
        "api/v1/templates/template/phases/phase",
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
