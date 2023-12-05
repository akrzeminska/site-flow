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

  public override create(id: number, base64Image: string): Observable<any> {
    try {
      localStorage.setItem(`uploaded_file_contact_${id}`, base64Image);
      return of(true);
    } catch (error) {
      console.error('Error updating local storage:', error);
      return of(false);
    }
  }
}
