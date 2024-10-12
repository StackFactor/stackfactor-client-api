const DOCUMENT_VERSION = {
  DRAFT: "draft",
  PUBLISHED: "published",
};

const RESPONSE_TYPE = {
  //The requested resource corresponds to any one of a set of representations, each with its own specific location.
  MULTIPLE_CHOICES: 300,
  //The resource has moved permanently. Please refer to the documentation.
  MOVED_PERMANENTLY: 301,
  //The resource has moved temporarily. Please refer to the documentation.
  FOUND: 302,
  //The resource can be found under a different URI.
  SEE_OTHER: 303,
  //The resource is available and not modified.
  NOT_MODIFIED: 304,
  //The requested resource must be accessed through the proxy given by the Location field.
  USE_PROXY: 305,
  //The resource resides temporarily under a different URI.
  TEMPORARY_REDIRECT: 307,
  //Invalid syntax for this request was provided.
  BAD_REQUEST: 400,
  //You are unauthorized to access the requested resource. Please log in.
  UNAUTHORIZED: 401,
  //Your account is not authorized to access the requested resource.
  FORBIDDEN: 403,
  //We could not find the resource you requested. Please refer to the documentation for the list of resources.
  NOT_FOUND: 404,
  //This method type is not currently supported.
  METHOD_NOT_ALLOWED: 405,
  //Acceptance header is invalid for this endpoint resource.
  NOT_ACCEPTABLE: 406,
  //Authentication with proxy is required.
  PROXY_AUTHENTICATION_REQUIRED: 407,
  //Client did not produce a request within the time that the server was prepared to wait.
  REQUEST_TIMEOUT: 408,
  //The request could not be completed due to a conflict with the current state of the resource.
  CONFLICT: 409,
  //The requested resource is no longer available and has been permanently removed.
  GONE: 410,
  //Length of the content is required, please include it with the request.
  LENGTH_REQUIRED: 411,
  //The request did not match the pre-conditions of the requested resource.
  PRECONDITION_FAILED: 412,
  //The request entity is larger than the server is willing or able to process.
  REQUEST_ENTITY_TOO_LARGE: 413,
  //The request URI is longer than the server is willing to interpret.
  REQUEST_URI_TOO_LONG: 414,
  //The requested resource does not support the media type provided.
  UNSUPPORTED_MEDIA_TYPE: 415,
  //The requested range for the resource is not available.
  REQUESTED_RANGE_NOT_SATISFIABLE: 416,
  //Unable to meet the expectation given in the Expect request header.
  EXPECTATION_FAILED: 417,
  //The requested resource is missing required arguments.
  MISSING_ARGUMENTS: 419,
  //The requested resource does not support one or more of the given parameters.
  INVALID_ARGUMENTS: 420,
  //The request was well-formed but was unable to be followed due to semantic errors.
  UNPROCESSABLE_ENTITY: 422,
  //Unexpected internal server error.
  INTERNAL_SERVER_ERROR: 500,
  //The requested resource is recognized but not implemented.
  NOT_IMPLEMENTED: 501,
  //Invalid response received when acting as a proxy or gateway.
  BAD_GATEWAY: 502,
  //The server is currently unavailable.
  SERVICE_UNAVAILABLE: 503,
  //Did not receive a timely response from upstream server while acting as a gateway or proxy.
  GATEWAY_TIMEOUT: 504,
  //The HTTP protocol version used in the request message is not supported.
  HTTP_VERSION_NOT_SUPPORTED: 505,
  //A failure occurred during initialization of services. API will be unavailable.
  INITIALIZATION_FAILURE: 550,
};

const PERMISSIONS = {
  ACCESS_TO_CONTENT_GENERATORS: "651d81d626fb9aafa4077520",
  ADMIN_AUTHOR_CONTENT: "5ea3d1152839450e16e72bba",
  ADMIN_PROMOTE_CONTENT: "5ea3d10bea252025c8ec351b",
  ADMIN_MANAGE_CONTENT_PROVIDERS: "61970935cee185acf08111f6",
  AUTHOR_CONTENT: "5fac210560e43de7c6b4a208",
  BETA_TESTER: "5fac210b6c8f874bd7137b97",
  MANAGE_BILLING: "5e1570cd03f676213bfdcd08",
  MANAGE_CONTENT_PROVIDERS: "5f0fa12f16a720fde58ea820",
  MANAGE_EXECUTIVE: "5fac2111b7e49e10c779b4a5",
  MANAGE_GROUPS: "5dd612fe59e518ac87b8cf8e",
  MANAGE_LEARNING_CONTENT: "64f54d20b7e49e10c779b4a6",
  MANAGE_LEARNING_PATHS: "5dd61305a73c68b44c3f0827",
  MANAGE_ORGANIZATION_INFORMATION: "5dd612d5338ea9a6ae6326da",
  MANAGE_OWN_PROFILE_INFORMATION_AUTO_APP: "5fac210e7e6539d37a897c94",
  MANAGE_OWN_PROFILE_SKIP_ASSESSMENT: "650fadb23956a2154ac890ac",
  MANAGE_OWN_SKILL_SET_AUTO_APPROVE: "5fac21164351c6727a34cd4e",
  MANAGE_SECURITY: "66ff566a911d938bc00618bf",
  MANAGE_SETTINGS: "5e1570e087d836dc77888a5f",
  MANAGE_TEAM_INFORMATION_AUTO_APPROVE: "5fac211e6c8f874bd7137b98",
  MANAGE_TEAMS: "5dd61314afc2455a89b1a37b",
  MANAGE_USERS: "5dd612e40f0bc559c41a2b29",
  PROMOTE_CONTENT: "5fac2126427ce31f8a92c0cb",
  TALENT_TRANSFORMATION_CHAMPION: "5fac210f7e6539d37a897c95",
  TALENT_TRANSFORMATION_CHAMPION_ADMIN: "5fac2112b7e49e10c779b4a6",
};

const PERMISSION_DESCRIPTIONS = {
  "5ea3d1152839450e16e72bba": "Author content",
  "5ea3d10bea252025c8ec351b": "Promote content",
  "61970935cee185acf08111f6": "Manage content providers",
  "5fac210560e43de7c6b4a208": "Author content",
  "5e1570cd03f676213bfdcd08": "Manage billing",
  "5f0fa12f16a720fde58ea820": "Manage content providers",
  "5fac2111b7e49e10c779b4a5": "Manage executive",
  "5dd612fe59e518ac87b8cf8e": "Manage groups",
  "64f54d20b7e49e10c779b4a6": "Manage learning content",
  "5dd61305a73c68b44c3f0827": "Manage learning paths",
  "5dd612d5338ea9a6ae6326da": "Manage organization information",
  "5fac210e7e6539d37a897c94": "Auto approve own profile information updates",
  "650fadb23956a2154ac890ac":
    "Skip assessment when updating own profile information",
  "5fac21164351c6727a34cd4e": "Auto approve own skill set updates",
  "66ff566a911d938bc00618bf": "Manage security",
  "5e1570e087d836dc77888a5f": "Manage settings",
  "5fac211e6c8f874bd7137b98": "Auto approve own team information updates",
  "5dd61314afc2455a89b1a37b": "Manage teams",
  "5dd612e40f0bc559c41a2b29": "Manage users",
  "5fac2126427ce31f8a92c0cb": "Promote content",
};

export {
  DOCUMENT_VERSION,
  PERMISSIONS,
  PERMISSION_DESCRIPTIONS,
  RESPONSE_TYPE,
};
