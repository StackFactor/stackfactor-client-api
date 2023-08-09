import { client } from "./axiosClient";

/**
 * Add an entry to an array type business property such as experience, education or certifications
 * @param {String} userId
 * @param {String} property
 * @param {Object} data
 * @param {String} token Authorization token
 */
export const addEntryToArrayBusinessProperty = (
  userId,
  property,
  data,
  token
) => {
  return new Promise(function (resolve, reject) {
    const requestData = {
      data: data,
    };
    let confirmationRequest = client.post(
      `api/v1/user/arrayproperty/${userId}/${property}`,
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
 * Update an entry from an array type business property such as experience, education or certifications
 * @param {String} userId
 * @param {String} property
 * @param {String} id
 * @param {String} token Authorization token
 */
export const removeEntryFromArrayBusinessProperty = (
  userId,
  property,
  id,
  token
) => {
  return new Promise(function (resolve, reject) {
    const confirmationRequest = client.delete(
      `api/v1/user/arrayproperty/${userId}/${property}/${id}`,
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
 * Update an entry from an array type business property such as experience, education or certifications
 * @param {String} userId
 * @param {String} property
 * @param {String} id
 * @param {Object} data
 * @param {String} token Authorization token
 */
export const updateEntryfromArrayBusinessProperty = (
  userId,
  property,
  id,
  data,
  token
) => {
  return new Promise(function (resolve, reject) {
    const requestData = {
      data: data,
    };
    let confirmationRequest = client.patch(
      `api/v1/user/arrayproperty/${userId}/${property}/${id}`,
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

export default {
  addEntryToArrayBusinessProperty: addEntryToArrayBusinessProperty,
  removeEntryFromArrayBusinessProperty: removeEntryFromArrayBusinessProperty,
  updateEntryfromArrayBusinessProperty: updateEntryfromArrayBusinessProperty,
};
