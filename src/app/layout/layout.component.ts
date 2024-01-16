import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { ThemeService } from '../shared/services/theme.service';

const SMALL_WIDTH_BREAKPOINT = 768;

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements AfterViewInit {
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  public links = [
    { path: '/user-panel', label: 'Panel użytkownika', icon: 'account_circle' },
    { path: '/constructions', label: 'Budowy', icon: 'businessaccount' },
    { path: '/costs-estimates', label: 'Kosztorysy', icon: 'date_range' },
    { path: '/contacts', label: 'Kontakty', icon: 'phone' },
    { path: '/tasks', label: 'Zadania', icon: 'description' },
  ];

  constructor(private breakpointObserver: BreakpointObserver, private router: Router, private themeService: ThemeService) {}

  navigate(path: string): void {
    this.router.navigate([path]);
  }

  ngAfterViewInit() {
    this.breakpointObserver.observe(["(max-width: 800px)"]).subscribe((res) => {
      if (res.matches) {
        this.sidenav.mode = "over";
        this.sidenav.close();
      } else {
        this.sidenav.mode = "side";
        this.sidenav.open();
      }
    });
  }
}
