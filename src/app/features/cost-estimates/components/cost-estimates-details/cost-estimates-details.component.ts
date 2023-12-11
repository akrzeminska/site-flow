import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CostEstimatesService } from '../../services/cost-estimates.service';
import { CostEstimate } from 'src/app/models/cost-estimate.model';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MatTableModule } from '@angular/material/table';
import { NgFor, NgIf } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  description: string;
}

@Component({
  selector: 'app-cost-estimates-details',
  templateUrl: './cost-estimates-details.component.html',
  styleUrls: ['./cost-estimates-details.component.scss']
})

export class CostEstimatesDetailsComponent implements OnInit {
  objectId!: number;
  dataSource!: CostEstimate;
 
  columnsToDisplay = ['Lp.', 'Nazwa robót', 'Ilość', 'Jm', 'Cena Jedn. (M+R)', 'Wartość' ];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement!: PeriodicElement | null;
  
  constructor (private route: ActivatedRoute,
    private costEstimatesService: CostEstimatesService) {}
    
  ngOnInit(): void {
      this.route.params.subscribe(params => {
        console.log(params['id']);
        this.objectId = params['id'];
      })
      this.getDataById(this.objectId);
  }

  getDataById(id:number) {
      this.costEstimatesService
        .getById(id)
        .subscribe((costEstimate: any) => {
          if (costEstimate) {
            this.dataSource = costEstimate;
          } else {
            console.log('Nie znaleziono kosztorysu o podanym id.');
          }
          console.log('Dane po pobraniu przez getById:', this.dataSource);
        });
  }

  applyFilter(event: any) {
      
  } 
}
