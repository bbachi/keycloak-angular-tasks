export const environment = {
  production: true,
  envName: 'local',
  keycloak: {
    // Url of the Identity Provider
    issuer: 'http://localhost:8080/auth/',

    // Realm
    realm: 'tasks',

    // The SPA's id. 
    // The SPA is registerd with this id at the auth-serverß
    clientId: 'tasks-ui',
  }
};