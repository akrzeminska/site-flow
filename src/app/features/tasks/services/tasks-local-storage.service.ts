import { Injectable } from '@angular/core';
import { TasksService } from './tasks.service';
import { Task } from 'src/app/models/task.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksLocalStorageService extends TasksService {
  tasksArr: Task[] = [];

  public override getById(id: number): Observable<boolean> {
    const localStorageKey = `task_${id}`;
    const localStorageData = localStorage.getItem(localStorageKey);
    return of(localStorageData !== null);
  }

  public override getAll(): Observable<Task[]> {

    for (let key in localStorage) {
      if (key.startsWith('task_')) {
        const localStorageData = localStorage.getItem(key);
        if (localStorageData) {
          const task: Task = JSON.parse(localStorageData);
          this.tasksArr.push(task);
        }
      }
    }
    this.tasksArr.sort((a, b) => a.id - b.id)
    return of(this.tasksArr);
  }

  public override getOptions(): Observable<{ id: number, name: string}[]> {
    const taskOptions: { id: number, name: string }[] = [];

    for (let key in localStorage) {
      if (key.startsWith('task_')) {
        const localStorageData = localStorage.getItem(key);
        if (localStorageData) {
          const task: Task = JSON.parse(localStorageData);
          const taskInfo = {
            id: task.id,
            name: task.name
          };
          taskOptions.push(taskInfo);
        }
      }
    }
    taskOptions.sort((a,b) => a.id - b.id);
    return of(taskOptions);
  }

  public override create(item: Task): Observable<number> {
    throw new Error('Method not implemented.');
  }
  public override update(item: Task): Observable<any> {
    throw new Error('Method not implemented.');
  }
  public override delete(id: number): Observable<any> {
    throw new Error('Method not implemented.');
  }

  constructor() {
    super();
  }
}
