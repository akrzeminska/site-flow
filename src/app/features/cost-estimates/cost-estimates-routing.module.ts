import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CostEstimatesComponent } from './cost-estimates.component';
import { CostEstimatesDetailsComponent } from './components/cost-estimates-details/cost-estimates-details.component';

const routes: Routes = [
  { path: ':id', component: CostEstimatesDetailsComponent },
  { path: '**', component: CostEstimatesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CostEstimatesRoutingModule { }
