import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConstructionsRoutingModule } from './constructions-routing.module';
import { ConstructionsComponent } from './constructions.component';
import { LocalStorageSeederService } from 'src/app/shared/services/local-storage-seeder.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConstructionsService } from './services/constructions.service';
import { ConstructionsLocalStorageService } from './services/constructions-local-storage.service';
import { FeatureDialogComponent } from './components/feature-dialog/feature-dialog.component';
import { MatInputModule } from '@angular/material/input';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { ConfirmDialogComponent } from 'src/app/shared/components/confirm-dialog/confirm-dialog.component';

@NgModule({
  declarations: [ConstructionsComponent, FeatureDialogComponent],
  imports: [
    CommonModule,
    ConstructionsRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
  ],
  providers: [
    {
      provide: ConstructionsService,
      useExisting: ConstructionsLocalStorageService,
    }
  ],
})
export class ConstructionsModule {}
