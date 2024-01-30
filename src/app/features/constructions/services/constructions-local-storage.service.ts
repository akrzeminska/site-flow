import { Injectable } from '@angular/core';
import { ConstructionsService } from './constructions.service';
import { Observable, of } from 'rxjs';
import { Construction } from 'src/app/features/constructions/models/construction.model';

@Injectable({
  providedIn: 'root',
})
export class ConstructionsLocalStorageService extends ConstructionsService {
  public MAX_CONSTRUCTION_ID: number = 100;

  constructor() {
    super();
  }

  public override getById(id: number): Observable<boolean> {
    const localStorageKey = `construction_${id}`;
    const localStorageData = localStorage.getItem(localStorageKey);
    return of(localStorageData !== null);
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
    constructions.sort((a, b) => a.id - b.id);
    return of(constructions);
  }

  private generateNewId(): number {
    const constructionsKeys = Object.keys(localStorage).filter((key) =>
      key.startsWith('construction_')
    );

    const ids = constructionsKeys.map((key) => parseInt(key.split('_')[1], 10));

    const newId = Math.max(...ids, 0) + 1;
    return newId;
  }

  public override create(
    newConstructionData: Construction
  ): Observable<number> {
    newConstructionData.id = this.generateNewId();

    localStorage.setItem(
      `construction_${newConstructionData.id}`,
      JSON.stringify(newConstructionData)
    );

    return of(newConstructionData.id);
  }

  public override update(updatedConstruction: Construction): Observable<any> {
    const localStorageKey = `construction_${updatedConstruction.id}`;
    const localstorageData = localStorage.getItem(localStorageKey);

    if (localstorageData) {
      const existingConstruction: Construction = JSON.parse(localstorageData);
      localStorage.setItem(
        localStorageKey,
        JSON.stringify(updatedConstruction)
      );
      return of([]);
    } else {
      return of([]);
    }
  }

  public override delete(id: number): Observable<any> {
    const localStorageKey = `construction_${id}`;
    localStorage.removeItem(localStorageKey);
    return of(undefined);
  }

  public override getOptions(): Observable<{ id: number; name: string }[]> {
    const constructionOptions: { id: number; name: string }[] = [];

    for (let key in localStorage) {
      if (key.startsWith('construction_')) {
        const localStorageData = localStorage.getItem(key);
        if (localStorageData) {
          const construction: Construction = JSON.parse(localStorageData);
          const constructionInfo = {
            id: construction.id,
            name: construction.name,
          };
          constructionOptions.push(constructionInfo);
        }
      }
    }
    constructionOptions.sort((a, b) => a.id - b.id);
    return of(constructionOptions);
  }
}
