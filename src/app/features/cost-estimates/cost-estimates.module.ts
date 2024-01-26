import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CostEstimatesRoutingModule } from './cost-estimates-routing.module';
import { CostEstimatesComponent } from './cost-estimates.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatInputModule } from '@angular/material/input';
import { CostEstimatesDetailsComponent } from './components/cost-estimates-details/cost-estimates-details.component';
import { CostEstimatesService } from './services/cost-estimates.service';
import { CostEstimatesLocalStorageService } from './services/cost-estimates-local-storage.service';
import { LocalStorageSeederService } from 'src/app/shared/services/local-storage-seeder.service';


@NgModule({
  declarations: [CostEstimatesComponent, CostEstimatesDetailsComponent],
  imports: [
    CommonModule,
    CostEstimatesRoutingModule,
    SharedModule,
    MatInputModule
  ],
  providers: [
    { provide: CostEstimatesService, useExisting: CostEstimatesLocalStorageService },
  ]
})
export class CostEstimatesModule { }
