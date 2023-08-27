import actionNotifications from "./lib/actionNotifications.js";
import {
  client,
  errorToString,
  getErrorInformation,
  getErrorType,
  shouldReturnError,
} from "./lib/axiosClient.js";
import address from "./lib/address.js";
import config from "./lib/config.js";
import {
  DOCUMENT_VERSION,
  PERMISSIONS,
  RESPONSE_TYPE,
} from "./lib/constants.js";
import contentGenerator from "./lib/integrations/contentGenerator.js";
import dashboard from "./lib/dashboard.js";
import departmentTraingPlans from "./lib/departmentTrainingPlans.js";
import integration from "./lib/integration.js";
import integrationConfiguration from "./lib/integrationConfiguration.js";
import groups from "./lib/groups.js";
import learningContent from "./lib/learningContent.js";
import learningPath from "./lib/learningPath.js";
import logger from "./lib/logger.js";
import role from "./lib/role.js";
import roleTemplate from "./lib/roleTemplate.js";
import skill from "./lib/skill.js";
import skillAssessment from "./lib/skillAssessments.js";
import skillAssessmentTestingSession from "./lib/skillAssessmentTestingSession.js";
import skillTemplate from "./lib/skillTemplate.js";
import team from "./lib/teams.js";
import tenant from "./lib/tenants.js";
import trainingPlan from "./lib/trainingPlans.js";
import userInformation from "./lib/userInformation.js";
import users from "./lib/users.js";

export {
  actionNotifications,
  address,
  client,
  config,
  contentGenerator,
  dashboard,
  errorToString,
  getErrorInformation,
  getErrorType,
  DOCUMENT_VERSION,
  integration,
  integrationConfiguration,
  departmentTraingPlans,
  groups,
  learningContent,
  learningPath,
  logger,
  PERMISSIONS,
  RESPONSE_TYPE,
  role,
  roleTemplate,
  shouldReturnError,
  skill,
  skillAssessment,
  skillAssessmentTestingSession,
  skillTemplate,
  team,
  tenant,
  trainingPlan,
  userInformation,
  users,
};
