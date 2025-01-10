import { Injectable } from '@angular/core';
import {TASKS} from "../../assets/mock-tasks";
import {Task} from "../models/Task";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  getsTasks(): Observable<Task[]>{
    const tasks = of(TASKS);
    return tasks;
  }
}
