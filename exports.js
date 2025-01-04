import actionNotifications from "./lib/actionNotifications.js";
import {
  client,
  errorToString,
  getErrorInformation,
  getErrorType,
  shouldReturnError,
} from "./lib/axiosClient.js";
import aiAssistant from "./lib/aiAssistant.js";
import avatar from "./lib/avatar.js";
import address from "./lib/address.js";
import config from "./lib/config.js";
import {
  DOCUMENT_VERSION,
  PERMISSIONS,
  PERMISSION_DESCRIPTIONS,
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
import microSkillsQuizes from "./lib/microSkillsQuizes.js";
import quota from "./lib/quota.js";
import role from "./lib/role.js";
import roleTemplate from "./lib/roleTemplate.js";
import security from "./lib/security.js";
import skill from "./lib/skill.js";
import skillAssessment from "./lib/skillAssessments.js";
import skillAssessmentTestingSession from "./lib/skillAssessmentTestingSession.js";
import skillTemplate from "./lib/skillTemplate.js";
import talentTransfromation from "./lib/talentTransfromation.js";
import team from "./lib/teams.js";
import tenant from "./lib/tenants.js";
import trainingPlan from "./lib/trainingPlans.js";
import trainingPlanProficiencyLevel from "./lib/trainingPlansProficiencyLevels.js";
import userInformation from "./lib/userInformation.js";
import users from "./lib/users.js";

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
  quota,
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
