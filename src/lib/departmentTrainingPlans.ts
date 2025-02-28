import { client } from "./axiosClient";

interface Activity {
  // Define the structure of an activity object here
}

interface Filter {
  // Define the structure of a filter object here
}

/**
 * Create department training plan and set information
 * @param {String} name
 * @param {String} summary
 * @param {String} skill
 * @param {Array<Activity>} activities
 * @param {String} token Authorization token
 * @returns {Promise<Object>}
 */
const createDepartmentTrainingPlan = (
  name: string,
  summary: string,
  skill: string,
  activities: Activity[],
  token: string
): Promise<object> => {
  return new Promise((resolve, reject) => {
    const requestData = {
      name: name || "",
      summary: summary || "",
      skill: skill || "",
      activities: activities || [],
    };
    let confirmationRequest = client.put(
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
};

/**
 * Delete department training plan
 * @param {String} id The id of the template to be deleted
 * @param {String} token Authorization token
 * @returns {Promise<Object>}
 */
const deleteDepartmentTrainingPlan = (
  id: string,
  token: string
): Promise<object> => {
  return new Promise((resolve, reject) => {
    const request = client.delete(`api/v1/departmenttrainingplans/`, {
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
};

/**
 * Get department training plan information
 * @param {Number} id The id of the plan
 * @param {String} version The version of the plan
 * @param {String} token Authorization token
 * @returns {Promise<Object>}
 */
const getDepartmentTrainingPlanInformationById = (
  id: number,
  version: string,
  token: string
): Promise<object> => {
  return new Promise((resolve, reject) => {
    let confirmationRequest = client.get(
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
};

/**
 * Get department training plan list
 * @param {Filter} filter The filter used to select the plan
 * @param {String} version The version of the plan
 * @param {String} token Authorization token
 * @returns {Promise<Object>}
 */
const getDepartmentTrainingPlanList = (
  filter: Filter,
  version: string,
  token: string
): Promise<object> => {
  return new Promise((resolve, reject) => {
    const requestData = {
      filter: filter || "",
      version: version,
    };
    let confirmationRequest = client.post(
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
};

/**
 * Publish department training plan
 * @param {number} id The id of the plan to be published
 * @param {String} token Authorization token
 * @returns {Promise<Object>}
 */
const publishDepartmentTrainingPlan = (
  id: number,
  token: string
): Promise<object> => {
  return new Promise((resolve, reject) => {
    let confirmationRequest = client.post(
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
};

/**
 * Set department training plan profile information
 * @param {String} id The id of the plan to be updated
 * @param {Object} data Data used to update the plan
 * @param {String} token Authorization token
 * @returns {Promise<Object>}
 */
const setDepartmentTrainingPlanInformation = (
  id: string,
  data: object,
  token: string
): Promise<object> => {
  return new Promise((resolve, reject) => {
    const requestData = {
      data: data,
    };
    let confirmationRequest = client.post(
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
};

const departmentTrainingPlans = {
  createDepartmentTrainingPlan,
  deleteDepartmentTrainingPlan,
  getDepartmentTrainingPlanInformationById,
  getDepartmentTrainingPlanList,
  publishDepartmentTrainingPlan,
  setDepartmentTrainingPlanInformation,
};

export default departmentTrainingPlans;
