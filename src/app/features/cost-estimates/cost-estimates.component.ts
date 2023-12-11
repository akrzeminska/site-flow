import { Component, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import {MatTableModule} from '@angular/material/table';
import { Router } from '@angular/router';
import { CostEstimatesService } from './services/cost-estimates.service';

@Component({
  selector: 'app-cost-estimates',
  templateUrl: './cost-estimates.component.html',
  styleUrls: ['./cost-estimates.component.scss']
})

export class CostEstimatesComponent {


  constructor(private router: Router) {}

  @ViewChild(MatAccordion) accordion!: MatAccordion;
  
  applyFilter(event: Event) {
  }

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
