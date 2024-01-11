import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {

  @Output() toogleSidenav = new EventEmitter<void>();

  constructor(private router: Router){}

  navigateToHomepage() {
    this.router.navigate(['/user-panel'])
  }
  }

