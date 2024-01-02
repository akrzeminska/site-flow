import { Injectable } from '@angular/core';
import { AuthConfig, OAuthService } from 'angular-oauth2-oidc';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private oauthService: OAuthService) {
    this.configureOAuth();
  }

  private configureOAuth() {
    const authConfig: AuthConfig = {
      issuer: 'https://accounts.google.com',
      redirectUri: 'http://localhost:4200/login',
      clientId: '876890439510-kc14p3sr0rq0nvhafru7umaeld578qpj.apps.googleusercontent.com',
      scope: 'openid profile email'
    };

    this.oauthService.configure(authConfig);
    this.oauthService.loadDiscoveryDocumentAndTryLogin();
  }

  login() {
    this.oauthService.initImplicitFlow();
  }

  logOut() {
    this.oauthService.logOut();
  }
}
