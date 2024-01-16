import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthService, UserInfo } from 'src/app/shared/services/auth.service';
import { SettingsComponent } from '../settings/settings.component';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent implements OnInit {
  userProfile?: UserInfo;
  pictureUrl: string | undefined;
  userName: string | undefined;

  constructor(
    private readonly authService: AuthService, public dialog: MatDialog) 
    {

    }
  ngOnInit(): void {    
    this.authService.userProfile$.subscribe((info) => {
    this.userProfile = info;
    console.log(this.userProfile.info.picture);
    this.pictureUrl = this.userProfile.info.picture;
    this.userName = this.userProfile.info.name;
  });
  }

  openDialog() {
    const dialogRef = this.dialog.open(SettingsComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
 

  logOut() {
    this.authService.signOut();
  }
}
