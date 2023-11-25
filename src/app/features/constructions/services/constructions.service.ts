import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Construction } from 'src/app/models/construction.model';

@Injectable({
  providedIn: 'root'
})
export abstract class ConstructionsService {
  public abstract getById(id: number): Observable<boolean>;
  public abstract getAll(): Observable<Construction[]>;
  public abstract getOptions(): Observable<{ id: number, name: string}[]>;
  public abstract create(item: Construction): Observable<number>;
  public abstract update(item: Construction): Observable<any>;
  public abstract delete(id: number): Observable<any>;
}