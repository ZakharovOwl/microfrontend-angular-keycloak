import { KeycloakOptions, KeycloakService } from 'keycloak-angular';
// import { environment } from '../../environments/environment';

function initializeKeycloak(keycloak: KeycloakService) {
  return () =>
    keycloak.init({
      config: {
        realm: 'keycloak-angular-sandbox',
        url: 'http://localhost:8080',
        clientId: 'keycloak-angular'
      },
      initOptions: {
        // onLoad: 'login-required',
        // checkLoginIframe: false,
        // pkceMethod: 'S256'
        onLoad: 'check-sso',
        silentCheckSsoRedirectUri:
           window.location.origin + '/assets/silent-check-sso.html'
      }
    });
}

// export function initializer(keycloak: KeycloakService): () => Promise<boolean> {
//
//   const options: KeycloakOptions = {
//     config: environment.keycloak,
//     initOptions: {
//       //onLoad: 'check-sso',
//       onLoad: 'login-required',
//       checkLoginIframe: false
//     },
//   }
//
//   return () => keycloak.init(options);
// }
