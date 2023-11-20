import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Construction } from 'src/app/models/construction.model';
import { Task } from 'src/app/models/task.model';

@Injectable({
  providedIn: 'root'
})
export abstract class TasksService {
  public abstract getById(id: number): Observable<boolean>;
  public abstract getAll(): Observable<Task[]>;
  public abstract getOptions(): Observable<{ id: number, name: string}[]>;
  public abstract create(item: Task): Observable<number>;
  public abstract update(item: Task): Observable<any>;
  public abstract delete(id: number): Observable<any>;
}
