import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';
import { CostEstimatesComponent } from './features/cost-estimates/cost-estimates.component';
import { TasksComponent } from './features/tasks/tasks.component';
import { UserPanelComponent } from './features/user-panel/user-panel.component';
import { ConstructionsComponent } from './features/constructions/constructions.component';
import { ContactsComponent } from './features/contacts/contacts.component';

import { LayoutComponent } from './layout/layout.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { NavbarComponent } from './layout/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    CostEstimatesComponent,
    TasksComponent,
    UserPanelComponent,
    ConstructionsComponent,
    ContactsComponent,
    SidebarComponent,
    NavbarComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
