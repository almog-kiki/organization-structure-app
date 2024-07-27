import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders , HttpErrorResponse} from '@angular/common/http';
// import { throwError } from 'rxjs';
// import { catchError } from 'rxjs/operators';
import { DataService } from './data.service'

const baseUrl = '/api/v1/auth/';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private dataService: DataService) { }

  login(firstname, password) {
   	const data = {
   		"firstName": firstname,
   		"password": password
   	}
    return this.dataService.post(baseUrl + "login", data, true);
  }
}

