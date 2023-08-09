import actionNotifications from "./lib/actionNotifications";
import axios from "./lib/axiosClient";
import address from "./lib/address";
import config from "./lib/config";
import importants from "./lib/importants";
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
  actionNotifications,
  address,
  axios,
  config,
  contentGenerator,
  dashboard,
  errorToString: axios.errorToString,
  getErrorType: axios.getErrorType,
  DOCUMENT_VERSION: importants.DOCUMENT_VERSION,
  integration,
  integrationConfiguration,
  departmentTraingPlans,
  groups,
  learningContent,
  logger,
  PERMISSIONS: importants.PERMISSIONS,
  responseType: importants.RESONSE_TYPE,
  role,
  roleTemplate,
  shouldReturnError: axios.shouldReturnError,
  skill,
  skillAssessment,
  skillAssessmentTestingSession,
  skillTemplate,
  team,
  tenant,
  trainingPlanTemplate,
  trainingPlan,
  userInformation,
  users,
};
