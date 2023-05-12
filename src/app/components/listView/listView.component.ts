import { Component, Input } from '@angular/core';
import { Task } from 'src/app/interfaces/task';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'list-view-app',
  templateUrl: './listView.component.html',
  styleUrls: ['./listView.component.css'],
})
export class ListViewComponent {

  constructor(public storeService: StoreService){}

  tasks: Task[] = this.storeService.getTasks();
  

  isComplete = (i: number) => {
    this.storeService.deleteTask(i)
    this.tasks = this.storeService.getTasks();
  }
}
