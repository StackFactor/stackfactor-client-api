import { AxiosError, AxiosResponse } from "axios";
import { client } from "../axiosClient.js";
import { getBaseUrl } from "../utils.js";
import { io } from "socket.io-client";

interface GenerateContentData {
  data: object;
  contentType: string;
  integrationId?: string;
}

interface GenerateContentAsyncData {
  id: string;
  data: object;
  contentType: string;
  elementType: string;
  integrationId?: string;
  comments: string;
}

interface ProgressData {
  progress: object;
}

/**
 * Generate content
 * @param {Array<String>} data
 * @param {String} contentType
 * @param {String} integrationId
 * @param {String} token
 * @param {Boolean} realtimeProgressStatus
 * @returns {Promise<object>}
 */
export const generateContent = (
  data: object,
  contentType: string,
  integrationId: string,
  token: string,
  onProgressStatus: ((progress: ProgressData) => void) | null = null,
): Promise<object> => {
  return new Promise((resolve, reject) => {
    // Prepare data
    const requestData: GenerateContentData = {
      data: data,
      contentType: contentType,
    };
    // Add integrationId if provided
    if (integrationId) requestData.integrationId = integrationId;
    // Use socket.io for real-time progress updates
    const socket = io(getBaseUrl(), {
      auth: {
        token: token,
      },
      path: `/api/v1/realtime`,
      transports: ["websocket"],
      withCredentials: true,
      reconnection: false,
    });
    // Socket event handlers
    socket.on("connect", () => {
      socket.emit("generate", requestData);
    });
    socket.on("progress", (data) => {
      if (onProgressStatus) {
        onProgressStatus(data);
      }
    });
    socket.on("complete", (data) => {
      socket.disconnect();
      resolve(data);
    });
    socket.on("error", (err) => {
      socket.disconnect();
      reject(err);
    });
    socket.on("disconnect", (reason) => {
      if (reason !== "io client disconnect") {
        reject(new Error(`Socket disconnected: ${reason}`));
      }
    });
  });
};

/**
 * Generate content async
 * @param {String} id
 * @param {Object} data
 * @param {String} contentType
 * @param {String} elementType
 * @param {String} integrationId
 * @param {String} comments
 * @param {String} token
 * @returns {Promise<object>}
 */
export const generateContentAsync = (
  id: string,
  data: object,
  contentType: string,
  elementType: string,
  integrationId: string,
  comments: string,
  token: string,
): Promise<object> => {
  return new Promise((resolve, reject) => {
    const data_: GenerateContentAsyncData = {
      id: id,
      data: data,
      comments: comments,
      contentType: contentType,
      elementType: elementType,
    };
    if (integrationId) data_.integrationId = integrationId;
    const request = client.post(
      `/api/v1/contentgeneratorsasync/generate`,
      data_,
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
