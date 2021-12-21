import { Component, OnInit } from '@angular/core';
import { MyJSONServService } from '../my-jsonserv.service';

@Component({
  selector: 'app-my-jsondata',
  templateUrl: './my-jsondata.component.html',
  styleUrls: ['./my-jsondata.component.css']
})
export class MyJSONDataComponent implements OnInit {
User:any=[];
  constructor(public servjson:MyJSONServService) { }

  ngOnInit(): void {
    this.fetchUsers()
  }

  fetchUsers()
  {
    return this.servjson.getUsers().subscribe(
     (data: {}) => {
        this.User = data;
      })   
        
      }
     
    
  
}

