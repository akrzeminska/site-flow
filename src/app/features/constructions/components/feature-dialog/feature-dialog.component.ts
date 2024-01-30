import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  NonNullableFormBuilder,
  Validators,
} from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { Construction } from 'src/app/features/constructions/models/construction.model';
import { ConstructionsService } from '../../services/constructions.service';

@Component({
  selector: 'app-feature-dialog',
  templateUrl: './feature-dialog.component.html',
  styleUrls: ['./feature-dialog.component.scss'],
})
export class FeatureDialogComponent implements OnInit, OnDestroy {
  constructionForm!: FormGroup;
  saveButtonDisabled: boolean = true;
  statusChangesSubscription!: Subscription;
  isEditMode: boolean = false;

  costSelect: string[] = [
    'brak',
    'Kosztorys nr 1',
    'Kosztorys nr 2',
    'Kosztorys nr 3',
  ];
  contactList: number[] = [1, 2, 3, 4];
  taskList: number[] = [1, 2, 3, 4];
  statusOptions: string[] = ['In progress', 'Planning', 'Completed'];

  constructor(
    private dialogRef: MatDialogRef<FeatureDialogComponent>,
    private formBuilder: NonNullableFormBuilder,
    private constructionsService: ConstructionsService,
    @Inject(MAT_DIALOG_DATA) public data: Construction | null
  ) {}

  ngOnInit(): void {
    this.isEditMode = !!this.data;

    this.constructionForm = this.formBuilder.group({
      id: [{ value: this.data ? this.data.id : null, disabled: true }],
      name: [this.data ? this.data.name : '', Validators.required],
      location: [this.data ? this.data.location : '', Validators.required],
      client: [this.data ? this.data.client : '', Validators.required],
      costEstimateId: 'brak',
      manager: [this.data ? this.data.manager : '', Validators.required],
      contactId: [this.data ? this.data.contactId : '', Validators.required],
      description: [this.data ? this.data.description : ''],
      taskId: [this.data ? this.data.taskId : '', Validators.required],
      status: [this.data ? this.data.status : '', Validators.required],
    });

    if (this.isEditMode) {
      this.constructionForm.get('id')?.disable();
    }

    this.statusChangesSubscription =
      this.constructionForm.statusChanges.subscribe((status) => {
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
      const constructionData: Construction =
        this.constructionForm.getRawValue();
      console.log('Id konstrukcji:', constructionData.id);

      if (
        constructionData.id &&
        this.constructionsService.getById(constructionData.id)
      ) {
        this.constructionsService.update(constructionData).subscribe(
          (updatedConstruction) => {
            console.log('Pomyślnie zaktualizowano');
            this.dialogRef.close(updatedConstruction);
          },
          (error: string) => {
            console.error('Błąd podczas aktualizacji danych');
          }
        );
      } else {
        this.constructionsService
          .create(constructionData)
          .subscribe((newConstruction) => {
            console.log('Pomyślnie dodano');
            this.dialogRef.close(newConstruction);
          }),
          (error: string) => {
            console.error('Błąd podczas zapisywania wprowadzonych danych');
          };
      }
    }
  }
}
