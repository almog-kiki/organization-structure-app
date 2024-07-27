import { Injectable } from '@angular/core';
import { DataService } from './data.service'

const path = '/api/v1/users/';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private dataService: DataService) { }

   getUser() {
    return this.dataService.get(path + "me");
  }
}