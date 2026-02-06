import { AxiosError, AxiosResponse } from "axios";
import { getBaseUrl } from "./utils.js";
import { client } from "./axiosClient.js";
import { io } from "socket.io-client";

interface LearningContentData {
  data?: object;
  id?: string;
  comments?: string;
  learningcontentid?: string;
  microSkillId?: string;
  tags?: object;
  watch?: boolean;
}

interface GenerateLearningActivityContentData {
  contentType: string;
  integrationId: string;
  learningObjectives: string;
  learningActivity: object;
  microSkillId: string;
  otherLearningActivities?: string[];
  skillId: string;
}

/**
 * Create learning content and set information
 * @param {Object} data Learning content data
 * @param {String} token Authorization token
 * @returns {Promise<object>} The created learning content
 */
export const createLearningContent = (
  data: object,
  token: string,
): Promise<object> => {
  return new Promise((resolve, reject) => {
    const requestData: LearningContentData = {
      data: data,
    };
    const confirmationRequest = client.put(
      "/api/v1/learningcontent",
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
 * Delete learning content
 * @param {String} id The id of the learning content to be deleted
 * @param {String} comments The comments included with the deletion
 * @param {String} token Authorization token
 * @returns {Promise<object>} The response from the server
 */
export const deleteLearningContent = (
  id: string,
  comments: string,
  token: string,
): Promise<object> => {
  const data: LearningContentData = {
    id: id,
  };
  if (comments) data.comments = comments;
  return new Promise((resolve, reject) => {
    const request = client.delete(`/api/v1/learningcontent/`, {
      headers: { authorization: token },
      data: data,
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
 * Delete media for a specific micro skill learning content activity
 * @param {String} id
 * @param {String} microskillid
 * @param {String} activityId
 * @param {String} mediaId
 * @param {String} token
 * @returns {Promise<object>} The response from the server
 * */
export const deleteLearningContentMicroSkillLearningContentActivityMedia = (
  id: string,
  microskillid: string,
  activityId: string,
  mediaId: string,
  token: string,
): Promise<object> => {
  return new Promise((resolve, reject) => {
    const confirmationRequest = client.delete(
      `/api/v1/learningcontent/media/${id}/${microskillid}/${activityId}/${mediaId}`,
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
 * Discard the learning content draft changes
 * @param {String} id The id of the learning content to be deleted
 * @param {String} token Authorization token
 * @returns {Promise<object>} The response from the server
 */
export const discardLearningContentChanges = (
  id: string,
  token: string,
): Promise<object> => {
  return new Promise((resolve, reject) => {
    const data = {};
    const request = client.get(`/api/v1/learningcontent/discard/${id}`, {
      headers: { authorization: token },
      data: data,
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
 * Generate the learning activity content
 * @param {String} learningObjectives
 * @param {String} skillId
 * @param {String} microSkillId
 * @param {Object} learningActivity
 * @param {List<String>} otherLearningActivities
 * @param {String} integrationId
 * @param {String} contentType
 * @param {String} token
 */
export const generateLearningActivityContent = (
  learningObjectives: string,
  skillId: string,
  microSkillId: string,
  learningActivity: object,
  otherLearningActivities: string[],
  integrationId: string,
  contentType: string,
  token: string,
  onProgressStatus?: (data: object) => void,
): Promise<object> => {
  return new Promise((resolve, reject) => {
    const requestData: GenerateLearningActivityContentData = {
      learningObjectives: learningObjectives,
      learningActivity: learningActivity,
      microSkillId: microSkillId,
      integrationId: integrationId,
      contentType: contentType,
      skillId: skillId,
    };
    if (otherLearningActivities) {
      requestData.otherLearningActivities = otherLearningActivities;
    }
    // Use socket.io for real-time progress updates
    const socket = io(getBaseUrl(), {
      auth: {
        token: token,
      },
      path: `/api/v1/contentgenerators`,
      transports: ["websocket"],
      withCredentials: true,
      reconnection: false,
    });

    // Socket event handlers
    socket.on("connect", () => {
      socket.emit("generatelearningactivitycontent", requestData);
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
 * Generate micro skill test knowledge
 * @param {String} microSkill
 * @param {String} token
 * @param {Function} onProgressStatus Optional callback for progress updates
 * @returns {Promise<object>}
 */
export const generateMicroSkillTestKnowledge = (
  microSkill: string,
  token: string,
  onProgressStatus?: (data: object) => void,
): Promise<object> => {
  return new Promise((resolve, reject) => {
    const requestData = {
      microSkill: microSkill,
    };
    // Use socket.io for real-time progress updates
    const socket = io(getBaseUrl(), {
      auth: {
        token: token,
      },
      path: `/api/v1/contentgenerators`,
      transports: ["websocket"],
      withCredentials: true,
      reconnection: false,
    });

    // Socket event handlers
    socket.on("connect", () => {
      socket.emit("generatemicroskilltestknowledge", requestData);
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
 * Get the learning content information by id
 * @param {String} id The id of the learning content
 * @param {String} version The version of the learning content
 * @param {String} token Authorization token
 * @returns {Promise<object>} The response from the server
 */
export const getLearningContentInformationById = (
  id: string,
  version: string,
  token: string,
): Promise<object> => {
  return new Promise((resolve, reject) => {
    const confirmationRequest = client.get(
      `/api/v1/learningcontent/${id}/${version}`,
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
 * Get the list of available content types
 * @param {Array<String>} filter The filter used to select the learning content
 * @param {String} version The version to be retrieved
 * @param {boolean} includeDeleted When true it will return the deleted records as well
 * @param {String} token Authorization token
 * @returns {Promise<Array<Object>>} The list of available content
 */
export const getLearningContentList = (
  filter: string[],
  version: string,
  includeDeleted: boolean,
  token: string,
): Promise<object[]> => {
  return new Promise((resolve, reject) => {
    const requestData: {
      version: string;
      includeDeleted: boolean;
      filter?: string[];
    } = {
      version: version,
      includeDeleted: includeDeleted,
    };
    if (filter) requestData.filter = filter;
    const confirmationRequest = client.post(
      `/api/v1/learningcontent`,
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
 * Get learning content scene audio
 * @param {String} id
 * @param {String} microSkillId
 * @param {String} learningActivityId
 * @param {String} sceneId
 * @param {String} token
 * @param {String} version
 */
export const getLearningContentMicroSkillLearningContentActivitySceneAudio = (
  contentId: string,
  microSkillId: string,
  learningActivityId: string,
  sceneId: string,
  token: string,
  version: string,
) => {
  return new Promise((resolve, reject) => {
    const confirmationRequest = client.get(
      `/api/v1/learningcontent/audio/${contentId}/${microSkillId}/${learningActivityId}/${sceneId}/${version}`,
      {
        headers: {
          authorization: token,
        },
        responseType: "blob",
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
 * Upload media for a specific micro skill learning content activity
 * @param {String} id
 * @param {String} microskillid
 * @param {String} activityId
 * @param {String} mediaId
 * @param {String} token
 * @returns {Promise<object>} The response from the server
 */
export const getLearningContentMicroSkillLearningContentActivityMedia = (
  id: string,
  microskillid: string,
  activityId: string,
  mediaId: string,
  token: string,
): Promise<object> => {
  return new Promise((resolve, reject) => {
    const confirmationRequest = client.get(
      `/api/v1/learningcontent/media/${id}/${microskillid}/${activityId}/${mediaId}`,
      {
        headers: {
          authorization: token,
        },
        responseType: "blob",
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
 * Migrate learning content storage
 * @param {String} id The id of the content to be migrated
 * @param {String} token Authorization token
 * @returns {Promise<object>} The response from the server
 */
export const migrateLearningContentStorageType = (
  id: string,
  token: string,
): Promise<object> => {
  return new Promise((resolve, reject) => {
    const data = {};
    const confirmationRequest = client.post(
      `/api/v1/learningcontent/migratestorage/${id}`,
      data,
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
 * Publish learning content
 * @param {String} id The id of the content to be published
 * @param {String} comments The comments to be include with the request
 * @param {String} token Authorization token
 * @returns {Promise<object>} The response from the server
 */
export const publishLearningContent = (
  id: string,
  comments: string,
  token: string,
): Promise<object> => {
  return new Promise((resolve, reject) => {
    const data: LearningContentData = {};
    if (comments) data.comments = comments;

    const confirmationRequest = client.post(
      `/api/v1/learningcontent/publish/${id}`,
      data,
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
 * Set learning content information
 * @param {String} id The id of the learning content to be updated
 * @param {Object} data Data used to update the learning content
 * @param {String} token Authorization token
 * @returns {Promise<object>} The updated learning content
 */
export const setLearningContentInformation = (
  id: string,
  data: object,
  token: string,
): Promise<object> => {
  return new Promise((resolve, reject) => {
    const requestData: LearningContentData = {
      data: data,
      id: id,
    };
    const confirmationRequest = client.post(
      `/api/v1/learningcontent/update`,
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
 * Set partial content information
 * @param {String} id
 * @param {Object} data
 * @param {String} token
 * @returns {Promise<object>}
 */
export const setLearningContentPartialContentInformation = (
  id: string,
  data: object,
  token: string,
): Promise<object> => {
  return new Promise((resolve, reject) => {
    const requestData: LearningContentData = {
      data: data,
      id: id,
    };
    const confirmationRequest = client.post(
      `/api/v1/learningcontent/updatepartialcontent/${id}`,
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
 * Set the content for a specific learning activity
 * @param {String} id
 * @param {String} learningcontentid
 * @param {String} microSkillId
 * @param {Object} data
 * @param {String} token
 * @returns {Promise<String>} OK word if the operation was successful
 */
export const setLearningContentLearningContentInformation = (
  id: string,
  learningcontentid: string,
  microSkillId: string,
  data: object,
  token: string,
): Promise<string> => {
  return new Promise((resolve, reject) => {
    const requestData: LearningContentData = {
      data: data,
      id: id,
      learningcontentid: learningcontentid,
      microSkillId: microSkillId,
    };
    const confirmationRequest = client.post(
      `/api/v1/learningcontent/updatelearningcontent/`,
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
 * Set all the learning content for a specific micro skill
 * @param {String} id
 * @param {String} microskillid
 * @param {Object} data
 * @param {String} token
 * @returns {Promise<String>} OK word if the operation was successful
 */
export const setLearningContentLearningMicroSkillContentInformation = (
  id: string,
  microskillid: string,
  data: object,
  token: string,
): Promise<string> => {
  return new Promise((resolve, reject) => {
    const requestData: LearningContentData = {
      data: data,
    };
    const confirmationRequest = client.post(
      `/api/v1/learningcontent/updatemicroskilllearningcontent/${id}/${microskillid}`,
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
 * Update the learning content tags
 * @param {String} id The id of the learning to be updated
 * @param {Object} tags Updated learning content tags
 * @param {String} token Authorization token
 */
export const setLearningContentTags = (
  id: string,
  tags: object,
  token: string,
): Promise<object> => {
  return new Promise((resolve, reject) => {
    const requestData: LearningContentData = {
      tags: tags,
      id: id,
    };
    const confirmationRequest = client.post(
      `/api/v1/learningcontent/updatetags/`,
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
 * Upload media for a specific micro skill learning content activity
 * @param {String} id
 * @param {String} microskillid
 * @param {String} activityId
 * @param {String} mediaId
 * @param {Blob} blob
 * @param {String} token
 * @returns {Promise<object>} The response from the server
 */
export const uploadLearningContentMicroSkillLearningContentActivityMedia = (
  id: string,
  microskillid: string,
  activityId: string,
  mediaId: string,
  blob: Blob,
  token: string,
): Promise<object> => {
  const formData = new FormData();
  formData.append("file", blob, "media.bin");
  return new Promise((resolve, reject) => {
    const confirmationRequest = client.post(
      `/api/v1/learningcontent/media/${id}/${microskillid}/${activityId}/${mediaId}`,
      formData,
      {
        headers: {
          authorization: token,
          "Content-Type": "multipart/form-data",
        },
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
 * Watch learning content
 * @param {String} id The id of the learning content to be updated
 * @param {Boolean} watch Set to true or false
 * @param {String} token Authorization token
 */
export const watchLearningContent = (
  id: string,
  watch: boolean,
  token: string,
): Promise<object> => {
  return new Promise((resolve, reject) => {
    const requestData: LearningContentData = {
      id: id,
      watch: watch,
    };
    const confirmationRequest = client.post(
      `/api/v1/learningcontent/watch`,
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
