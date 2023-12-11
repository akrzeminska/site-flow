import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CostEstimatesRoutingModule } from './cost-estimates-routing.module';
import { CostEstimatesComponent } from './cost-estimates.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatInputModule } from '@angular/material/input';
import { CostEstimatesDetailsComponent } from './components/cost-estimates-details/cost-estimates-details.component';


@NgModule({
  declarations: [CostEstimatesComponent, CostEstimatesDetailsComponent],
  imports: [
    CommonModule,
    CostEstimatesRoutingModule,
    SharedModule,
    MatInputModule
  ]
})
export class CostEstimatesModule { }
