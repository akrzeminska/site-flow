import { Injectable } from '@angular/core';
import { ContactsService } from './contacts.service';
import { Observable, of } from 'rxjs';
import { Contact } from 'src/app/models/contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactsLocalStorageService extends ContactsService {

  constructor() {
    super();
  }

  public override getById(id: number): Observable<boolean> {
    const localStorageKey = `contact_${id}`;
    const localStorageData = localStorage.getItem(localStorageKey);
    return of(localStorageData !== null);
  }

  public override getAll(): Observable<Contact[]> {
    const contacts: Contact[] = [];

    for (let key in localStorage) {
      if (key.startsWith('contact_')) {
        const localStorageData = localStorage.getItem(key);
        if (localStorageData) {
          const contact: Contact = JSON.parse(localStorageData);
          contacts.push(contact);
        }
      }
    }
    contacts.sort((a, b) => a.id - b.id)
    return of(contacts);
  }

  private generateNewId(): number {
    const contactsKeys = Object.keys(localStorage).filter((key) => key.startsWith('contact_'));
  
    const ids = contactsKeys
      .map((key) => parseInt(key.split('_')[1], 10));
  
    const newId = Math.max(...ids, 0) + 1;
    return newId;
  }

  public override create(newcontactData: Contact): Observable<number> {
    newcontactData.id = this.generateNewId();
    
    localStorage.setItem(`contact${newcontactData.id}`, JSON.stringify(newcontactData));

    return of(newcontactData.id);
  }

  public override update(updatedContact: Contact): Observable<any> {
    const localStorageKey = `contact_${updatedContact.id}`;
    const localstorageData = localStorage.getItem(localStorageKey);
    if (localstorageData) {
      const existingConstruction: Contact = JSON.parse(localstorageData);
      localStorage.setItem(localStorageKey, JSON.stringify(updatedContact));
      return of([]);
    } else {
      return of([]);
    }
  }

  public override delete(id: number): Observable<any> {
    const localStorageKey = `contact_${id}`;
    localStorage.removeItem(localStorageKey);
    return of(undefined);
  }
}
