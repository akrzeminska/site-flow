import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksRoutingModule } from './tasks-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { TasksComponent } from './tasks.component';
import { TasksService } from './services/tasks.service';
import { LocalStorageSeederService } from 'src/app/shared/services/local-storage-seeder.service';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { TasksLocalStorageService } from './services/tasks-local-storage.service';

@NgModule({
  declarations: [TasksComponent],
  imports: [CommonModule, TasksRoutingModule, SharedModule],
  providers: [
    LocalStorageSeederService,
    { provide: TasksService, useExisting: TasksLocalStorageService },
    NotificationService,
  ],
})
export class TasksModule {}
