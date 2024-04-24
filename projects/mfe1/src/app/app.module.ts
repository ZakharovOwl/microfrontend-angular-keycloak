import { BrowserModule } from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FlightsModule } from './flights/flights.module';
import { APP_ROUTES } from './app.routes';
import {KeycloakAngularModule, KeycloakService} from "keycloak-angular";

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

@NgModule({
  imports: [
    BrowserModule,
    KeycloakAngularModule,
    FlightsModule,
    RouterModule.forRoot(APP_ROUTES),
  ],
  declarations: [
    HomeComponent,
    AppComponent,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [KeycloakService]
    }
  ],
  bootstrap: [
      AppComponent
  ]
})
export class AppModule { }
