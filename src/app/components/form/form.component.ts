import { Component } from "@angular/core";
import { Task } from "src/app/interfaces/task";
import { StoreService } from "src/app/services/store.service";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent{
  text: string = "Task: "
  placeHolder: string = "Write Here"
  
  constructor(public storeService: StoreService){

  }

  setTask(i: HTMLInputElement){
    const val: string = i.value;

    if(val.trim() != ""){
      const newTask: Task = {
        text: val.trim(),
        complete: false,
      }
  
      this.storeService.setTask(newTask);
      i.value = "";
    }
  }

}
