import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cost-estimates-details',
  templateUrl: './cost-estimates-details.component.html',
  styleUrls: ['./cost-estimates-details.component.scss']
})
export class CostEstimatesDetailsComponent implements OnInit {
objectId: string ='';

constructor (private route: ActivatedRoute) {}
  
ngOnInit(): void {
    this.route.params.subscribe(params => {
      console.log(params['id']);
      this.objectId = params['id'];
    }) 
  }
}
