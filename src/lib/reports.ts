import { AxiosError, AxiosResponse } from "axios";
import { client } from "./axiosClient.js";

interface TrainingSummaryFilter {
  businessUnits?: string[];
  organizations?: string[];
  costCenters?: string[];
  teamIds?: string[];
}

/**
 * Get training summary details filtered by team dimensions and time interval
 * @param {Object} filter Filter with optional businessUnit, organization, costCenter, teamId
 * @param {String} interval The time-window: "thisWeek", "thisMonth", "thisQuarter", or "thisYear"
 * @param {String} token Authorization token
 * @returns {Promise<object[]>} The training summary details
 */
export const getTrainingSummaryDetails = (
  filter: TrainingSummaryFilter,
  interval: "thisWeek" | "thisMonth" | "thisQuarter" | "thisYear",
  token: string,
): Promise<object[]> => {
  return new Promise((resolve, reject) => {
    const requestData = {
      filter: filter,
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
