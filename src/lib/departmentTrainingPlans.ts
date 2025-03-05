import { AxiosError, AxiosResponse } from "axios";
import { client } from "./axiosClient.js";

interface Activity {
  _id: string;
}

/**
 * Create department training plan and set information
 * @param {String} name
 * @param {String} summary
 * @param {String} skill
 * @param {Array<Activity>} activities
 * @param {String} token Authorization token
 * @returns {Promise<object>}
 */
export const createDepartmentTrainingPlan = (
  name: string,
  summary: string,
  skill: string,
  activities: Array<Activity>,
  token: string
): Promise<object> => {
  return new Promise((resolve, reject) => {
    const requestData = {
      name: name || "",
      summary: summary || "",
      skill: skill || "",
      activities: activities || [],
    };
    const confirmationRequest = client.put(
      "api/v1/departmentTrainingPlans",
      requestData,
      {
        headers: { authorization: token },
      }
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
 * Delete department training plan
 * @param {String} id The id of the template to be deleted
 * @param {String} token Authorization token
 * @returns {Promise<object>}
 */
export const deleteDepartmentTrainingPlan = (
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
      .then((response: AxiosResponse) => {
        resolve(response.data);
      })
      .catch((error: AxiosError) => {
        reject(error);
      });
  });
};

/**
 * Get department training plan information
 * @param {String} id The id of the plan
 * @param {String} version The version of the plan
 * @param {String} token Authorization token
 * @returns {Promise<object>}
 */
export const getDepartmentTrainingPlanInformationById = (
  id: string,
  version: string,
  token: string
): Promise<object> => {
  return new Promise((resolve, reject) => {
    const confirmationRequest = client.get(
      `api/v1/departmenttrainingplans/${id}/${version}`,
      {
        headers: { authorization: token },
      }
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
 * Get department training plan list
 * @param {String} filter The filter used to select the plan
 * @param {String} version The version of the plan
 * @param {String} token Authorization token
 * @returns {Promise<object>}
 */
export const getDepartmentTrainingPlanList = (
  filter: string,
  version: string,
  token: string
): Promise<object> => {
  return new Promise((resolve, reject) => {
    const requestData = {
      filter: filter || "",
      version: version,
    };
    const confirmationRequest = client.post(
      `api/v1/departmenttrainingplans`,
      requestData,
      {
        headers: { authorization: token },
      }
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
 * Publish department training plan
 * @param {String} id The id of the plan to be published
 * @param {String} token Authorization token
 * @returns {Promise<object>}
 */
export const publishDepartmentTrainingPlan = (
  id: string,
  token: string
): Promise<object> => {
  return new Promise((resolve, reject) => {
    const confirmationRequest = client.post(
      `api/v1/departmenttrainingplans/publish/${id}`,
      {},
      {
        headers: { authorization: token },
      }
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
 * Set department training plan profile information
 * @param {String} id The id of the plan to be updated
 * @param {Object} data Data used to update the plan
 * @param {String} token Authorization token
 * @returns {Promise<object>}
 */
export const setDepartmentTrainingPlanInformation = (
  id: string,
  data: object,
  token: string
): Promise<object> => {
  return new Promise((resolve, reject) => {
    const requestData = {
      data: data,
    };
    const confirmationRequest = client.post(
      `api/v1/departmenttrainingplans/${id}`,
      requestData,
      {
        headers: { authorization: token },
      }
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
