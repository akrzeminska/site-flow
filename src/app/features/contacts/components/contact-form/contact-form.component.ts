import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { ConstructionsService } from 'src/app/features/constructions/services/constructions.service';
import { Contact } from 'src/app/models/contact.model';
import { ContactsService } from '../../services/contacts.service';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import { TasksService } from 'src/app/features/tasks/services/tasks.service';


@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit, OnDestroy {
  contactForm!: FormGroup;
  saveButtonDisabled: boolean = true;
  statusChangesSubscription!: Subscription;
  isEditMode: boolean = false;

  costSelect: string[] = ['brak', 'Kosztorys nr 1', 'Kosztorys nr 2', 'Kosztorys nr 3'];
  taskList: {id: number; name: string}[] = [];
  constructionList: {id: number; name: string}[] = [];
  categoryList: string[] = ['Zarządzanie', 'Projektowanie', 'Wykonawstwo'];
  
  constructor(
    private dialogRef: MatDialogRef<ContactFormComponent>, 
    private formBuilder: NonNullableFormBuilder, 
    private contactsService: ContactsService,
    private constructionsService: ConstructionsService,
    private tasksService: TasksService,
    @Inject(MAT_DIALOG_DATA) public data: Contact | null) {}

  ngOnInit(): void {
    this.isEditMode = !!this.data;
    
    this.contactForm = this.formBuilder.group({
      id: [{value: this.data ? this.data.id : null, disabled: true}],
      company: [this.data ? this.data.company: '', Validators.required],
      name: [this.data ? this.data.name: '', Validators.required],
      surname: [this.data ? this.data.surname: '', Validators.required],
      phone: [this.data ? this.data.phone: '', Validators.required],
      email: [this.data ? this.data.email: '', Validators.required],
      role: [this.data ? this.data.role: '', Validators.required],
      description: [this.data ? this.data.description: ''],
      taskId: [this.data ? this.data.taskId: [], Validators.required],
      constructionId: [this.data ? this.data.constructionId: [], Validators.required],
      category: [this.data ? this.data.category: '', Validators.required]
    });

    if (this.isEditMode) {
      this.contactForm.get('id')?.disable();
    }

    // wyświetlanie wybranych budów przypisanych do kontaktu
    this.constructionsService.getOptions().subscribe((options: { id: number; name: string }[]) => {
      this.constructionList = options.map((option: { id: number; name: string }) => {
        // console.log(this.constructionList)
        return { id: option.id, name: option.name };
      });
    });

    //wyświetlanie wybranych zadań przypisanych do kontaktu
    this.tasksService.getOptions().subscribe((options: { id: number; name: string }[]) => {
      this.taskList = options.map((option: { id: number; name: string }) => {
        // console.log(this.constructionList)
        return { id: option.id, name: option.name };
      });
    });
    
    this.statusChangesSubscription = this.contactForm.statusChanges.subscribe((status) => {
      if (status === 'VALID') {
        this.saveButtonDisabled = false;
      } else {
        this.saveButtonDisabled = true;
      }
    });
  }

  ngOnDestroy(): void {
    this.statusChangesSubscription.unsubscribe();
  }

  clean() {
    this.contactForm.reset();
  }

  dismiss() {
    this.dialogRef.close(null);
  }

  onSubmit() {
    if (this.contactForm.valid) {
      const contactData: Contact = this.contactForm.getRawValue();
      console.log('Id konstrukcji:', contactData.id);
      
      if (contactData.id && this.contactsService.getById(contactData.id)) {
        this.contactsService.update(contactData).subscribe((updatedContact) => {
          console.log('Pomyślnie zaktualizowano');
          this.dialogRef.close(updatedContact);
        },
        (error: string) => {
          console.error('Błąd podczas aktualizacji danych');
        });
      } else {
        this.contactsService.create(contactData).subscribe((newContact) => {
          console.log('Pomyślnie dodano');
          this.dialogRef.close(newContact);
        }),
        (error: string) => {
          console.error('Błąd podczas zapisywania wprowadzonych danych')
        }
      }
    }
  }
}
