import { axios } from "./axiosClient";

module.exports = {
  axios: axios,

  /**
   * Create training plan template and set information
   * @param {String} name
   * @param {String} summary
   * @param {Array<Object>} activities
   * @param {String} token Authorization token
   */
  createDepartmentTrainingPlan: (name, summary, skill, activities, token) => {
    return new Promise(function (resolve, reject) {
      const requestData = {
        name: name ? name : "",
        summary: summary ? summary : "",
        skill: skill ? skill : "",
        activities: activities ? activities : [],
      };
      let confirmationRequest = axios.put(
        "api/v1/departmentTrainingPlans",
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
   * Delete department training plan
   * @param {String} id The id of the template to be deleted
   * @param {String} token Authorization token
   */
  deleteDepartmentTrainingPlan: (id, token) => {
    return new Promise(function (resolve, reject) {
      const request = axios.delete(`api/v1/departmenttrainingplans/`, {
        headers: { authorization: token },
        data: {
          id: id,
        },
      });
      request
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },

  /**
   * Get department traing plan information
   * @param {Number} id The id of the plan
   * @param {String} token Authorization token
   */
  getDepartmentTrainingPlanInformationById: (id, version, token) => {
    return new Promise(function (resolve, reject) {
      let confirmationRequest = axios.get(
        `api/v1/departmenttrainingplans/${id}/${version}`,
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
   * Get department training plan list
   * @param {Object} filter The filter used to select the plan
   * @param {String} token Authorization token
   */
  getDepartmentTrainingPlanList: (filter, version, token) => {
    return new Promise(function (resolve, reject) {
      const requestData = {
        filter: filter ? filter : "",
        version: version,
      };
      let confirmationRequest = axios.post(
        `api/v1/departmenttrainingplans`,
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
   * Publish department training plan
   * @param {number} id The id of the plan to be published
   * @param {String} token Authorization token
   */
  publishDepartmentTrainingPlan: (id, token) => {
    return new Promise(function (resolve, reject) {
      let confirmationRequest = axios.post(
        `api/v1/departmenttrainingplans/publish/${id}`,
        {},
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
   * Set department training plan profile information
   * @param {String} id The id of the plan to be updated
   * @param {Object} data Data used to update the plan
   * @param {String} token Authorization token
   */
  setDepartmentTrainingPlanInformation: (id, data, token) => {
    return new Promise(function (resolve, reject) {
      const requestData = {
        data: data,
      };
      let confirmationRequest = axios.post(
        `api/v1/departmenttrainingplans/${id}`,
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
