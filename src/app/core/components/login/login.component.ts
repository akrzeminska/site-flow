import { Component } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  
  constructor(private authService: AuthService) {}

  onSignIn() {
    this.authService.initializeLoginFlow();
  }

  signOut() {
    this.authService.signOut();
  }

}
