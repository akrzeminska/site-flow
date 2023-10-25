import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CostEstimatesComponent } from './cost-estimates.component';

const routes: Routes = [
  { path: '**', component: CostEstimatesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CostEstimatesRoutingModule { }
