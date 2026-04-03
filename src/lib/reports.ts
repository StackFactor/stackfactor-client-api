import { AxiosError, AxiosResponse } from "axios";
import { client } from "./axiosClient.js";

interface TrainingSummaryFilter {
  businessUnit?: string[];
  organization?: string[];
  costCenter?: string[];
  teamIds?: string[];
}

type TrainingSummaryInterval =
  | "lastWeek"
  | {
      start: { month: number; year: number };
      end: { month: number; year: number };
    };

type TrainingSummarySchema =
  | "LEARNING_ACTIVITIES_COMPLETED"
  | "TIME_SPENT_IN_TRAINING"
  | "PROFICIENCY_LEVEL_COMPLETION"
  | "PROFICIENCY_IMPROVEMENT";

/**
 * Get objectives KPI actuals
 * @param {String} token Authorization token
 * @returns {Promise<object>} The objectives KPI actuals
 */
export const getObjectivesKpiActuals = (token: string): Promise<object> => {
  return new Promise((resolve, reject) => {
    const request = client.get(`/api/v1/reports/getobjectiveskpiactuals/`, {
      headers: { authorization: token },
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
 * Get available filters for training summary details
 * @param {String} token Authorization token
 * @returns {Promise<object>} The available filter options (businessUnits, organizations, costCenters, teams)
 */
export const getTrainingSummaryDetailFilters = (
  token: string,
): Promise<object> => {
  return new Promise((resolve, reject) => {
    const request = client.get(`/api/v1/reports/trainingsummarydetailfilters`, {
      headers: { authorization: token },
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
 * Get training summary details filtered by team dimensions, schema, and time interval
 * @param {Object} filter Filter with optional businessUnit, organization, costCenter, teamIds
 * @param {String} schema The data schema to return
 * @param {String|Object} interval "lastWeek" or a custom range with start/end month and year
 * @param {String} token Authorization token
 * @returns {Promise<object[]>} The training summary details
 */
export const getTrainingSummaryDetails = (
  filter: TrainingSummaryFilter,
  schema: TrainingSummarySchema,
  interval: TrainingSummaryInterval,
  token: string,
): Promise<object[]> => {
  return new Promise((resolve, reject) => {
    const requestData = {
      filter: filter,
      schema: schema,
      interval: interval,
    };
    const confirmationRequest = client.post(
      `/api/v1/reports/trainingsummarydetails`,
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
