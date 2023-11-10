import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { Construction } from 'src/app/models/construction.model';
import { ConstructionsService } from '../../services/constructions.service';

@Component({
  selector: 'app-feature-dialog',
  templateUrl: './feature-dialog.component.html',
  styleUrls: ['./feature-dialog.component.scss']
})
export class FeatureDialogComponent implements OnInit, OnDestroy {
  constructionForm!: FormGroup;
  saveButtonDisabled: boolean = true;
  statusChangesSubscription!: Subscription;

  costSelect: string[] = ['brak', 'Kosztorys nr 1', 'Kosztorys nr 2', 'Kosztorys nr 3'];
  contactList: string[] = ['contact_1', 'contact_2', 'contact_3', 'contact_4'];
  taskList: string[] = ['task_1', 'task_2', 'task_3', 'task_4'];
  statusOptions: string[] = ['In progress', 'Planning', 'Completed'];

  constructor(private dialogRef: MatDialogRef<FeatureDialogComponent>, private formBuilder: NonNullableFormBuilder, private constructionsService: ConstructionsService) {}

  ngOnInit(): void {
    this.constructionForm = this.formBuilder.group({
      id: [null],
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

    this.statusChangesSubscription = this.constructionForm.statusChanges.subscribe((status) => {
      if (status === 'VALID') {
        this.saveButtonDisabled = false;
      } else {
        this.saveButtonDisabled = true;
      }
    });
  }

  ngOnDestroy() {
    this.statusChangesSubscription.unsubscribe();
  }

  clean() {
    this.constructionForm.reset();
  }

  dismiss() {
    this.dialogRef.close(null);
  }

  onSubmit() {
    if (this.constructionForm.valid) {
      const newConstructionData: Construction = this.constructionForm.value;
      
      this.constructionsService.create(newConstructionData).subscribe((updatedConstructions) => {
        console.log('pomyślnie dodano');
        this.dialogRef.close(newConstructionData);
      }),
      (error:string) => {
        console.error('Błąd podczas zapisywania wprowadzonych danych')
      }
    }
  }
}
