import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserPanelRoutingModule } from './user-panel-routing.module';
import { MaterialModule } from './../../shared/material.module';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { UserPanelComponent } from './user-panel.component';



@NgModule({
  declarations: [UserPanelComponent],
  imports: [
    CommonModule,
    UserPanelRoutingModule,
    MaterialModule,
    FormsModule,
    MatCardModule
  ],

})
export class UserPanelModule { }
