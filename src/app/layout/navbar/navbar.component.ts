import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';


const SMALL_WIDTH_BREAKPOINT = 768;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public isScreenSmall: boolean | undefined;
  public links = [
    { path: '/user-panel', label: 'Panel użytkownika', icon: 'account_circle' },
    { path: '/constructions', label: 'Budowy', icon: 'businessaccount' },
    { path: '/costs-estimates', label: 'Kosztorysy', icon: 'date_range' },
    { path: '/contacts', label: 'Kontakty', icon: 'phone' },
    { path: '/tasks', label: 'Zadania', icon: 'description' },
  ];
  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    this.breakpointObserver.observe([`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`])
    .subscribe((state: BreakpointState) => {
      this.isScreenSmall = state.matches;
    })
  }
}
