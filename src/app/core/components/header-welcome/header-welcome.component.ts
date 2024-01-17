import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { AuthService, UserInfo } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-header-welcome',
  templateUrl: './header-welcome.component.html',
  styleUrls: ['./header-welcome.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderWelcomeComponent implements OnInit {
  userProfile?: UserInfo;
  userName$!: Observable<string>;

  constructor(private readonly authService: AuthService) {}

  ngOnInit(): void {   
    this.userName$ = this.authService.userProfile$.pipe(
      map((userInfo: UserInfo) => {
        return userInfo.info.name;
      })
    ) 
  }
}
