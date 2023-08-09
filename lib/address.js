import axios from "./axiosClient";

/**
 * Validate Address
 * @param {String} input - the address in raw format
 * @param {String} authToken - Authorization token
 */
export const autoComplete = (input, authToken) => {
  return new Promise(function (resolve, reject) {
    const getAddressesRequest = axios.post(
      `api/v1/address/autocomplete/`,
      { input: input },
      { headers: { authorization: authToken } }
    );
    getAddressesRequest
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
