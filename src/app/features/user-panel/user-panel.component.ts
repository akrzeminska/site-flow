import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.scss']
})
export class UserPanelComponent {
  constructor(private router: Router) {}

  navigateToConstructions() {
    this.router.navigate(['constructions']);
  }

  navigateToCostEstimates() {
    this.router.navigate(['costs-estimates']);
  }

  navigateToContacts() {
    this.router.navigate(['contacts']);
  }

  navigateToTasks() {
    this.router.navigate(['tasks']);
  }

}
