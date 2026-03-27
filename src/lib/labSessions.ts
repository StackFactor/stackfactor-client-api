import { AxiosError, AxiosResponse } from "axios";
import { client } from "./axiosClient.js";
import { getBaseUrl } from "./utils.js";
import { io } from "socket.io-client";

interface LaunchLabSessionData {
  id: string;
}

interface CreateNewLabSessionData {
  learningContentId: string;
  learningContentMicroSkillId: string;
  labId: string;
}

interface ProgressData {
  progress: object;
}

/**
 * Create a new lab session
 * @param {String} learningContentId - The id of the learning content associated with the lab session
 * @param {String} learningContentMicroSkillId - The id of the micro-skill associated with the learning content
 * @param {String} labId - The id of the lab from the learning content microskill associated with the lab session
 * @param {String} token Authorization token
 */
export const createLabSession = (
  learningContentId: string,
  learningContentMicroSkillId: string,
  labId: string,
  token: string,
): Promise<object> => {
  return new Promise((resolve, reject) => {
    const requestData: CreateNewLabSessionData = {
      learningContentId,
      learningContentMicroSkillId,
      labId,
    };
    const confirmationRequest = client.put(
      "/api/v1/labsessions/",
      requestData,
      {
        headers: { authorization: token },
      },
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
  token: string,
  onProgressStatus: ((progress: ProgressData) => void) | null = null,
): Promise<object> => {
  return new Promise((resolve, reject) => {
    // Prepare data
    const requestData: LaunchLabSessionData = {
      id,
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
