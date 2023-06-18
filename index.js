const actionNotifications = require("./lib/actionNotifications");
const address = require("./lib/address");
const config = require("./lib/config");
const integration = require("./lib/integration");
const integrationsConfiguration = require("./lib/integrationsConfiguration");
const departmentTraiingPlans = require("./lib/departmentTraiingPlans");
const groups = require("./lib/groups");
const role = require("./lib/role");
const roleTemplate = require("./lib/roleTemplate");
const skill = require("./lib/skill");
const skillAssessments = require("./lib/skillAssessments");
const skillTemplate = require("./lib/skillTemplate");
const teams = require("./lib/teams");
const templateDocument = require("./lib/templateDocument");
const templatePhase = require("./lib/templatePhase");
const templateRelease = require("./lib/templateRelease");
const templates = require("./lib/templates");
const tenants = require("./lib/tenants");
const trainingPlanTemplate = require("./lib/trainingPlanTemplate");
const trainingPlans = require("./lib/trainingPlans");
const userInformation = require("./lib/userInformation");
const users = require("./lib/users");

module.exports = {
  ...actionNotifications,
  ...address,
  ...config,
  ...integration,
  ...integrationsConfiguration,
  ...departmentTraiingPlans,
  ...groups,
  ...role,
  ...roleTemplate,
  ...skill,
  ...skillAssessments,
  ...skillTemplate,
  ...teams,
  ...templateDocument,
  ...templatePhase,
  ...templateRelease,
  ...templates,
  ...tenants,
  ...trainingPlanTemplate,
  ...trainingPlans,
  ...userInformation,
  ...users,
};
