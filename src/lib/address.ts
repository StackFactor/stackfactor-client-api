import { AxiosError, AxiosResponse } from "axios";
import { client } from "./axiosClient.js";

/**
 * Validate Address
 * @param {String} input - the address in raw format
 * @param {String} authToken - Authorization token
 * @returns {Promise<object>}
 */
export const autoComplete = (
  input: string,
  authToken: string
): Promise<object> => {
  return new Promise((resolve, reject) => {
    const getAddressesRequest = client.post(
      `/api/v1/address/autocomplete/`,
      { input: input },
      { headers: { authorization: authToken } }
    );
    getAddressesRequest
      .then((response: AxiosResponse) => {
        resolve(response.data);
      })
      .catch((error: AxiosError) => {
        reject(error);
      });
  });
};
