import actionNotifications from "./lib/actionNotifications.js";
export { actionNotifications };
import {
  client,
  errorToString,
  getErrorInformation,
  getErrorType,
  shouldReturnError,
} from "./lib/axiosClient.js";
export {
  client,
  errorToString,
  getErrorInformation,
  getErrorType,
  shouldReturnError,
};
import address from "./lib/address.js";
export { address };
import config from "./lib/config.js";
export { config };
import constants from "./lib/constants.js";
export { constants };
import contentGenerator from "./lib/integrations/contentGenerator.js";
export { contentGenerator };
import dashboard from "./lib/dashboard.js";
export { dashboard };
import departmentTraingPlans from "./lib/departmentTrainingPlans.js";
export { departmentTraingPlans };
import integration from "./lib/integration.js";
export { integration };
import integrationConfiguration from "./lib/integrationConfiguration.js";
export { integrationConfiguration };
import groups from "./lib/groups.js";
export { groups };
import learningContent from "./lib/learningContent.js";
export { learningContent };
import logger from "./lib/logger.js";
export { logger };
import role from "./lib/role.js";
export { role };
import roleTemplate from "./lib/roleTemplate.js";
export { roleTemplate };
import skill from "./lib/skill.js";
export { skill };
import skillAssessment from "./lib/skillAssessments.js";
export { skillAssessment };
import skillAssessmentTestingSession from "./lib/skillAssessmentTestingSession.js";
export { skillAssessmentTestingSession };
import skillTemplate from "./lib/skillTemplate.js";
export { skillTemplate };
import team from "./lib/teams.js";
export { team };
import tenant from "./lib/tenants.js";
export { tenant };
import trainingPlanTemplate from "./lib/trainingPlanTemplate.js";
export { trainingPlanTemplate };
import trainingPlan from "./lib/trainingPlans.js";
export { trainingPlan };
import userInformation from "./lib/userInformation.js";
export { userInformation };
import users from "./lib/users.js";
export { users };

export default {
  actionNotifications: actionNotifications,
  address: address,
  axios: client,
  config: config,
  contentGenerator: contentGenerator,
  dashboard: dashboard,
  errorToString: errorToString,
  getErrorInformation: getErrorInformation,
  getErrorType: getErrorType,
  DOCUMENT_VERSION: constants.DOCUMENT_VERSION,
  integration: integration,
  integrationConfiguration: integrationConfiguration,
  departmentTraingPlans: departmentTraingPlans,
  groups: groups,
  learningContent: learningContent,
  logger: logger,
  PERMISSIONS: constants.PERMISSIONS,
  RESONSE_TYPE: constants.RESONSE_TYPE,
  role: role,
  roleTemplate: roleTemplate,
  shouldReturnError: shouldReturnError,
  skill: skill,
  skillAssessment: skillAssessment,
  skillAssessmentTestingSession: skillAssessmentTestingSession,
  skillTemplate: skillTemplate,
  team: team,
  tenant: tenant,
  trainingPlanTemplate: trainingPlanTemplate,
  trainingPlan: trainingPlan,
  userInformation: userInformation,
  users: users,
};
