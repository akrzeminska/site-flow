import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './core/components/login/login.component';
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [
  {
    path: 'constructions',
    loadChildren: () =>
      import('./features/constructions/constructions.module').then(
        (m) => m.ConstructionsModule
      ), canActivate: [AuthGuard]
  },
  {
    path: 'costs-estimates',
    loadChildren: () =>
      import('./features/cost-estimates/cost-estimates.module').then(
        (m) => m.CostEstimatesModule
      ), canActivate: [AuthGuard]
  },
  {
    path: 'contacts',
    loadChildren: () =>
      import('./features/contacts/contacts.module').then(
        (m) => m.ContactsModule
      ), canActivate: [AuthGuard]
  },
  {
    path: 'tasks',
    loadChildren: () =>
      import('./features/tasks/tasks.module').then((m) => m.TasksModule),
      canActivate: [AuthGuard]
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./features/user-panel/user-panel.module').then(
        (m) => m.UserPanelModule
      ), canActivate: [AuthGuard]
  },
  { 
    path: 'login', component: LoginComponent 
  },
  { 
    path: '', component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
