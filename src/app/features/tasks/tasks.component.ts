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
  dataTasks: Array<Task> = [];
  todo: string[] = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];
  inProgress: string[] = [];
  toAccept: string[] = [];
  done: string[] = [];

  constructor(private tasksService: TasksService) {}

  ngOnInit(): void {
    this.getAllData();
    this.showOptions();
  }
  
  getAllData() {
    this.tasksService
      .getAll()
      .subscribe((task: Array<Task>) => {
        if (task) {
          this.dataTasks = task;
        } else {
          console.log('Nie znaleziono zadań.');
        }
        console.log('Zadania po pobraniu przez getAllData:', this.dataTasks);
      });
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  showOptions() {
    this.tasksService.getOptions();

  }
}
