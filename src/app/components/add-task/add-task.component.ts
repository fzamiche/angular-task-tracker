import {Component, EventEmitter, Output} from '@angular/core';
import {Task} from "../../models/Task";

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {

  @Output() onAddTask : EventEmitter<Task> = new EventEmitter();

  text: string = '';
  day: string = '';
  reminder: boolean = false;

  onSubmit() {
    if(!this.text) {
      alert('Please add a task');
      return;
    }
    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    };

    this.onAddTask.emit(newTask); // permet de transmettre dans un event la tâche à ajouter au parent

    // Reset the form
    this.text = '';
    this.day = '';
    this.reminder = false;
  }
}
