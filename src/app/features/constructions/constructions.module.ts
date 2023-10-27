import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConstructionsRoutingModule } from './constructions-routing.module';
import { ConstructionsComponent } from './constructions.component';


@NgModule({
  declarations: [ConstructionsComponent],
  imports: [
    CommonModule,
    ConstructionsRoutingModule
  ]
})
export class ConstructionsModule { }
