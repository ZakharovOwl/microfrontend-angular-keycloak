import {APP_INITIALIZER, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightsSearchComponent } from './flights-search/flights-search.component';
import { RouterModule } from '@angular/router';
import { FLIGHTS_ROUTES } from './flights.routes';
import {KeycloakAngularModule, KeycloakService} from "keycloak-angular";

// function initializeKeycloak(keycloak: KeycloakService) {
//   return () =>
//     keycloak.init({
//       config: {
//         realm: 'keycloak-angular-sandbox',
//         url: 'http://localhost:8080',
//         clientId: 'keycloak-angular'
//       },
//       initOptions: {
//         onLoad: 'check-sso',
//         silentCheckSsoRedirectUri:
//           window.location.origin + '../assets/silent-check-sso.html'
//       }
//     });
// }

@NgModule({
  imports: [
    CommonModule,
    KeycloakAngularModule,
    RouterModule.forChild(FLIGHTS_ROUTES),
  ],
  providers:[
  ],
  declarations: [
    FlightsSearchComponent
  ]
})
export class FlightsModule { }
