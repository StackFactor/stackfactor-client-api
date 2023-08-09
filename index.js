import actionNotifications from "./lib/actionNotifications.js";
export * from "./actionNotification.js";
import axios, {
  errorToString,
  getErrorType,
  shouldReturnError,
} from "./lib/axiosClient.js";
export * from "./lib/axiosClient.js";
import address from "./lib/address.js";
export * from "./lib/address.js";
import config from "./lib/config.js";
export * from "./lib/config.js";
import constants from "./lib/constants.js";
import contentGenerator from "./lib/integrations/contentGenerator.js";
export * from "./lib/contentGenerator.js";
import dashboard from "./lib/dashboard.js";
export * from "./lib/dashboard.js";
import departmentTraingPlans from "./lib/departmentTrainingPlans.js";
export * from "./lib/departmentTrainingPlans.js";
import integration from "./lib/integration.js";
export * from "./lib/integration.js";
import integrationConfiguration from "./lib/integrationConfiguration.js";
export * from "./lib/integrationConfiguration.js";
import groups from "./lib/groups.js";
export * from "./lib/groups.js";
import learningContent from "./lib/learningContent.js";
export * from "./lib/learningContent.js";
import logger from "./lib/logger.js";
export * from "./lib/logger.js";
import role from "./lib/role.js";
export * from "./lib/role.js";
import roleTemplate from "./lib/roleTemplate.js";
export * from "./lib/roleTemplate.js";
import skill from "./lib/skill.js";
export * from "./lib/skill.js";
import skillAssessment from "./lib/skillAssessments.js";
export * from "./lib/skillAssessments.js";
import skillAssessmentTestingSession from "./lib/skillAssessmentTestingSession.js";
export * from "./lib/skillAssessmentTestingSession.js";
import skillTemplate from "./lib/skillTemplate.js";
export * from "./lib/skillTemplate.js";
import team from "./lib/teams.js";
export * from "./lib/teams.js";
import tenant from "./lib/tenants.js";
export * from "./lib/tenants.js";
import trainingPlanTemplate from "./lib/trainingPlanTemplate.js";
export * from "./lib/trainingPlanTemplate.js";
import trainingPlan from "./lib/trainingPlans.js";
export * from "./lib/trainingPlans.js";
import userInformation from "./lib/userInformation.js";
export * from "./lib/userInformation.js";
import users from "./lib/users.js";
export * from "./lib/users.js";

export default {
  actionNotifications: actionNotifications,
  address: address,
  axios: axios,
  config: config,
  contentGenerator: contentGenerator,
  dashboard: dashboard,
  errorToString: errorToString,
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
