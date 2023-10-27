import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'constructions',
    loadChildren: () =>
      import('./features/constructions/constructions.module').then(
        (m) => m.ConstructionsModule
      ),
  },
  {
    path: 'costs',
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
    path: '**',
    loadChildren: () =>
      import('./features/user-panel/user-panel.module').then((m) => m.UserPanelModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
