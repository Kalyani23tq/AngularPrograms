import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';

export class User{
  id:number=0;
  name:string='';
  email:string='';
  phone:string='';
}

@Injectable({
  providedIn: 'root'
})
export class MyJSONServService {

  //endPoint="http://localhost:3000";
  endPoint = 'http://localhost:3000';
  constructor(private http:HttpClient) { }
  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  
getUsers():Observable<User>
{
  return this.http.get<User>(this.endPoint + '/users/').pipe
    (retry(1),
    catchError(this.httpError)
    )
}
httpError(error:any)
{
  let msg='';
  if(error.error instanceof ErrorEvent)
  {
    msg=error.error.message;
    
  }
  else
  {
    msg='Error Code:${error.status}\nMessage';
  }
  console.log(msg);
  return throwError(msg);
}


}
