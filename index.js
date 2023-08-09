import actionNotifications from "./client-api/lib/actionNotifications";
import axios, {
  errorToString,
  getErrorType,
  shouldReturnError,
} from "./client-api/lib/axiosClient";
import address from "./client-api/lib/address";
import config from "./client-api/lib/config";
import constants from "./client-api/lib/constants";
import contentGenerator from "./client-api/lib/integrations/contentGenerator";
import dashboard from "./client-api/lib/dashboard";
import departmentTraingPlans from "./client-api/lib/departmentTrainingPlans";
import integration from "./client-api/lib/integration";
import integrationConfiguration from "./client-api/lib/integrationConfiguration";
import groups from "./client-api/lib/groups";
import learningContent from "./client-api/lib/learningContent";
import logger from "./client-api/lib/logger";
import role from "./client-api/lib/role";
import roleTemplate from "./client-api/lib/roleTemplate";
import skill from "./client-api/lib/skill";
import skillAssessment from "./client-api/lib/skillAssessments";
import skillAssessmentTestingSession from "./client-api/lib/skillAssessmentTestingSession";
import skillTemplate from "./client-api/lib/skillTemplate";
import team from "./client-api/lib/teams";
import tenant from "./client-api/lib/tenants";
import trainingPlanTemplate from "./client-api/lib/trainingPlanTemplate";
import trainingPlan from "./client-api/lib/trainingPlans";
import userInformation from "./client-api/lib/userInformation";
import users from "./client-api/lib/users";

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
