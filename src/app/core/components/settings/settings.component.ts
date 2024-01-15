import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ThemeService } from 'src/app/shared/services/theme.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  color: ThemePalette = 'accent';
  checked = false;
  disabled = false;
  isDarkTheme = this.themeService.isDarkTheme$;

  constructor(private themeService: ThemeService) {

  }
  ngOnInit(): void {}

  toogleTheme() {
    this.themeService.toogleDarkTheme();
  }
}
