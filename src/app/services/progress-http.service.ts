import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { ProgressBarPage } from '../class/progress-bar-page';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProgressHttpService {

  apiURL = 'http://pb-api.herokuapp.com/';

  constructor(private http: HttpClient) { }

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  

  getProgressBarValues(): Observable<ProgressBarPage> {
    return this.http.get<ProgressBarPage>(this.apiURL + '/bars')
    .pipe(
      catchError(this.handleError)
    )
  }
  // Error handling 
  handleError(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
 }

}
