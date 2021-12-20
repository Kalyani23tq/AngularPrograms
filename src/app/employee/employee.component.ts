import { Component, OnInit } from '@angular/core';
import { IEmp, ServEmployeeService } from '../serv-employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

empInfo:IEmp[]=[];

  constructor(public _empservice:ServEmployeeService) { }

  ngOnInit(): void {
    this.empInfo=this._empservice.getEmployee();
    console.log(this.empInfo);
  }


}
