import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Construction } from 'src/app/models/construction.model';

@Injectable({
  providedIn: 'root'
})
export abstract class ConstructionsService {
  public abstract getById(id: number): Observable<Construction | null>;
  public abstract getAll(): Observable<Construction[]>;
  public abstract create(item: Construction): Observable<number>;
  public abstract update(id: number): Observable<any[]>;
  public abstract delete(id: number): Observable<any>;
}

// otypować zwracane wartości, a nie any
// po to, żeby wstrzyknąć do komponentu, żeby w przyszłości zastąpić serwis z danymi z localstorage na serwis z danymi z backendu