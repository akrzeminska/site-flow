import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthService, UserInfo } from 'src/app/shared/services/auth.service';
import { SettingsComponent } from '../settings/settings.component';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent {

  userProfile?: UserInfo;
  pictureUrl: string | undefined;
  userName: string | undefined;
  
  constructor(private readonly authService: AuthService, public dialog: MatDialog) {
    authService.userProfile$.subscribe(info => {
      this.userProfile = info;
      this.pictureUrl = this.userProfile.info.picture;
      this.userName = this.userProfile.info.name;
    })
  }
  
  openDialog() {
    const dialogRef = this.dialog.open(SettingsComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  // isLoggedIn(): boolean {
  //   return this.authService.isLoggedIn();
  // }

  logOut() {
    this.authService.signOut();
  }
}
