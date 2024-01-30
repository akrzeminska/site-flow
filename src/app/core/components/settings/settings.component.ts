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
  isDarkMode!: boolean;
  currentTheme!: 'dark-mode' | 'light-mode';

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.isDarkMode = this.themeService.isDarkMode();
    this.currentTheme = this.themeService.getCurrentTheme();
  }
  
  toogleDarkMode() {
    this.isDarkMode = this.themeService.isDarkMode();
    this.isDarkMode ? this.themeService.update('light-mode') : this.themeService.update('dark-mode');
  }

  onCancel() {
    this.themeService.update(this.currentTheme);
  }

}
