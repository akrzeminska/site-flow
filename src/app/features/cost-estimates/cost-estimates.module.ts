import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CostEstimatesRoutingModule } from './cost-estimates-routing.module';
import { CostEstimatesComponent } from './cost-estimates.component';


@NgModule({
  declarations: [CostEstimatesComponent],
  imports: [
    CommonModule,
    CostEstimatesRoutingModule
  ]
})
export class CostEstimatesModule { }
