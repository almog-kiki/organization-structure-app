import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service'

@Component({
  selector: 'app-task-management',
  templateUrl: './task-management.component.html',
  styleUrls: ['./task-management.component.css']
})
export class TaskManagementComponent implements OnInit {

  isLoading = true;
  tasks: any;

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.retrieveTasks()
  }


  retrieveTasks() {
    this.isLoading = true;
    this.taskService.getAll()
       .subscribe(
        response => {
          this.tasks = response["data"];
          this.isLoading = false;
        });
  }

}
