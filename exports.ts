import actionNotifications from "./lib/actionNotifications.ts";
import {
  client,
  errorToString,
  getErrorInformation,
  getErrorType,
  shouldReturnError,
} from "./lib/axiosClient.ts";
import aiAssistant from "./lib/aiAssistant.ts";
import avatar from "./lib/avatar.ts";
import address from "./lib/address.ts";
import config from "./lib/config.ts";
import {
  DOCUMENT_VERSION,
  PERMISSIONS,
  PERMISSION_DESCRIPTIONS,
  RESPONSE_TYPE,
} from "./lib/constants.ts";
import contentGenerator from "./lib/integrations/contentGenerator.ts";
import dashboard from "./lib/dashboard.ts";
import departmentTraingPlans from "./lib/departmentTrainingPlans.ts";
import integration from "./lib/integration.ts";
import integrationConfiguration from "./lib/integrationConfiguration.ts";
import groups from "./lib/groups.ts";
import learningContent from "./lib/learningContent.ts";
import learningPath from "./lib/learningPath.ts";
import logger from "./lib/logger.ts";
import microSkillsQuizes from "./lib/microSkillsQuizes.ts";
import quotas from "./lib/quotas.ts";
import role from "./lib/role.ts";
import roleTemplate from "./lib/roleTemplate.ts";
import security from "./lib/security.ts";
import skill from "./lib/skill.ts";
import skillAssessment from "./lib/skillAssessments.ts";
import skillAssessmentTestingSession from "./lib/skillAssessmentTestingSession.ts";
import skillTemplate from "./lib/skillTemplate.ts";
import talentTransfromation from "./lib/talentTransfromation.ts";
import team from "./lib/teams.ts";
import tenant from "./lib/tenants.ts";
import trainingPlan from "./lib/trainingPlans.ts";
import trainingPlanProficiencyLevel from "./lib/trainingPlansProficiencyLevels.ts";
import userInformation from "./lib/userInformation.ts";
import users from "./lib/users.ts";

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
