import { Component, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { MatTableModule } from '@angular/material/table';
import { Router } from '@angular/router';
import { CostEstimatesService } from './services/cost-estimates.service';
import { CostEstimate } from 'src/app/features/cost-estimates/models/cost-estimate.model';
import { LocalStorageSeederService } from 'src/app/shared/services/local-storage-seeder.service';

@Component({
  selector: 'app-cost-estimates',
  templateUrl: './cost-estimates.component.html',
  styleUrls: ['./cost-estimates.component.scss'],
})
export class CostEstimatesComponent implements OnInit {
  dataCostEstimates: Array<CostEstimate> = [];

  @ViewChild(MatAccordion) accordion!: MatAccordion;

  constructor(
    private router: Router,
    private seederService: LocalStorageSeederService,
    private costEstimatesService: CostEstimatesService
  ) {
    seederService.ensureDataSeeder();
  }

  ngOnInit(): void {
    this.getAllData();
  }

  getAllData() {
    this.costEstimatesService
      .getAll()
      .subscribe((costEstimate: Array<CostEstimate>) => {
        if (costEstimate) {
          this.dataCostEstimates = costEstimate;
        } else {
          console.log('Nie znaleziono kosztorysów.');
        }
        console.log(
          'Dane po pobraniu przez getAllData:',
          this.dataCostEstimates
        );
      });
  }

  applyFilter(event: Event) {}

  openAllPanels() {
    if (this.accordion) {
      this.accordion.openAll();
    }
  }

  closeAllPanels() {
    if (this.accordion) {
      this.accordion.closeAll();
    }
  }

  navigateToDetails(id: number) {
    this.router.navigate(['/costs-estimates/', id.toString()]);
  }
}
