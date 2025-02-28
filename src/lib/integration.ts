import { client, errorToString } from "./axiosClient";
import axiosLib from "axios";
import htmlParser from "node-html-parser";
import htmlToText from "html2plaintext";

interface IntegrationData {
  data: object;
}

interface IntegrationFilter {
  filter?: string[];
  type?: string;
  version: string;
  includeSupportedCapabilities: boolean;
}

interface ContentInformation {
  url: string;
  verb: string;
}

interface ContentInformationResponse {
  description: string;
  duration: number;
  icon: string;
  title: string;
  type: number;
  internal: boolean;
}

/**
 * Create integration and set information
 * @param {Object} data The new integration information
 * @param {String} token Authorization token
 */
export const createIntegration = (
  data: object,
  token: string
): Promise<object> => {
  return new Promise((resolve, reject) => {
    const requestData: IntegrationData = {
      data: data,
    };
    const confirmationRequest = client.put("api/v1/integrations/", requestData, {
      headers: { authorization: token },
    });
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
 * Delete integration
 * @param {String} id The id of the integration to be deleted
 * @param {String} token Authorization token
 */
export const deleteIntegration = (
  id: string,
  token: string
): Promise<object> => {
  return new Promise((resolve, reject) => {
    const request = client.delete(`api/v1/integrations/`, {
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
 * Discard the integration draft changes
 * @param {String} id The id of the role template to be deleted
 * @param {String} token Authorization token
 */
export const discardIntegrationChanges = (
  id: string,
  token: string
): Promise<object> => {
  return new Promise((resolve, reject) => {
    const data = {};
    const request = client.get(`api/v1/integrations/discard/${id}`, {
      headers: { authorization: token },
      data: data,
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
 * Get integration information
 * @param {String} id The id of the integration
 * @param {String} version The version of the integration to be received
 * @param {String} token Authorization token
 */
export const getIntegrationInformationById = (
  id: string,
  version: string,
  token: string
): Promise<object> => {
  return new Promise((resolve, reject) => {
    const confirmationRequest = client.get(
      `api/v1/integrations/${id}/${version}`,
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
 * Get integrations list
 * @param {Array<String>} filter The filter used to select the integration
 * @param {String} type The type of the integration
 * @param {String} version The version to be retrieved
 * @param {Boolean} includeSupportedCapabilities If true, the supported capabilities will be included in the response
 * @param {String} token Authorization token
 */
export const getIntegrationsList = (
  filter: string[],
  type: string,
  version: string,
  includeSupportedCapabilities: boolean,
  token: string
): Promise<object> => {
  return new Promise((resolve, reject) => {
    const requestData: IntegrationFilter = {
      includeSupportedCapabilities: includeSupportedCapabilities,
      version: version,
    };
    if (filter) requestData.filter = filter;
    if (type) requestData.type = type;
    const confirmationRequest = client.post(`api/v1/integrations`, requestData, {
      headers: { authorization: token },
    });
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
 * Get content information by Url
 * @param {String} url The training url
 * @param {String} verb The verb
 * @param {String} token Authorization token
 */
export const getContentInformationByUrl = (
  url: string,
  verb: string,
  token: string
): Promise<object> => {
  return new Promise((resolve, reject) => {
    const requestData: ContentInformation = {
      url: url,
      verb: verb,
    };
    const confirmationRequest = client.post(
      `api/v1/contentproviders/getcontentinformationbyurl`,
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
 * Get content information by url from the browser instead of the backend
 * @param {String} url
 * @returns {Promise<ContentInformationResponse>}
 */
export const getContentInformationByUrlFromBrowser = (
  url: string
): Promise<ContentInformationResponse> => {
  return new Promise((resolve, reject) => {
    const domain = new URL(url);
    const instance = axiosLib.create({
      baseURL: domain.origin,
    });
    const confirmationRequest = instance.get(domain.pathname, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers":
          "Authorization, Origin, X-Requested-With, Content-Type, Accept",
        Accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
        "Accept-Encoding": "gzip, deflate, br",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
        "User-Agent": "Mozilla/5.0",
      },
    });
    confirmationRequest
      .then((response) => {
        //get the reading time
        const getReadingTime = (text: string): number => {
          const wpm = 225;
          const words = text.trim().split(/\s+/).length;
          return Math.ceil(words / wpm);
        };

        const document = htmlParser.parse(response.data);
        const duration = getReadingTime(htmlToText(response.data));
        const titleTag = document.querySelector("title");
        const title = titleTag ? titleTag.rawText : "";
        let description = "";
        const descriptionEl = document.querySelector("meta");
        try {
          if (descriptionEl) {
            const descriptionParentNode = descriptionEl.parentNode;
            if (descriptionParentNode) {
              const descriptionChildNodes = descriptionParentNode.childNodes;
              if (descriptionChildNodes) {
                const descriptionRawAttr = descriptionChildNodes.find((item) =>
                  (item as any).rawAttrs.includes("description")
                );
                if (descriptionRawAttr) {
                  const descriptionContent = (
                    descriptionRawAttr as any
                  ).rawAttrs.substring(
                    (descriptionRawAttr as any).rawAttrs.indexOf("content=") + 9
                  );
                  description = descriptionContent.substring(
                    0,
                    descriptionContent.length - 1
                  );
                }
              }
            }
          }
        } finally {
          resolve({
            description: description,
            duration: duration,
            icon: `http://www.google.com/s2/favicons?sz=128&domain_url=${domain.hostname}`,
            title: title ? title.trim() : url,
            type: 0,
            internal: true,
          });
        }
      })
      .catch((error) => {
        reject(new Error(errorToString(error)));
      });
  });
};

/**
 * Get enabled content providers
 * @param {String} userId
 * @param {String} token Authorization token
 */
export const getEnabledContentProviders = (
  userId: string,
  token: string
): Promise<object> => {
  return new Promise((resolve, reject) => {
    const confirmationRequest = client.get(
      `api/v1/contentproviders/getenabledcontentproviders/${userId}`,
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
 * Publish integration
 * @param {String} id The id of the integration to be published
 * @param {String} token Authorization token
 */
export const publishIntegration = (
  id: string,
  token: string
): Promise<object> => {
  return new Promise((resolve, reject) => {
    const confirmationRequest = client.post(
      `api/v1/integrations/publish/${id}`,
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
 * Set integration information
 * @param {String} id The id of the integration to be updated
 * @param {Object} data Data used to update the integration
 * @param {String} token Authorization token
 */
export const setIntegrationInformation = (
  id: string,
  data: object,
  token: string
): Promise<object> => {
  return new Promise((resolve, reject) => {
    const requestData: IntegrationData = {
      data: data,
    };
    const confirmationRequest = client.post(
      `api/v1/integrations/${id}`,
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
 * Set default integration
 * @param {String} id The id of the integration to be set as default
 * @param {String} token Authorization token
 */
export const setDefaultIntegration = (
  id: string,
  token: string
): Promise<object> => {
  return new Promise((resolve, reject) => {
    const confirmationRequest = client.post(
      `api/v1/integrations/${id}/default`,
      "",
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
  createIntegration,
  deleteIntegration,
  discardIntegrationChanges,
  getContentInformationByUrl,
  getContentInformationByUrlFromBrowser,
  getEnabledContentProviders,
  getIntegrationInformationById,
  getIntegrationsList,
  publishIntegration,
  setDefaultIntegration,
  setIntegrationInformation,
};
