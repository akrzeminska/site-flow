import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConstructionsRoutingModule } from './constructions-routing.module';
import { ConstructionsComponent } from './constructions.component';
import { LocalStorageSeederService } from 'src/app/shared/services/local-storage-seeder.service';


@NgModule({
  declarations: [ConstructionsComponent],
  imports: [
    CommonModule,
    ConstructionsRoutingModule
  ],
  providers: [LocalStorageSeederService]
})
export class ConstructionsModule { }
