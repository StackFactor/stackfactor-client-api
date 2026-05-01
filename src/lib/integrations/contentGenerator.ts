import { AxiosError, AxiosResponse } from "axios";
import { client } from "../axiosClient.js";
import { getBaseUrl } from "../utils.js";
import { io } from "socket.io-client";
import type { SocketError } from "../socketError.js";

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
    socket.on("error", (err: SocketError) => {
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
 * @param {String} id The id of the element for which the content is being generated
 * @param {String} elementType The type of the element for which the content is being generated (e.g. "skill", "skill template", etc.)
 * @param {Object} data The data to use for content generation
 * @param {String} contentType The type of content to generate (e.g. "text", "image", etc.)
 * @param {String} comments Any comments to include with the content generation request
 * @param {String} token The authentication token
 * @returns {Promise<object>}
 */
export const generateContentAsync = (
  id: string,
  elementType: string,
  data: object,
  contentType: string,
  comments: string,
  token: string,
): Promise<object> => {
  return new Promise((resolve, reject) => {
    const data_: GenerateContentAsyncData = {
      data: data,
      id: id,
      comments: comments,
      contentType: contentType,
      elementType: elementType,
    };
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
