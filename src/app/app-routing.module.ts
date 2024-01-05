import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './core/components/welcome/welcome.component';

const routes: Routes = [
  {
    path: 'constructions',
    loadChildren: () =>
      import('./features/constructions/constructions.module').then(
        (m) => m.ConstructionsModule
      ),
  },
  {
    path: 'costs-estimates',
    loadChildren: () =>
      import('./features/cost-estimates/cost-estimates.module').then(
        (m) => m.CostEstimatesModule
      ),
  },
  {
    path: 'contacts',
    loadChildren: () =>
      import('./features/contacts/contacts.module').then(
        (m) => m.ContactsModule
      ),
  },
  {
    path: 'tasks',
    loadChildren: () =>
      import('./features/tasks/tasks.module').then((m) => m.TasksModule),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./features/user-panel/user-panel.module').then((m) => m.UserPanelModule)
  },
  { path: '', component: WelcomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})
export class AppRoutingModule {}
