import { Component } from '@angular/core';
import { AuthService, UserInfo } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  userProfile?: UserInfo;
  pictureUrl: string | undefined;
  userName: string | undefined;
  
  constructor(private readonly authService: AuthService) {
    authService.userProfile$.subscribe(info => {
      this.userProfile = info;
      this.pictureUrl = this.userProfile.info.picture;
      this.userName = this.userProfile.info.name;
    })
  }
 
  // isLoggedIn(): boolean {
  //   return this.authService.isLoggedIn();
  // }

  logOut() {
    this.authService.signOut();
  }
}
