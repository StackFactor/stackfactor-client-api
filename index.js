import actionNotifications from "./lib/actionNotifications.js";
import axios, {
  errorToString,
  getErrorType,
  shouldReturnError,
} from "./lib/axiosClient.js";
import address from "./lib/address.js";
import config from "./lib/config.js";
import constants from "./lib/constants.js";
import contentGenerator from "./lib/integrations/contentGenerator.js";
import dashboard from "./lib/dashboard.js";
import departmentTraingPlans from "./lib/departmentTrainingPlans.js";
import integration from "./lib/integration.js";
import integrationConfiguration from "./lib/integrationConfiguration.js";
import groups from "./lib/groups.js";
import learningContent from "./lib/learningContent.js";
import logger from "./lib/logger.js";
import role from "./lib/role.js";
import roleTemplate from "./lib/roleTemplate.js";
import skill from "./lib/skill.js";
import skillAssessment from "./lib/skillAssessments.js";
import skillAssessmentTestingSession from "./lib/skillAssessmentTestingSession.js";
import skillTemplate from "./lib/skillTemplate.js";
import team from "./lib/teams.js";
import tenant from "./lib/tenants.js";
import trainingPlanTemplate from "./lib/trainingPlanTemplate.js";
import trainingPlan from "./lib/trainingPlans.js";
import userInformation from "./lib/userInformation.js";
import users from "./lib/users.js";

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
