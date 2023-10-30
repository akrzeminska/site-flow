import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConstructionsComponent } from './constructions.component';

const routes: Routes = [
  { path: '**', component: ConstructionsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConstructionsRoutingModule { }
