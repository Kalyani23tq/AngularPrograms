import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-for-directive-demo2',
  templateUrl: './for-directive-demo2.component.html',
  styleUrls: ['./for-directive-demo2.component.css']
})
export class ForDirectiveDemo2Component implements OnInit {

car:any[];
color:string='pink';
 todayDate:Date;  
amount:number;  
message:string;  


  constructor() { 
   // this.car=[]
    this.car=[{modelId:'CR2002',car_Name:'Audi',car_Color:'Black',car_Price:500000},
  {modelId:'CR45023',car_Name:'BMW',car_Color:'RoyalBlue',car_Price:600000},
{modelId:'CR78063',car_Name:'santro',car_Color:'Silver',car_Price:250000}]
  
this.todayDate = new Date();  
this.amount = 100;  
  this.message = "Angular 8.0 is a Component Based Framework";  
  }

  ngOnInit(): void {
  	  

  }
  

}
