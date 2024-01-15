import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private isDarkThemeSubject = new BehaviorSubject<boolean>(false);
  isDarkTheme$ = this.isDarkThemeSubject.asObservable;
  
  toogleDarkTheme() {
    const currentTheme = this.isDarkThemeSubject.value;
    this.isDarkThemeSubject.next(!currentTheme);
  }
}
