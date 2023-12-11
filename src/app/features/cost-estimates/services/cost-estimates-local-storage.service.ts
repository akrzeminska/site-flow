import { Injectable } from '@angular/core';
import { CostEstimatesService } from './cost-estimates.service';
import { Observable, of } from 'rxjs';
import { CostEstimate } from 'src/app/models/cost-estimate.model';

@Injectable({
  providedIn: 'root'
})
export class CostEstimatesLocalStorageService extends CostEstimatesService {

  constructor() {
    super();
  }

  public override getById(id: number): Observable<string | null> {
    const localStorageKey = `costEstimate_${id}`;
    const localStorageData = localStorage.getItem(localStorageKey);
    console.log(localStorageData);

    return of(localStorageData);
  }
  
  public override getAll(): Observable<[]> {
    throw new Error('Method not implemented.');
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
