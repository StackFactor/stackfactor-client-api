import { AxiosError, AxiosResponse } from "axios";
import { client } from "./axiosClient";

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
  learningObjectives: string;
  learningActivity: object;
  microSkillId: string;
  sections: string[];
  otherLearningActivities?: string[];
}

/**
 * Create learning content and set information
 * @param {Object} data Learning content data
 * @param {String} token Authorization token
 * @returns {Promise<object>} The created learning content
 */
const createLearningContent = (
  data: object,
  token: string
): Promise<object> => {
  return new Promise((resolve, reject) => {
    const requestData: LearningContentData = {
      data: data,
    };
    const confirmationRequest = client.put(
      "api/v1/learningcontent",
      requestData,
      {
        headers: { authorization: token },
      }
    );
    confirmationRequest
      .then((response : AxiosResponse) => {
        resolve(response.data);
      })
      .catch((error : AxiosError) => {
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
const deleteLearningContent = (
  id: string,
  comments: string,
  token: string
): Promise<object> => {
  const data: LearningContentData = {
    id: id,
  };
  if (comments) data.comments = comments;
  return new Promise((resolve, reject) => {
    const request = client.delete(`api/v1/learningcontent/`, {
      headers: { authorization: token },
      data: data,
    });
    request
      .then((response : AxiosResponse) => {
        resolve(response.data);
      })
      .catch((error : AxiosError) => {
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
const discardLearningContentChanges = (
  id: string,
  token: string
): Promise<object> => {
  return new Promise((resolve, reject) => {
    const data = {};
    const request = client.get(`api/v1/learningcontent/discard/${id}`, {
      headers: { authorization: token },
      data: data,
    });
    request
      .then((response : AxiosResponse) => {
        resolve(response.data);
      })
      .catch((error : AxiosError) => {
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
 * @param {List<String>} sections
 * @param {String} token
 */
const generateLearningActivityContent = (
  learningObjectives: string,
  skillId: string,
  microSkillId: string,
  learningActivity: object,
  otherLearningActivities: string[],
  sections: string[],
  token: string
): Promise<object> => {
  return new Promise((resolve, reject) => {
    const requestData: GenerateLearningActivityContentData = {
      learningObjectives: learningObjectives,
      learningActivity: learningActivity,
      microSkillId: microSkillId,
      sections: sections,
    };
    if (otherLearningActivities) {
      requestData.otherLearningActivities = otherLearningActivities;
    }
    const request = client.post(
      `api/v1/learningcontent/generatelearningactivitycontent/${skillId}`,
      requestData,
      {
        headers: { authorization: token },
      }
    );
    request
      .then((response : AxiosResponse) => {
        resolve(response.data);
      })
      .catch((error : AxiosError) => {
        reject(error);
      });
  });
};

/**
 * Generate micro skill test knowledge
 * @param {String} microSkill
 * @param {String} token
 * @returns {Promise<object>}
 */
const generateMicroSkillTestKnowledge = (
  microSkill: string,
  token: string
): Promise<object> => {
  return new Promise((resolve, reject) => {
    const data = {
      microSkill: microSkill,
    };
    const confirmationRequest = client.post(
      `api/v1/learningcontent/generatemicroskilltestknowledge`,
      data,
      {
        headers: { authorization: token },
      }
    );
    confirmationRequest
      .then((response : AxiosResponse) => {
        resolve(response.data);
      })
      .catch((error : AxiosError) => {
        reject(error);
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
const getLearningContentInformationById = (
  id: string,
  version: string,
  token: string
): Promise<object> => {
  return new Promise((resolve, reject) => {
    const confirmationRequest = client.get(
      `api/v1/learningcontent/${id}/${version}`,
      {
        headers: { authorization: token },
      }
    );
    confirmationRequest
      .then((response : AxiosResponse) => {
        resolve(response.data);
      })
      .catch((error : AxiosError) => {
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
const getLearningContentList = (
  filter: string[],
  version: string,
  includeDeleted: boolean,
  token: string
): Promise<object[]> => {
  return new Promise((resolve, reject) => {
    const requestData: { version: string; includeDeleted: boolean; filter?: string[] } = {
      version: version,
      includeDeleted: includeDeleted,
    };
    if (filter) requestData.filter = filter;
    const confirmationRequest = client.post(
      `api/v1/learningcontent`,
      requestData,
      {
        headers: { authorization: token },
      }
    );
    confirmationRequest
      .then((response : AxiosResponse) => {
        resolve(response.data);
      })
      .catch((error : AxiosError) => {
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
const migrateLearningContentStorageType = (
  id: string,
  token: string
): Promise<object> => {
  return new Promise((resolve, reject) => {
    const data = {};
    const confirmationRequest = client.post(
      `api/v1/learningcontent/migratestorage/${id}`,
      data,
      {
        headers: { authorization: token },
      }
    );
    confirmationRequest
      .then((response : AxiosResponse) => {
        resolve(response.data);
      })
      .catch((error : AxiosError) => {
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
const publishLearningContent = (
  id: string,
  comments: string,
  token: string
): Promise<object> => {
  return new Promise((resolve, reject) => {
    const data: LearningContentData = {};
    if (comments) data.comments = comments;

    const confirmationRequest = client.post(
      `api/v1/learningcontent/publish/${id}`,
      data,
      {
        headers: { authorization: token },
      }
    );
    confirmationRequest
      .then((response : AxiosResponse) => {
        resolve(response.data);
      })
      .catch((error : AxiosError) => {
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
const setLearningContentInformation = (
  id: string,
  data: object,
  token: string
): Promise<object> => {
  return new Promise((resolve, reject) => {
    const requestData: LearningContentData = {
      data: data,
      id: id,
    };
    const confirmationRequest = client.post(
      `api/v1/learningcontent/update`,
      requestData,
      {
        headers: { authorization: token },
      }
    );
    confirmationRequest
      .then((response : AxiosResponse) => {
        resolve(response.data);
      })
      .catch((error : AxiosError) => {
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
const setLearningContentPartialContentInformation = (
  id: string,
  data: object,
  token: string
): Promise<object> => {
  return new Promise((resolve, reject) => {
    const requestData: LearningContentData = {
      data: data,
      id: id,
    };
    const confirmationRequest = client.post(
      `api/v1/learningcontent/updatepartialcontent/${id}`,
      requestData,
      {
        headers: { authorization: token },
      }
    );
    confirmationRequest
      .then((response : AxiosResponse) => {
        resolve(response.data);
      })
      .catch((error : AxiosError) => {
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
const setLearningContentLearningContentInformation = (
  id: string,
  learningcontentid: string,
  microSkillId: string,
  data: object,
  token: string
): Promise<string> => {
  return new Promise((resolve, reject) => {
    const requestData: LearningContentData = {
      data: data,
      id: id,
      learningcontentid: learningcontentid,
      microSkillId: microSkillId,
    };
    const confirmationRequest = client.post(
      `api/v1/learningcontent/updatelearningcontent/`,
      requestData,
      {
        headers: { authorization: token },
      }
    );
    confirmationRequest
      .then((response : AxiosResponse) => {
        resolve(response.data);
      })
      .catch((error : AxiosError) => {
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
const setLearningContentLearningMicroSkillContentInformation = (
  id: string,
  microskillid: string,
  data: object,
  token: string
): Promise<string> => {
  return new Promise((resolve, reject) => {
    const requestData: LearningContentData = {
      data: data,
    };
    const confirmationRequest = client.post(
      `api/v1/learningcontent/updatemicroskilllearningcontent/${id}/${microskillid}`,
      requestData,
      {
        headers: { authorization: token },
      }
    );
    confirmationRequest
      .then((response : AxiosResponse) => {
        resolve(response.data);
      })
      .catch((error : AxiosError) => {
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
const setLearningContentTags = (
  id: string,
  tags: object,
  token: string
): Promise<object> => {
  return new Promise((resolve, reject) => {
    const requestData: LearningContentData = {
      tags: tags,
      id: id,
    };
    const confirmationRequest = client.post(
      `api/v1/learningcontent/updatetags/`,
      requestData,
      {
        headers: { authorization: token },
      }
    );
    confirmationRequest
      .then((response : AxiosResponse) => {
        resolve(response.data);
      })
      .catch((error : AxiosError) => {
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
const watchLearningContent = (
  id: string,
  watch: boolean,
  token: string
): Promise<object> => {
  return new Promise((resolve, reject) => {
    const requestData: LearningContentData = {
      id: id,
      watch: watch,
    };
    const confirmationRequest = client.post(
      `api/v1/learningcontent/watch`,
      requestData,
      {
        headers: { authorization: token },
      }
    );
    confirmationRequest
      .then((response : AxiosResponse) => {
        resolve(response.data);
      })
      .catch((error : AxiosError) => {
        reject(error);
      });
  });
};

export default {
  createLearningContent,
  deleteLearningContent,
  discardLearningContentChanges,
  getLearningContentInformationById,
  generateLearningActivityContent,
  generateMicroSkillTestKnowledge,
  getLearningContentList,
  migrateLearningContentStorageType,
  publishLearningContent,
  setLearningContentPartialContentInformation,
  setLearningContentLearningContentInformation,
  setLearningContentLearningMicroSkillContentInformation,
  setLearningContentInformation,
  setLearningContentTags,
  watchLearningContent,
};
