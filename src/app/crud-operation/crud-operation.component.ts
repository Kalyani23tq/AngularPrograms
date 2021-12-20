import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crud-operation',
  templateUrl: './crud-operation.component.html',
  styleUrls: ['./crud-operation.component.css']
})
export class CrudOperationComponent implements OnInit {

model:any={};
model2:any={};
myvalue:any;
  employee:any[]=[];
  emp:any;
  constructor() { }

  ngOnInit(): void {
    this.employee=JSON.parse(localStorage.getItem("info")||'{}');
  }

  addEmployee()
  {
   this.emp=this.emp ||[];
     this.emp=JSON.parse(localStorage.getItem("info") || '{}');
 //  if(typeof(this.emp)!=undefined )
    {
      this.emp.push(this.model);
    
    }
  
    localStorage.setItem("info",JSON.stringify(this.emp));
    this.employee=JSON.parse(localStorage.getItem("info") ||'{}');
    this.model={};
    console.log(this.employee)
  }
  edit(i:any)
  {
      console.log(i)
      this.model2.name=this.employee[i].name;
      this.model2.position=this.employee[i].position;
      this.myvalue=i;
      console.log(this.model2)
  }
updateEmployee()
{
  let k=this.myvalue;
  for(let i=0;i<this.employee.length;i++)
  {
    if(i==k)
    {
      this.employee[i]=this.model2;
      localStorage.setItem('info',JSON.stringify(this.employee));
      this.employee=JSON.parse(localStorage.getItem('info')||'{}');
      this.model2={}
    }
  }

}


  delete(i:any)
  {
    console.log(i+"   deleted........")
    this.employee.splice(i,1);
    localStorage.setItem("info",JSON.stringify(this.employee));
  }

  

}






