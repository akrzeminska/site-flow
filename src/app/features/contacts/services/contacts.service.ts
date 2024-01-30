import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from 'src/app/features/contacts/models/contact.model';

@Injectable({
  providedIn: 'root',
})
export abstract class ContactsService {
  public abstract getById(id: number): Observable<boolean>;
  public abstract getAll(): Observable<Contact[]>;
  public abstract create(item: Contact): Observable<number>;
  public abstract update(item: Contact): Observable<any>;
  public abstract delete(id: number): Observable<any>;
}
