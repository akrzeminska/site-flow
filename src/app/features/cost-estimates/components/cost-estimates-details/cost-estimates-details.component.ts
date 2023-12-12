import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CostEstimatesService } from '../../services/cost-estimates.service';
import { CostEstimate } from 'src/app/models/cost-estimate.model';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MatTableModule } from '@angular/material/table';
import { NgFor, NgIf } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-cost-estimates-details',
  templateUrl: './cost-estimates-details.component.html',
  styleUrls: ['./cost-estimates-details.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})

export class CostEstimatesDetailsComponent implements OnInit {
  objectId!: number;
  dataSource!: CostEstimate[];
  dataAllWorks!: any[];

  columnsToDisplay = ['L.p.', 'Nazwa', 'Ilość', 'J.m.', 'Cena j.m. (M+R)', 'Wartość'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement: any | null;
  
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
            this.dataSource = [costEstimate];
          } else {
            console.log('Nie znaleziono kosztorysu o podanym id.');
          }
          console.log('Dane po pobraniu przez getById:', this.dataSource);
        });
  }

  applyFilter(event: any) {
      
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
