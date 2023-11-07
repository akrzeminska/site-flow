import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Construction } from 'src/app/models/construction.model';

@Component({
  selector: 'app-feature-dialog',
  templateUrl: './feature-dialog.component.html',
  styleUrls: ['./feature-dialog.component.scss']
})
export class FeatureDialogComponent implements OnInit {
  constructionForm!: FormGroup;
  costSelect: string[] = ['brak', 'Kosztorys nr 1', 'Kosztorys nr 2', 'Kosztorys nr 3'];
  contactList: string[] = ['contact_1', 'contact_2', 'contact_3', 'contact_4'];
  taskList: string[] = ['task_1', 'task_2', 'task_3', 'task_4'];
  statusOptions: string[] = ['In progress', 'Planning', 'Completed'];

  constructor(private dialogRef: MatDialogRef<FeatureDialogComponent>, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.constructionForm = this.formBuilder.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      location: ['', Validators.required],
      client: ['', Validators.required],
      costEstimateId: 'brak',
      manager: ['', Validators.required],
      contactId: ['', Validators.required],
      description: '',
      taskId: ['', Validators.required],
      status: ['', Validators.required]
    });
  }

  save() {
    if (this.constructionForm.valid) {
      const constructionData: Construction = this.constructionForm.value;
      this.dialogRef.close(constructionData);
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
