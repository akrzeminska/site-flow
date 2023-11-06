import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Construction } from 'src/app/models/construction.model';
import { MatSelectModule } from '@angular/material/select';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgIf, NgFor} from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-feature-dialog',
  templateUrl: './feature-dialog.component.html',
  styleUrls: ['./feature-dialog.component.scss']
})
export class FeatureDialogComponent implements OnInit {
  
  construction!: Construction;
  constructionForm!: FormGroup;
  costSelect: string[] = ['brak', 'Kosztorys nr 1', 'Kosztorys nr 2', 'Kosztorys nr 3'];
  contactList: string[] = ['contact_1,', 'contact_2', 'contact_3', 'contact_4'];

  constructor(private dialogRef: MatDialogRef<FeatureDialogComponent>) {
  }

  private buildContactsOptions() {
    const options = new FormArray(this.contactList.map(() => new FormControl(false)));
    return options;
  }

  ngOnInit(): void {
    //tworzę obiekt zgodny z interfejsem, nie mogę użyć new Constructior, bo Constructor jest interfejsem i nie ma w sobie implementacji, nie można tworzyć bezposredniej implementacji interfejsów
    this.construction = {} as Construction;

    this.constructionForm = new FormGroup({
      id: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
      location: new FormControl('', [Validators.required]),
      client:  new FormControl('', [Validators.required]),
      cost: new FormControl('brak'),
      manager: new FormControl('', [Validators.required]),
      contacts: this.buildContactsOptions(),
      description: new FormControl('')
    });
  }

  save() {
    if (this.constructionForm.valid) {
      this.construction = this.constructionForm.value;
      this.dialogRef.close(this.construction);
      console.log(this.constructionForm.value);
    }
  }

  dismiss() {
    this.dialogRef.close(null);
  }

  onSubmit() {
    if (this.constructionForm.valid) {
      console.log(this.constructionForm.value);
    }
  }
}
