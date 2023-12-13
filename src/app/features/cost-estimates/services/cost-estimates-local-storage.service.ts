import { Injectable } from '@angular/core';
import { CostEstimatesService } from './cost-estimates.service';
import { Observable, map, of } from 'rxjs';
import { CostEstimate } from 'src/app/models/cost-estimate.model';

@Injectable({
  providedIn: 'root'
})
export class CostEstimatesLocalStorageService extends CostEstimatesService {
  costEstimates: CostEstimate[] = [];
  allWorks: any[] = [];

  constructor() {
    super();
  }

  public override getById(id: number): Observable<any> {
    const localStorageKey = `costEstimate_${id}`;
    const localStorageData = localStorage.getItem(localStorageKey);
    return of(localStorageData);
  }
  
  public override getAll(): Observable<CostEstimate[]> {
    for (let key in localStorage) {
      if (key.startsWith('costEstimate_')) {
        const localStorageData = localStorage.getItem(key);
        if (localStorageData) {
          const costEstimate: CostEstimate = JSON.parse(localStorageData);
          this.costEstimates.push(costEstimate);
        }
      }
    }
    this.costEstimates.sort((a, b) => a.id - b.id)
    return of(this.costEstimates);
  }

  getAllWorks(id: number): Observable<any[]> {
    return this.getById(id).pipe(
      map(data => {
        const parseData = JSON.parse(data || {});
        return parseData.allWorks || [];
      })
    )
  }

  public override create(item: CostEstimate): Observable<number> {
    throw new Error('Method not implemented.');
  }
  public override update(item: CostEstimate): Observable<any> {
    throw new Error('Method not implemented.');
  }
  public override delete(id: number): Observable<any> {
    throw new Error('Method not implemented.');
  }
}
