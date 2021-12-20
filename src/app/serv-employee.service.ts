import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServEmployeeService {

  employee:IEmp[]=[];
  constructor() { }

  getEmployee()
  {
    this.employee=[
      {id:'emp-101',name:'Rajesh',salary:56000,gender:'male'},
      {id:'emp-300',name:'sahil',salary:78900,gender:'male'},
      {id:'emp-109',name:'Nimish',salary:45000,gender:'male'},
    ]
    return this.employee;
  }

}

export interface IEmp
{
  id:string;
  name:string;
  salary:number;
  gender:string;
}