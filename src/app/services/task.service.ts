import { Injectable } from '@angular/core';
import {Task} from "../models/Task";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiUrl = 'http://localhost:5000/tasks';

  constructor(private httpClient : HttpClient) { }

  getsTasks(): Observable<Task[]>{
    return this.httpClient.get<Task[]>(this.apiUrl);
  }

  deleteTask(task: Task): Observable<Task> {
     const url  = `${this.apiUrl}/${task.id}`;
     return this.httpClient.delete<Task>(url);
  }
}
