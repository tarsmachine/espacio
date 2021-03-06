import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Settings {
  theme?: string;
  fontFamily?: string;
  fontSize?: string;
  fontWeight?: string;
  lineHeight?: string;
  pageWidth?: string;
  letterSpacing?: string;
  fontSizeAdjust?: string;
  dropCaps?: string;
}

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  theme$: BehaviorSubject<string>;
  fontFamily$: BehaviorSubject<string>;
  fontSize$: BehaviorSubject<string>;
  fontWeight$: BehaviorSubject<string>;
  lineHeight$: BehaviorSubject<string>;
  pageWidth$: BehaviorSubject<string>;
  letterSpacing$: BehaviorSubject<string>;
  fontSizeAdjust$: BehaviorSubject<string>;
  dropCaps$: BehaviorSubject<string>;

  constructor() {
    const userSettings: Settings = {
      theme: localStorage.getItem('theme'),
      fontFamily: localStorage.getItem('fontFamily'),
      fontSize: localStorage.getItem('fontSize'),
      fontWeight: localStorage.getItem('fontWeight'),
      lineHeight: localStorage.getItem('lineHeight'),
      pageWidth: localStorage.getItem('pageWidth'),
      letterSpacing: localStorage.getItem('letterSpacing'),
      fontSizeAdjust: localStorage.getItem('fontSizeAdjust'),
      dropCaps: localStorage.getItem('dropCaps'),
    };

    Object.keys(userSettings).forEach(key =>
      (userSettings[key] == null) && delete userSettings[key]
    );

    const defaultSettings: Settings = {
      theme: 'light',
      fontFamily: 'inherit',
      fontSize: 'medium',
      fontWeight: 'normal',
      lineHeight: 'normal',
      pageWidth: '700px',
      letterSpacing: 'normal',
      fontSizeAdjust: 'none',
      dropCaps: '1',
    };

    this.initializeSettings(
      Object.assign(defaultSettings, userSettings)
    );
  }

  initializeSettings(settings: Settings) {
    this.theme$ = new BehaviorSubject(settings.theme);
    this.fontFamily$ = new BehaviorSubject(settings.fontFamily);
    this.fontSize$ = new BehaviorSubject(settings.fontSize);
    this.fontWeight$ = new BehaviorSubject(settings.fontWeight);
    this.lineHeight$ = new BehaviorSubject(settings.lineHeight);
    this.pageWidth$ = new BehaviorSubject(settings.pageWidth);
    this.letterSpacing$ = new BehaviorSubject(settings.letterSpacing);
    this.fontSizeAdjust$ = new BehaviorSubject(settings.fontSizeAdjust);
    this.dropCaps$ = new BehaviorSubject(settings.dropCaps);
  }

  changeTheme(theme: string) {
    this.theme$.next(theme);
    localStorage.setItem('theme', theme);
  }

  changeFontFamily(fontFamily: string) {
    this.fontFamily$.next(fontFamily);
    localStorage.setItem('fontFamily', fontFamily);
  }

  changeFontSize(fontSize: string) {
    this.fontSize$.next(fontSize);
    localStorage.setItem('fontSize', fontSize);
  }

  changeFontWeight(fontWeight: string) {
    this.fontWeight$.next(fontWeight);
    localStorage.setItem('fontWeight', fontWeight);
  }

  changeLineHeight(lineHeight: string) {
    this.lineHeight$.next(lineHeight);
    localStorage.setItem('lineHeight', lineHeight);
  }

  changePageWidth(pageWidth) {
    this.pageWidth$.next(pageWidth);
    localStorage.setItem('pageWidth', pageWidth);
  }

  changeLetterSpacing(letterSpacing) {
    this.letterSpacing$.next(letterSpacing);
    localStorage.setItem('letterSpacing', letterSpacing);
  }

  changeFontSizeAdjust(fontSizeAdjust) {
    this.fontSizeAdjust$.next(fontSizeAdjust);
    localStorage.setItem('fontSizeAdjust', fontSizeAdjust);
  }

  changeDropCaps(dropCaps) {
    this.dropCaps$.next(dropCaps);
    localStorage.setItem('dropCaps', dropCaps);
  }
}
