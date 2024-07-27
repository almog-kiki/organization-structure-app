import { Injectable } from '@angular/core';
import { DataService } from './data.service'

const path = '/api/v1/';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private dataService: DataService) { }

  getAll() {
    return this.dataService.get(path + "tasks");
  }

  getEmployees() {
  	 return this.dataService.get(path + "users/employees");
  }
  
  assignTask(data) {
  	return this.dataService.post(path + "tasks/assign", data);
  }
}
