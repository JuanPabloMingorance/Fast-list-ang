import { Injectable } from '@angular/core';
import { Task } from '../interfaces/task';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  tasks: Task[] = [];
  constructor() { }

  setTask = (t: Task) => {
    if(this.tasks.length < 10) this.tasks.unshift(t);
  }

  getTasks = () => {
    return this.tasks;
  }

  deleteTask = (index: number) => {
    const newTasks: Task[] = this.tasks.filter((_e,i,a) =>  a[i] != a[index]);
    this.tasks = newTasks;
  }
}
