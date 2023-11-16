import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConstructionsRoutingModule } from './constructions-routing.module';
import { ConstructionsComponent } from './constructions.component';
import { LocalStorageSeederService } from 'src/app/shared/services/local-storage-seeder.service';
import { MaterialModule } from 'src/app/shared/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConstructionsService } from './services/constructions.service';
import { ConstructionsLocalStorageService } from './services/constructions-local-storage.service';
import { FeatureDialogComponent } from './components/feature-dialog/feature-dialog.component';
import { MatInputModule } from '@angular/material/input';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { NotificationService } from 'src/app/shared/services/notification.service';


@NgModule({
  declarations: [ConstructionsComponent, FeatureDialogComponent, ConfirmDialogComponent],
  imports: [
    CommonModule,
    ConstructionsRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule
  ],
  providers: [
    LocalStorageSeederService,
    { provide: ConstructionsService, useExisting: ConstructionsLocalStorageService },
  NotificationService]
})
export class ConstructionsModule { }
