import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConstructionsRoutingModule } from './constructions-routing.module';
import { ConstructionsComponent } from './constructions.component';
import { LocalStorageSeederService } from 'src/app/shared/services/local-storage-seeder.service';
import { MaterialModule } from 'src/app/shared/material.module';
import { FormsModule } from '@angular/forms';
import { ConstructionsService } from './services/constructions.service';
import { ConstructionsLocalStorageService } from './services/constructions-local-storage.service';

@NgModule({
  declarations: [ConstructionsComponent],
  imports: [
    CommonModule,
    ConstructionsRoutingModule,
    MaterialModule,
    FormsModule
  ],
  providers: [LocalStorageSeederService,
    { provide: ConstructionsService, useExisting: ConstructionsLocalStorageService }]
})
export class ConstructionsModule { }
