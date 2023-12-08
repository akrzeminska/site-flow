import { Component, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import {MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-cost-estimates',
  templateUrl: './cost-estimates.component.html',
  styleUrls: ['./cost-estimates.component.scss']
})



export class CostEstimatesComponent {


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

  

  
}
