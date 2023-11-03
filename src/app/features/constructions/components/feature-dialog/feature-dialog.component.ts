import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
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
  contacts = new FormControl('');

  contactList: string[] = ['contact_1,', 'contact_2', 'contact_3', 'contact_4'];

  constructor(private dialogRef: MatDialogRef<FeatureDialogComponent>) {}
  
  ngOnInit(): void {
    //tworzę obiekt zgodny z interfejsem, nie mogę użyć new Constructior, bo Constructor jest interfejsem i nie ma w sobie implementacji, nie można tworzyć bezposredniej implementacji interfejsów
    this.construction = {} as Construction;
  }

  save() {
    this.dialogRef.close(this.construction);
  }
  dismiss() {
    this.dialogRef.close(null);
  }
}
