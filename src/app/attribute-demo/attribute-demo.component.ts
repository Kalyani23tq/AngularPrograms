import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attribute-demo',
  templateUrl: './attribute-demo.component.html',
  styleUrls: ['./attribute-demo.component.css']
})
export class AttributeDemoComponent implements OnInit {
colspan:number=3;
count:number=0;
value:string="";

  constructor() { }

  ngOnInit(): void {
  }

  OnSave()
  {
console.log("HI I am in save ");
  }

  ClickCount()
  {
    this.count++;

   // console.log(this.count);
  }

  handleInput(event:any)
  {
    this.value=(event.target as HTMLInputElement).value;
  }

}
