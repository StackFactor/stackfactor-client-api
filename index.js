const actionNotifications = require("./lib/actionNotifications");
const axios = require("./lib/axios");
const address = require("./lib/address");
const config = require("./lib/config");
const constants = require("./lib/constants");
const dashboard = require("./lib/dashboard");
const departmentTraingPlans = require("./lib/departmentTrainingPlans");
const integration = require("./lib/integration");
const integrationConfiguration = require("./lib/integrationConfiguration");
const groups = require("./lib/groups");
const learningContent = require("./lib/learningContent");
const logger = require("./lib/logger");
const role = require("./lib/role");
const roleTemplate = require("./lib/roleTemplate");
const skill = require("./lib/skill");
const skillAssessment = require("./lib/skillAssessments");
const skillAssessmentTestingSession = require("./lib/skillAssessmentTestingSession");
const skillTemplate = require("./lib/skillTemplate");
const team = require("./lib/teams");
// const templateDocument = require("./lib/templateDocument");
// const templatePhase = require("./lib/templatePhase");
// const templateRelease = require("./lib/templateRelease");
const templates = require("./lib/templates");
const tenant = require("./lib/tenants");
const trainingPlanTemplate = require("./lib/trainingPlanTemplate");
const trainingPlan = require("./lib/trainingPlans");
const userInformation = require("./lib/userInformation");
const users = require("./lib/users");

module.exports = {
  actionNotifications,
  address,
  config,
  dashboard,
  errorToString: axios.errorToString,
  getErrorType: axios.getErrorType,
  DOCUMENT_VERSION: constants.DOCUMENT_VERSION,
  integration,
  integrationConfiguration,
  departmentTraingPlans,
  groups,
  learningContent,
  logger,
  RESONSE_TYPE: constants.RESONSE_TYPE,
  responseType: axios.responseType,
  role,
  roleTemplate,
  shouldReturnError: axios.shouldReturnError,
  skill,
  skillAssessment,
  skillAssessmentTestingSession,
  skillTemplate,
  team,
  // templateDocument,
  // templatePhase,
  // templateRelease,
  templates,
  tenant,
  trainingPlanTemplate,
  trainingPlan,
  userInformation,
  users,
};
