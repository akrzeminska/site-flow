import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactsComponent } from './contacts.component';
import { MaterialModule } from 'src/app/shared/material.module';
import { LocalStorageSeederService } from 'src/app/shared/services/local-storage-seeder.service';
import { ContactsService } from './services/contacts.service';
import { ContactsLocalStorageService } from './services/contacts-local-storage.service';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { ConstructionsService } from '../constructions/services/constructions.service';
import { ConstructionsLocalStorageService } from '../constructions/services/constructions-local-storage.service';
import { TasksService } from '../tasks/services/tasks.service';
import { TasksLocalStorageService } from '../tasks/services/tasks-local-storage.service';
import { ContactCardComponent } from './components/contact-card/contact-card.component';
import { ContactAvatarComponent } from './components/contact-avatar/contact-avatar.component';

@NgModule({
  declarations: [ContactsComponent, ContactFormComponent, ContactCardComponent, ContactAvatarComponent],
  imports: [
    CommonModule,
    ContactsRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
  ],
  providers: [
    LocalStorageSeederService,
    { provide: ContactsService, useExisting: ContactsLocalStorageService },
    NotificationService,
    { provide: ConstructionsService, useExisting: ConstructionsLocalStorageService },
    { provide: TasksService, useExisting: TasksLocalStorageService }
  ]
})
export class ContactsModule { }
