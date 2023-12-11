import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CostEstimatesService } from '../../services/cost-estimates.service';
import { CostEstimate } from 'src/app/models/cost-estimate.model';

@Component({
  selector: 'app-cost-estimates-details',
  templateUrl: './cost-estimates-details.component.html',
  styleUrls: ['./cost-estimates-details.component.scss']
})
export class CostEstimatesDetailsComponent implements OnInit {
objectId!: number;
dataSource!: CostEstimate;

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
}
