import { Component } from '@angular/core';
import { AuthService, UserInfo } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  userInfo?: UserInfo;
  
  constructor(private readonly authService: AuthService) {
    authService.userProfileSubject.subscribe(info => {
      this.userInfo = info;
    })
  }
 
  // isLoggedIn(): boolean {
  //   return this.authService.isLoggedIn();
  // }

  logOut() {
    this.authService.signOut();
  }
}
