import actionNotifications from "./lib/actionNotifications";
import axios, {
  errorToString,
  getErrorType,
  shouldReturnError,
} from "./lib/axiosClient";
import address from "./lib/address";
import config from "./lib/config";
import constants from "./lib/constants";
import contentGenerator from "./lib/integrations/contentGenerator";
import dashboard from "./lib/dashboard";
import departmentTraingPlans from "./lib/departmentTrainingPlans";
import integration from "./lib/integration";
import integrationConfiguration from "./lib/integrationConfiguration";
import groups from "./lib/groups";
import learningContent from "./lib/learningContent";
import logger from "./lib/logger";
import role from "./lib/role";
import roleTemplate from "./lib/roleTemplate";
import skill from "./lib/skill";
import skillAssessment from "./lib/skillAssessments";
import skillAssessmentTestingSession from "./lib/skillAssessmentTestingSession";
import skillTemplate from "./lib/skillTemplate";
import team from "./lib/teams";
import tenant from "./lib/tenants";
import trainingPlanTemplate from "./lib/trainingPlanTemplate";
import trainingPlan from "./lib/trainingPlans";
import userInformation from "./lib/userInformation";
import users from "./lib/users";

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
