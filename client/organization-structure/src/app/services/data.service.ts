import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders , HttpErrorResponse} from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };

  constructor(private http: HttpClient) { }

  buildOptions(isLogin) {
  	let headers = new HttpHeaders();
    if (isLogin) {
      headers = headers.set('Content-Type','application/json')
    } else {
      headers = headers.set('Content-Type','application/json')
        .set('authorization', localStorage.getItem('token'))
    }
    const options =  { headers: headers }
    return options;
  }

  get(path) {
  	const options = this.buildOptions(false);
    return this.http.get(path, options).pipe(catchError(this.handleError));
  }

  post(path, data, isLogin: boolean = false) {
  	const options = this.buildOptions(isLogin)
    return this.http.post(path, data, options).pipe(catchError(this.handleError));
  }
}



