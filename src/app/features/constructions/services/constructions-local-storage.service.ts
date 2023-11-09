import { Injectable } from '@angular/core';
import { ConstructionsService } from './constructions.service';
import { Observable, of } from 'rxjs';
import { Construction } from 'src/app/models/construction.model';

@Injectable({
  providedIn: 'root'
})
export class ConstructionsLocalStorageService extends ConstructionsService {

  public MAX_CONSTRUCTION_ID: number = 100;

  constructor() {
    super();
  }

  public override getById(id: number): Observable<Construction | null> {
    const localStorageKey = `construction_${id}`;
    const localStorageData = localStorage.getItem(localStorageKey);

    if (localStorageData) {
      const construction: Construction = JSON.parse(localStorageData);
      return of(construction);
    } else {
      return of(null);
    }
  }
  public override getAll(): Observable<Construction[]> {
    const constructions: Construction[] = [];

    for (let id = 1; id<= this.MAX_CONSTRUCTION_ID; id++) {
      const construction$ = this.getById(id);
      construction$.subscribe((construction) => {
        if (construction) {
          constructions.push(construction);
        }
      })
    }
    return of(constructions)
  }

  public override create(item: Construction): Observable<Construction[]> {
    const existingConstruction = this.getById(item.id);

    existingConstruction.subscribe((existingConstruction) => {
      if (!existingConstruction) {
        const localStorageKey = `construction_${item.id}`;
        localStorage.setItem(localStorageKey, JSON.stringify(item));
      }
    });

    return this.getAll();
  }

  public override update(id: number): Observable<any[]> {
    throw new Error('Method not implemented.');
  }
  public override delete(id: number): Observable<any[]> {
    throw new Error('Method not implemented.');
  }
}

// napisać metody, które będą wywoływać odpowiednie wartości z local storage, np przy submit w formularzu ma zadziałać update w 'bazie', z delete przy przycisku usunąć pozycji delete z tabeli danych constructions, edycja ma otworzyc uzupelniony formularz i po zapisie wykonywać uppate, dodaj ma być przypięte do create
