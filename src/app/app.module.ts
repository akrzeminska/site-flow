import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';
import { ConstructionsComponent } from './layout/constructions/constructions.component';
import { ContactsComponent } from './layout/contacts/contacts.component';
import { CostEstimatesComponent } from './features/cost-estimates/cost-estimates.component';
import { TasksComponent } from './features/tasks/tasks.component';
import { UserPanelComponent } from './features/user-panel/user-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    ConstructionsComponent,
    ContactsComponent,
    CostEstimatesComponent,
    TasksComponent,
    UserPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
