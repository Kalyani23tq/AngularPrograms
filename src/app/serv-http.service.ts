import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServHttpService {

  apiUrl="https://reqres.in/api/users?page=2";

  apiPost="https://reqres.in/api/post";

  constructor(private _http:HttpClient) { }


  getMultiUsers()
  {
    return this._http.get(this.apiUrl).toPromise();
  }
  getUser()
  {
    //return this._http.get(this.apiUrl);
    return this.apiUrl;
  }
postUser()
{
  return this.apiPost;
}

}
