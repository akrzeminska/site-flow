import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CostEstimate } from 'src/app/models/cost-estimate.model';

@Injectable({
  providedIn: 'root'
})
export abstract class CostEstimatesService {
  public abstract getById(id: number): Observable<string | null>;
  public abstract getAll(): Observable<CostEstimate[]>;
  public abstract create(item: CostEstimate): Observable<number>;
  public abstract update(item: CostEstimate): Observable<any>;
  public abstract delete(id: number): Observable<any>;
}
