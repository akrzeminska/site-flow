import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export abstract class UploadedFileService {
  public abstract create(id: number, base64Image: string): Observable<any>
}
