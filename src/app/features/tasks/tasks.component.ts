import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import {
  CdkDragDrop,
  CdkDrag,
  CdkDropList,
  CdkDropListGroup,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { TasksService } from './services/tasks.service';
import { Task } from 'src/app/models/task.model';
import { ConfirmDialogComponent } from 'src/app/shared/components/confirm-dialog/confirm-dialog.component';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent implements OnInit {
  dataTasks: Task[] = [];
  todo: Task[] = [];
  inProgress: Task[] = [];
  toAccept: Task[] = [];
  done: Task[] = [];

  constructor(private tasksService: TasksService, private notificationService: NotificationService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.getAllData();
  }

  getAllData() {
    this.tasksService.getAll().subscribe((task: Array<Task>) => {
      if (task) {
        this.dataTasks = task;
        this.todo = this.dataTasks.filter(task => task.status === 'nowe');
        this.inProgress = this.dataTasks.filter(task => task.status === 'w trakcie');
        this.toAccept = this.dataTasks.filter(task => task.status === 'do zatwierdzenia');
        this.done = this.dataTasks.filter(task => task.status === 'zakończone');
        console.log(this.todo);
        console.log(this.toAccept);
        console.log(this.inProgress);
        console.log(this.done);

      } else {
        console.log('Nie znaleziono zadań.');
      }
      console.log('Zadania po pobraniu przez getAllData:', this.dataTasks);
    });
  }

  drop(event: CdkDragDrop<any>, status: string) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      const movedTask = event.item.data;
      movedTask.data.status = status;
      console.log('Pokaż przesuwany task:', movedTask);
      this.tasksService.updateTaskStatus(movedTask.data).subscribe(() => {
        this.getAllData();
      });
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  deleteElement(id: number) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: { message: 'Czy na pewno chcesz usunąć ten element?' }
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        this.tasksService.delete(id).subscribe(() => {
          this.notificationService.openSnackBar('Element został pomyślnie usunięty', 'Zamknij');
          this.getAllData();
        });
      }
    });
  }

  applyFilter(event: Event) {
  }
}
