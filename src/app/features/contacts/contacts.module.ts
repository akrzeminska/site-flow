import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactsComponent } from './contacts.component';
import { MaterialModule } from 'src/app/shared/material.module';
import { LocalStorageSeederService } from 'src/app/shared/services/local-storage-seeder.service';
import { ContactsService } from './services/contacts.service';
import { ContactsLocalStorageService } from './services/contacts-local-storage.service';
import { NotificationService } from 'src/app/shared/services/notification.service';


@NgModule({
  declarations: [ContactsComponent],
  imports: [
    CommonModule,
    ContactsRoutingModule,
    MaterialModule
  ],
  providers: [
    LocalStorageSeederService,
    { provide: ContactsService, useExisting: ContactsLocalStorageService },
    NotificationService
  ]
})
export class ContactsModule { }
