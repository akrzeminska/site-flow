import { Injectable } from '@angular/core';
import { UploadedFileService } from './uploaded-file.service';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadedFileLocalStorageService extends UploadedFileService {
  constructor() {
    super();
  }

  public override create(id: number, result: string): Observable<any> {
    try {
      localStorage.setItem(`uploaded_file_contact_${id}`, result);
      return of(true);
    } catch (error) {
      console.error('Error updating local storage:', error);
      return of(false);
    }
  }

  public override getById(id: number): Observable<string> {
    const localStorageKey = `uploaded_file_contact_${id}`;
    const localStorageData = localStorage.getItem(localStorageKey) ?? '';
    
    return of(localStorageData);
  }
  
}
