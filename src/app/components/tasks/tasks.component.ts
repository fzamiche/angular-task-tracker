import { Component } from '@angular/core';
import {Task} from "../../models/Task";
import {TASKS} from "../../../assets/mock-tasks";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {

  tasks: Task[] = TASKS;

}
