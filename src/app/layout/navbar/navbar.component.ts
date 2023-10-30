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
  links = [
    { path: '/constructions', label: 'Budowy' },
    { path: '/costs', label: 'Kosztorysy' },
    { path: '/contacts', label: 'Kontakty' },
    { path: '/tasks', label: 'Zadania' },
  ];
  constructor( private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    this.breakpointObserver.observe([`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`])
    .subscribe((state: BreakpointState) => {
      this.isScreenSmall = state.matches;
    })
  }
}
