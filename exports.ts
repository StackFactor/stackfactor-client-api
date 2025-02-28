import actionNotifications from "./src/lib/actionNotifications.ts";
import {
  client,
  errorToString,
  getErrorInformation,
  getErrorType,
  shouldReturnError,
} from "./src/lib/axiosClient.ts";
import aiAssistant from "./src/lib/aiAssistant.ts";
import avatar from "./src/lib/avatar.ts";
import address from "./src/lib/address.ts";
import config from "./src/lib/config.ts";
import {
  DOCUMENT_VERSION,
  PERMISSIONS,
  PERMISSION_DESCRIPTIONS,
  RESPONSE_TYPE,
} from "./src/lib/constants.ts";
import contentGenerator from "./src/lib/integrations/contentGenerator.ts";
import dashboard from "./src/lib/dashboard.ts";
import departmentTraingPlans from "./src/lib/departmentTrainingPlans.ts";
import integration from "./src/lib/integration.ts";
import integrationConfiguration from "./src/lib/integrationConfiguration.ts";
import groups from "./src/lib/groups.ts";
import learningContent from "./src/lib/learningContent.ts";
import learningPath from "./src/lib/learningPath.ts";
import logger from "./src/lib/logger.ts";
import microSkillsQuizes from "./src/lib/microSkillsQuizes.ts";
import quotas from "./src/lib/quotas.ts";
import role from "./src/lib/role.ts";
import roleTemplate from "./src/lib/roleTemplate.ts";
import security from "./src/lib/security.ts";
import skill from "./src/lib/skill.ts";
import skillAssessment from "./src/lib/skillAssessments.ts";
import skillAssessmentTestingSession from "./src/lib/skillAssessmentTestingSession.ts";
import skillTemplate from "./src/lib/skillTemplate.ts";
import talentTransfromation from "./src/lib/talentTransfromation.ts";
import team from "./src/lib/teams.ts";
import tenant from "./src/lib/tenants.ts";
import trainingPlan from "./src/lib/trainingPlans.ts";
import trainingPlanProficiencyLevel from "./src/lib/trainingPlansProficiencyLevels.ts";
import userInformation from "./src/lib/userInformation.ts";
import users from "./src/lib/users.ts";

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
