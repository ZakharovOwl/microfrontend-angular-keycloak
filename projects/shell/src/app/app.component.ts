import { Component, OnInit } from '@angular/core';
import { AuthLibService } from 'auth-lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title = 'shell';
  // public isLoggedIn = false;
  // public userProfile: KeycloakProfile | null = null;

  constructor(private service: AuthLibService) {
    console.log('hi')
    this.service.login('Max', null);
  }

  public async ngOnInit() {
    // this.isLoggedIn = await this.keycloak.isLoggedIn();
    //
    // if (this.isLoggedIn) {
    //   this.userProfile = await this.keycloak.loadUserProfile();
    // }
  }
  //
  // public login() {
  //   this.keycloak.login();
  // }
  //
  // public logout() {
  //   this.keycloak.logout();
  // }
}

