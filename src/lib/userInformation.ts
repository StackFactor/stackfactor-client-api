import { AxiosError, AxiosResponse } from "axios";
import { client } from "./axiosClient.js";

/**
 * Add an entry to an array type business property such as experience, education or certifications
 * @param {String} userId
 * @param {String} property
 * @param {Object} data
 * @param {String} token Authorization token
 * @returns {Promise<object>}
 */
export const addEntryToArrayBusinessProperty = (
  userId: string,
  property: string,
  data: object,
  token: string
): Promise<object> => {
  return new Promise((resolve, reject) => {
    const requestData = {
      data: data,
    };
    const confirmationRequest = client.post(
      `/api/v1/user/arrayproperty/${userId}/${property}`,
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
 * Remove an entry from an array type business property such as experience, education or certifications
 * @param {String} userId
 * @param {String} property
 * @param {String} id
 * @param {String} token Authorization token
 * @returns {Promise<object>}
 */
export const removeEntryFromArrayBusinessProperty = (
  userId: string,
  property: string,
  id: string,
  token: string
): Promise<object> => {
  return new Promise((resolve, reject) => {
    const confirmationRequest = client.delete(
      `/api/v1/user/arrayproperty/${userId}/${property}/${id}`,
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
 * Update an entry from an array type business property such as experience, education or certifications
 * @param {String} userId
 * @param {String} property
 * @param {String} id
 * @param {Object} data
 * @param {String} token Authorization token
 * @returns {Promise<object>}
 */
export const updateEntryfromArrayBusinessProperty = (
  userId: string,
  property: string,
  id: string,
  data: object,
  token: string
): Promise<object> => {
  return new Promise((resolve, reject) => {
    const requestData = {
      data: data,
    };
    const confirmationRequest = client.patch(
      `/api/v1/user/arrayproperty/${userId}/${property}/${id}`,
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
