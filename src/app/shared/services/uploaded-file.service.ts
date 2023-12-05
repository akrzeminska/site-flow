import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export abstract class UploadedFileService {
  public abstract create(id: number, result: string): Observable<any>;
  public abstract getById(id: number): Observable<string>;
}
