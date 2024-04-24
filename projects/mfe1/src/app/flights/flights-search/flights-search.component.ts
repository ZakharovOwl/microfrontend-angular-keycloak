import {Component, OnInit} from '@angular/core';

import { AuthLibService } from 'auth-lib';
import {KeycloakProfile} from "keycloak-js";
import {KeycloakService} from "keycloak-angular";

@Component({
  selector: 'app-flights-search',
  templateUrl: './flights-search.component.html',
  styleUrls: ['./flights-search.component.css']
})
export class FlightsSearchComponent implements OnInit {
  // Add this:
  user = this.authLibService.user;

  search(): void {
    alert('Not implemented for this demo!');
  }

  terms(): void {
    alert('Not implemented for this demo!');
  }

  title = 'shell test';

  public isLoggedIn = false;
  public userProfile: KeycloakProfile | null = null;

  constructor(private authLibService: AuthLibService, private keycloak : KeycloakService) {
    // console.log('omg', this.keycloak.getUsername())
  }

  public async ngOnInit() {
    this.isLoggedIn = await this.keycloak.isLoggedIn();

    console.log('12', this.keycloak.isLoggedIn())
    if (this.isLoggedIn) {
      this.userProfile = await this.keycloak.loadUserProfile();
    }
  }

  public login() {
    console.log('th', this.keycloak)
    this.keycloak.login();
  }

  public logout() {
    this.keycloak.logout();
  }
}
