import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthConfig, OAuthService } from 'angular-oauth2-oidc';
import { Observable, Subject } from 'rxjs';

const oAuthConfig: AuthConfig = {
  issuer: 'https://accounts.google.com',
  strictDiscoveryDocumentValidation: false,
  redirectUri: 'http://localhost:4200',
  clientId: '876890439510-kc14p3sr0rq0nvhafru7umaeld578qpj.apps.googleusercontent.com',
  scope: 'openid profile email https://www.googleapis.com/auth/gmail.readonly'
}

export interface UserInfo {
  info: {
    sub: string,
    email: string,
    name: string,
    picture: string
  }
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userProfileSubject = new Subject<UserInfo>();

  constructor(private readonly oAuthService: OAuthService) {
    oAuthService.configure(oAuthConfig);
    oAuthService.logoutUrl = 'https://www.google.com/accounts/Logout';
    oAuthService.loadDiscoveryDocument().then(() => {
          // Rozpocznij przepływ niejawnego logowania
      oAuthService.tryLoginImplicitFlow().then(() => {
          // Sprawdź stan tokena i profil użytkownika po powrocie z przepływu
        if(!oAuthService.hasValidAccessToken()) {
          oAuthService.initLoginFlow();
        } else {
          oAuthService.loadUserProfile().then((userProfile) => {console.log(JSON.stringify(userProfile));
          })
        }
      })
    })
  }

  isLoggedIn(): boolean {
    return this.oAuthService.hasValidAccessToken();
  }

  signOut() {
    this.oAuthService.logOut();
  }
}
