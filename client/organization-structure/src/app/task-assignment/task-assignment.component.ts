import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service'

@Component({
  selector: 'app-task-assignment',
  templateUrl: './task-assignment.component.html',
  styleUrls: ['./task-assignment.component.css']
})
export class TaskAssignmentComponent implements OnInit {
  isLoading = true;
  employees: any;
  isManager = false
  errorMsg= ""

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.retrieveEmployees()
  }


  retrieveEmployees() {
    this.isLoading = true;
    this.taskService.getEmployees()
       .subscribe(
        response => {
          this.employees = response["data"];
          this.isLoading = false;
        });
  }

  assignTask(assignTo) {
    this.isLoading = true;
    const user = JSON.parse(localStorage.getItem('user'))
    const task = {
      assignTo: assignTo,
      taskText: `${user["firstName"]} created task for employee ${assignTo}`,
    }
    this.taskService.assignTask(task)
       .subscribe(
        response => {
          if (response["success"] == true ){
            alert("You assign task succesfully")
          }
          else{
            alert("You assign task falied")
          }
          this.isLoading = false;
        }, error  => {
            this.errorMsg = error
        });
  }
}

