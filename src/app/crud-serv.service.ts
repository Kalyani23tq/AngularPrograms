import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ObservableInput, throwError } from 'rxjs';
import { retry,catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CrudServService {
  apiUrl: string='https://reqres.in/api/users?page=2'
  //apiUrl="assets/User.json"
  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json', responseType: 'text' as 'json' 
    })}
 // error!: (err: any, caught: Observable<Object>) => ObservableInput<any>;
  constructor(private http: HttpClient) { }

  // createTask(data:any): Observable<any> {
  //   let API_URL = `${this.apiUrl}/create-task`;
  //   return this.http.post(API_URL, data)
  //     .pipe(
  //       retry(1),
  //       catchError(this.error)
  //     )
  // }

  getSingleUser(id:any): Observable<any> {
    return this.http.get<any>(this.apiUrl + '/users/' + id)
    .pipe(
      retry(1),
      catchError(this.processError)
    )
  }  

  addUser(data:any): Observable<any> {
    return this.http.post<any>(this.apiUrl + '/users/', JSON.stringify(data), this.httpHeader)
    .pipe(
      retry(1),
      catchError(this.processError)
    )
  }  

  updateUser(id:any, data:any): Observable<any> {
    return this.http.put<any>(this.apiUrl + '/users/' + id, JSON.stringify(data), this.httpHeader)
    .pipe(
      retry(1),
      catchError(this.processError)
    )
  }





  getUsers(): Observable<any> {
    return this.http.get<any>(this.apiUrl + '/users/')
    .pipe(
      retry(1),
      catchError(this.error)
    )
  }
  showTasks() {
    return this.http.get(`${this.apiUrl}`);
  }
  deleteUser(id:any){
    return this.http.delete<any>(this.apiUrl + '/users/' + id, this.httpHeader)
    .pipe(
      retry(1),
      catchError(this.processError)
    )
  }

  processError(err:any) {
     let message = '';
     if(err.error instanceof ErrorEvent) {
      message = err.error.message;
     } else {
      message = `Error Code: ${err.status}\nMessage: ${err.message}`;
     }
     console.log(message);
     return throwError(message);
  }

  // public sendGetRequest(){
  //   return this.httpClient.get(this.endpoint).pipe(retry(3), catchError(this.processError));
  // }

   // Handle Errors 
   error(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }


}
