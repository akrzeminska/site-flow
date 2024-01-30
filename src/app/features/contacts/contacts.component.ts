import { Component } from '@angular/core';
import { ContactsService } from './services/contacts.service';
import { MatDialog } from '@angular/material/dialog';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { LocalStorageSeederService } from 'src/app/shared/services/local-storage-seeder.service';
import { Contact } from 'src/app/features/contacts/models/contact.model';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { ConfirmDialogComponent } from 'src/app/shared/components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent {
  showFiller = false;
  dataContacts: Array<Contact> = [];

  constructor(
    private seederService: LocalStorageSeederService,
    private contactsService: ContactsService,
    private dialog: MatDialog,
    private notificationService: NotificationService
  ) {
    seederService.ensureDataSeeder();
  }

  ngOnInit(): void {
    this.getAllData();
  }

  getAllData() {
    this.contactsService.getAll().subscribe((contacts: Array<Contact>) => {
      if (contacts) {
        this.dataContacts = contacts;
      } else {
        console.log('Nie znaleziono kontaktu o podanym id.');
      }
      console.log('Dane po pobraniu przez getAllData:', this.dataContacts);
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;

    const filteredData = this.dataContacts.filter((contact: Contact) => {
      const fullName =
        `${contact.name} ${contact.surname} ${contact.company}`.toLowerCase();
      return fullName.includes(filterValue.trim().toLowerCase());
    });

    this.dataContacts = filteredData;
  }

  editElement(contact: Contact): void {
    let dialogRef = this.dialog.open(ContactFormComponent, {
      width: '700px',
      data: contact,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result === true) {
        this.getAllData();
      }
    });
  }

  deleteElement(id: number) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: { message: 'Czy na pewno chcesz usunąć ten element?' },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result === true) {
        this.contactsService.delete(id).subscribe(() => {
          this.notificationService.openSnackBar(
            'Element został pomyślnie usunięty',
            'Zamknij'
          );
          this.getAllData();
        });
      }
    });
  }

  openAddContactDialog(): void {
    let dialogRef = this.dialog.open(ContactFormComponent, {
      width: '700px',
      data: null,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('Okno zostało zamknięte', result);
      this.getAllData();
    });
  }
}
