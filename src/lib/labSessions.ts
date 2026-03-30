import { AxiosError, AxiosResponse } from "axios";
import { client } from "./axiosClient.js";
import { getBaseUrl } from "./utils.js";
import { io } from "socket.io-client";

interface LaunchLabSessionData {
  id: string;
  mode: "default" | "preview";
}

interface ProgressData {
  progress: object;
}

/**
 * Delete lab session
 * @param {String} id The id of the lab session to be deleted
 * @param {String} token Authorization token
 */
export const deleteLabSession = (
  id: string,
  token: string,
): Promise<object> => {
  return new Promise((resolve, reject) => {
    const request = client.delete(`/api/v1/labsessions/`, {
      headers: { authorization: token },
      data: {
        id: id,
      },
    });
    request
      .then((response: AxiosResponse) => {
        resolve(response.data);
      })
      .catch((error: AxiosError) => {
        reject(error);
      });
  });
};

/**
 * Get lab session readiness status
 * @param {String} id The id of the lab session
 * @param {String} token Authorization token
 * @returns {Promise<object>}
 */
export const getLabSessionReadiness = (
  id: string,
  token: string,
): Promise<object> => {
  return new Promise((resolve, reject) => {
    const request = client.get(`/api/v1/labsessions/${id}`, {
      headers: { authorization: token },
    });
    request
      .then((response: AxiosResponse) => {
        resolve(response.data);
      })
      .catch((error: AxiosError) => {
        reject(error);
      });
  });
};

/**
 * Launch a lab session
 * @param {String} id - The id of the lab session to launch
 * @param {String} token - The authentication token
 * @param {Function} onProgressStatus - Callback function for real-time progress updates
 * @returns {Promise<object>}
 */
export const launchLabSession = (
  id: string,
  mode: "default" | "preview" = "default",
  token: string,
  onProgressStatus: ((progress: ProgressData) => void) | null = null,
): Promise<object> => {
  return new Promise((resolve, reject) => {
    // Prepare data
    const requestData: LaunchLabSessionData = {
      id,
      mode,
    };
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
      socket.emit("launchlabsession", requestData);
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
