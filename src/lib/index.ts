import actionNotifications from "./actionNotifications";
import {
  client,
  errorToString,
  getErrorInformation,
  getErrorType,
  shouldReturnError,
} from "./axiosClient";
import aiAssistant from "./aiAssistant";
import avatar from "./avatar";
import address from "./address";
import config from "./config";
import {
  DOCUMENT_VERSION,
  PERMISSIONS,
  PERMISSION_DESCRIPTIONS,
  RESPONSE_TYPE,
} from "./constants";
import contentGenerator from "./integrations/contentGenerator";
import dashboard from "./dashboard";
import departmentTraingPlans from "./departmentTrainingPlans";
import integration from "./integration";
import integrationConfiguration from "./integrationConfiguration";
import groups from "./groups";
import learningContent from "./learningContent";
import learningPath from "./learningPath";
import logger from "./logger";
import microSkillsQuizes from "./microSkillsQuizes";
import quotas from "./quotas";
import role from "./role";
import roleTemplate from "./roleTemplate";
import security from "./security";
import skill from "./skill";
import skillAssessment from "./skillAssessments";
import skillAssessmentTestingSession from "./skillAssessmentTestingSession";
import skillTemplate from "./skillTemplate";
import talentTransfromation from "./talentTransfromation";
import team from "./teams";
import tenant from "./tenants";
import trainingPlan from "./trainingPlans";
import trainingPlanProficiencyLevel from "./trainingPlansProficiencyLevels";
import userInformation from "./userInformation";
import users from "./users";

export {
  actionNotifications,
  address,
  aiAssistant,
  avatar,
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
  microSkillsQuizes,
  PERMISSIONS,
  PERMISSION_DESCRIPTIONS,
  quotas,
  RESPONSE_TYPE,
  role,
  roleTemplate,
  security,
  shouldReturnError,
  skill,
  skillAssessment,
  skillAssessmentTestingSession,
  skillTemplate,
  talentTransfromation,
  team,
  tenant,
  trainingPlan,
  trainingPlanProficiencyLevel,
  userInformation,
  users,
};
