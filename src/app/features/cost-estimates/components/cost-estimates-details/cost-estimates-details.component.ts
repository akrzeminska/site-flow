import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CostEstimatesService } from '../../services/cost-estimates.service';
import { CostEstimate } from 'src/app/models/cost-estimate.model';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { NgFor, NgIf } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Work } from 'src/app/models/work.model';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-cost-estimates-details',
  templateUrl: './cost-estimates-details.component.html',
  styleUrls: ['./cost-estimates-details.component.scss']
})

export class CostEstimatesDetailsComponent implements OnInit {
  objectId!: number;
  dataSourceTable!: CostEstimate[];
  dataAllWorks!: Work[];

  displayedColumns: string[] = ['no', 'name', 'amount', 'symbol', 'price', 'value'];
  
  constructor (private route: ActivatedRoute,
    private costEstimatesService: CostEstimatesService) {}
    
  ngOnInit(): void {
      this.route.params.subscribe(params => {
        console.log(params['id']);
        this.objectId = params['id'];
      })
      this.getDataById(this.objectId);
      this.getDataAllWorks(this.objectId); 
  }

  getDataById(id:number) {
      this.costEstimatesService
        .getById(id)
        .subscribe((costEstimate: any) => {
          if (costEstimate) {
            this.dataSourceTable = [costEstimate];
          } else {
            console.log('Nie znaleziono kosztorysu o podanym id.');
          }
          console.log('Dane po pobraniu przez getById:', this.dataSourceTable);
        });
  }

  getDataAllWorks(id: number) {
    this.costEstimatesService
      .getAllWorks(id)
      .subscribe((allWorks: any) => {
        if (allWorks) {
          this.dataAllWorks = allWorks;
        } else {
          console.log('Nie znaleziono robót w podanym kosztorysie')
        }
        console.log('Dane po pobraniu getAllWorks', this.dataAllWorks);
      })
    
  }
}
