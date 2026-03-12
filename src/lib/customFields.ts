import { AxiosError, AxiosResponse } from "axios";
import { client } from "./axiosClient.js";

export type CustomFieldElementType =
  | "LEARNING_CONTENT"
  | "LEARNING_CONTENT_MICROSKILL"
  | "ROLE"
  | "SKILL"
  | "TEAM"
  | "USER";

/**
 * Get custom fields by element type
 * @param {CustomFieldElementType} elementType The element type to retrieve custom fields for
 * @param {String} token Authorization token
 * @returns {Promise<object>}
 */
export const getByElementType = (
  elementType: CustomFieldElementType,
  token: string,
): Promise<object> => {
  return new Promise((resolve, reject) => {
    const request = client.get(
      `/api/v1/customfields/${encodeURIComponent(elementType)}`,
      {
        headers: { authorization: token },
      },
    );
    request
      .then((response: AxiosResponse) => {
        resolve(response.data);
      })
      .catch((error: AxiosError) => {
        reject(error);
      });
  });
};
