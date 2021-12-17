import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-demo',
  templateUrl: './pipe-demo.component.html',
  styleUrls: ['./pipe-demo.component.css']
})
export class PipeDemoComponent implements OnInit {

message:string;

amount:number;
myDate:Date;


  constructor() { 

    this.message="This is my Angular Pipe";
    this.amount=10000;
    this.myDate=new Date();
  }

  ngOnInit(): void {
  }

}
