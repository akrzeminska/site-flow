import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';

import { LayoutComponent } from './layout/layout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './layout/header/header.component';
import { OAuthModule } from 'angular-oauth2-oidc';
import { AccountComponent } from './core/components/account/account.component';
import { HttpClientModule } from '@angular/common/http';
import { SettingsComponent } from './core/components/settings/settings.component';
import { LoginComponent } from './core/components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    LayoutComponent,
    HeaderComponent,
    AccountComponent,
    SettingsComponent,
    LoginComponent,
  ],

  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    FormsModule,
    AppRoutingModule,
    CommonModule,
    OAuthModule.forRoot(),
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
