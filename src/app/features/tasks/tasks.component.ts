import { Component, OnInit } from '@angular/core';
import {NgFor} from '@angular/common';
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

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  dataTasks: Task[] = [];
  todo: Task[] = [];
  inProgress: Task[] = [];
  toAccept: Task[] = [];
  done: Task[] = [];
  item: Task[] = [];
  currentItem!: any;

  constructor(private tasksService: TasksService) {}

  ngOnInit(): void {
    this.getAllData();
  }
  
  getAllData() {
    this.tasksService
      .getAll()
      .subscribe((task: Array<Task>) => {
        if (task) {
          this.dataTasks = task;
          // this.updateTaskArrays();
        } else {
          console.log('Nie znaleziono zadań.');
        }
        console.log('Zadania po pobraniu przez getAllData:', this.dataTasks);
      });
  }

  drop(event: CdkDragDrop<Task[]>, status: string) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      const movedTask = event.item.data;
      movedTask.status = status;
      this.tasksService.updateTaskStatus(movedTask).subscribe(() => {
        this.updateTaskArrays();
      });
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  updateTaskArrays() {
    this.todo = this.dataTasks.filter(task => task.status === 'nowe');
    this.inProgress = this.dataTasks.filter(task => task.status === 'w trakcie');
    this.toAccept = this.dataTasks.filter(task => task.status === 'do zatwierdzenia');
    this.done = this.dataTasks.filter(task => task.status === 'zakończone');
  }

  getFilteredTaskArray(status: string): Task[] {
    return this.dataTasks.filter(m => m.status == status);
  }

  onDragStart(item: any) {
    this.currentItem = item;
  }
  
}
