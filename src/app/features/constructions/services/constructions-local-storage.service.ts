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

    for (let key in localStorage) {
      if (key.startsWith('construction_')) {
        const localStorageData = localStorage.getItem(key);
        if (localStorageData) {
          const construction: Construction = JSON.parse(localStorageData);
          constructions.push(construction);
        }
      }
    }
    constructions.sort((a, b) => a.id - b.id)
    return of(constructions);
  }

  private generateNewId(): number {
    const constructionsKeys = Object.keys(localStorage).filter((key) => key.startsWith('construction_'));
  
    const ids = constructionsKeys
      .map((key) => parseInt(key.split('_')[1], 10));
  
    const newId = Math.max(...ids, 0) + 1;
    return newId;
  }
  
  public override create(newConstructionData: Construction): Observable<number> {
    newConstructionData.id = this.generateNewId();
    
    localStorage.setItem(`construction_${newConstructionData.id}`, JSON.stringify(newConstructionData));

    return of(newConstructionData.id);
  }

  public override update(id: number): Observable<Construction[]> {
    throw new Error('Method not implemented.');
  }

  public override delete(id: number): Observable<any> {
    const localStorageKey = `construction_${id}`;
    localStorage.removeItem(localStorageKey);
    return of([]);
  }
}

// napisać metody, które będą wywoływać odpowiednie wartości z local storage, np przy submit w formularzu ma zadziałać update w 'bazie', z delete przy przycisku usunąć pozycji delete z tabeli danych constructions, edycja ma otworzyc uzupelniony formularz i po zapisie wykonywać update
