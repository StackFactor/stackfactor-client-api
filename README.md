# @stackfactor/client-api

A TypeScript/JavaScript client library for interacting with the StackFactor API. This package provides a comprehensive set of modules for managing users, skills, roles, teams, training plans, assessments, and more — designed for use in web and Node.js applications.

## Features

- **User Management** — account creation, authentication (login, logout, token refresh), API tokens, invitations, email/phone confirmation, password reset
- **Skills & Roles** — create, publish, import from templates, assign to users
- **Teams & Groups** — create and manage organizational structures
- **Training Plans** — create, publish, archive, manage proficiency levels and activities
- **Skill Assessments** — create assessments, manage testing sessions
- **AI Assistant** — start conversations, ask questions, voice assistant
- **Content Generation** — synchronous and asynchronous AI-powered content generation
- **Learning Content & Paths** — author and manage learning materials
- **Dashboard, Notifications, Security** — configurable dashboard cards, action notifications, auth connections and MFA

## Installation

```
npm install @stackfactor/client-api
```

## Usage

Import the modules you need from the library:

```typescript
import { users, skill, role, team, address } from "@stackfactor/client-api";

// Login
users
  .login("user@example.com", "password")
  .then((data) => console.log(data))
  .catch((err) => console.error(err));

// Create a skill
skill
  .createSkill({ name: "TypeScript" }, authToken)
  .then((result) => console.log(result));

// Address autocomplete
address
  .autoComplete("123 Main St", authToken)
  .then((result) => console.log(result));
```

### Available Modules

| Import Name                     | Description                           |
| ------------------------------- | ------------------------------------- |
| `actionNotifications`           | User action notifications             |
| `address`                       | Address validation and autocomplete   |
| `aiAssistant`                   | AI assistant conversations and voice  |
| `avatar`                        | User and element avatars              |
| `client`                        | Configured Axios HTTP client instance |
| `config`                        | Platform configuration                |
| `contentGenerator`              | AI-powered content generation         |
| `customFields`                  | Custom field definitions              |
| `dashboard`                     | Dashboard card management             |
| `departmentTraingPlans`         | Department training plans             |
| `groups`                        | User group management                 |
| `integration`                   | Integration management                |
| `integrationConfiguration`      | Integration configuration             |
| `learningContent`               | Learning content authoring            |
| `learningPath`                  | Learning path management              |
| `logger`                        | Logging utilities                     |
| `microSkillsQuizes`             | Micro-skill quiz management           |
| `quotas`                        | Usage quotas                          |
| `role`                          | Role management                       |
| `roleTemplate`                  | Role template management              |
| `security`                      | Auth connections, MFA, Auth0 sync     |
| `skill`                         | Skill management                      |
| `skillAssessment`               | Skill assessment management           |
| `skillAssessmentTestingSession` | Assessment testing sessions           |
| `skillTemplate`                 | Skill template management             |
| `talentTransfromation`          | Talent transformation tracking        |
| `team`                          | Team management                       |
| `tenant`                        | Tenant settings                       |
| `trainingPlan`                  | Training plan management              |
| `trainingPlanProficiencyLevel`  | Training plan proficiency levels      |
| `userInformation`               | User business profile properties      |
| `users`                         | User accounts and authentication      |

Constants `DOCUMENT_VERSION`, `RESPONSE_TYPE`, `PERMISSIONS`, and `PERMISSION_DESCRIPTIONS` are also exported directly.

Utility functions `errorToString`, `getErrorType`, `getErrorInformation`, and `shouldReturnError` are exported at the top level for Axios error handling.

## Documentation

Full method-level documentation for each module is available in the [doc/](doc/) folder:

- [Action Notifications](doc/actionNotifications.md)
- [Address](doc/address.md)
- [AI Assistant](doc/aiAssistant.md)
- [Avatar](doc/avatar.md)
- [Axios Client](doc/axiosClient.md)
- [Config](doc/config.md)
- [Constants](doc/constants.md)
- [Content Generator](doc/contentGenerator.md)
- [Custom Fields](doc/customFields.md)
- [Dashboard](doc/dashboard.md)
- [Department Training Plans](doc/departmentTrainingPlans.md)
- [Groups](doc/groups.md)
- [Integration](doc/integration.md)
- [Integration Configuration](doc/integrationConfiguration.md)
- [Learning Content](doc/learningContent.md)
- [Learning Path](doc/learningPath.md)
- [Logger](doc/logger.md)
- [Micro Skills Quizzes](doc/microSkillsQuizes.md)
- [Quotas](doc/quotas.md)
- [Role](doc/role.md)
- [Role Template](doc/roleTemplate.md)
- [Security](doc/security.md)
- [Skill](doc/skill.md)
- [Skill Assessments](doc/skillAssessments.md)
- [Skill Assessment Testing Session](doc/skillAssessmentTestingSession.md)
- [Skill Template](doc/skillTemplate.md)
- [Talent Transformation](doc/talentTransfromation.md)
- [Teams](doc/teams.md)
- [Tenants](doc/tenants.md)
- [Training Plans](doc/trainingPlans.md)
- [Training Plans Proficiency Levels](doc/trainingPlansProficiencyLevels.md)
- [User Information](doc/userInformation.md)
- [Users](doc/users.md)
- [Utils](doc/utils.md)

## License

This package is licensed under the [Creative Commons Attribution-NoDerivatives 4.0 International (CC BY-ND 4.0)](https://creativecommons.org/licenses/by-nd/4.0/legalcode). See the [LICENSE](LICENSE) file for details.

## Support

For questions or support, open an issue in the [GitHub repository](https://github.com/StackFactor/stackfactor-client-api).

## Links

- [StackFactor Developer Resources](https://stackfactor.ai/resources/developers)
- [CC BY-ND 4.0 License](https://creativecommons.org/licenses/by-nd/4.0/legalcode)
