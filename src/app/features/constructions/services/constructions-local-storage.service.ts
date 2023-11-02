import { Injectable } from '@angular/core';
import { ConstructionsService } from './constructions.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConstructionsLocalStorageService extends ConstructionsService {

  constructor() {
    super();
  }

  public override getById(id: number): Observable<any> {
    throw new Error('Method not implemented.');
  }
  public override getAll(): Observable<any[]> {
    throw new Error('Method not implemented.');
  }
  public override create(item: any): Observable<any> {
    throw new Error('Method not implemented.');
  }
  public override update(id: number): Observable<any> {
    throw new Error('Method not implemented.');
  }
  public override delete(id: number): Observable<any> {
    throw new Error('Method not implemented.');
  }
}

TODO: // napisać metody, które będą wywoływać odpowiednie wartości z local storage, np przy submit w formularzu ma zadziałać update w 'bazie', z delete przy przycisku usunąć pozycji delete z tabeli danych constructions