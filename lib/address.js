import { client } from "./axiosClient.js";

/**
 * Validate Address
 * @param {String} input - the address in raw format
 * @param {String} authToken - Authorization token
 */
const autoComplete = (input, authToken) => {
  return new Promise(function (resolve, reject) {
    const getAddressesRequest = client.post(
      `api/v1/address/autocomplete/`,
      { input: input },
      { headers: { authorization: authToken }, withCredentials: true }
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

export default { autoComplete };
