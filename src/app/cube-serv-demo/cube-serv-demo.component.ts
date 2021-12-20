import { Component, OnInit } from '@angular/core';
import { MyCubeServTestService } from '../CubeServDemoComponent/my-cube-serv-test.service';

@Component({
  selector: 'app-cube-serv-demo',
  templateUrl: './cube-serv-demo.component.html',
  styleUrls: ['./cube-serv-demo.component.css'],
  providers:[MyCubeServTestService]
})
export class CubeServDemoComponent implements OnInit {

  num1:number=0;
  num2:number=0
  MyService;
  MyRandomValue:any;
  constructor() {
this.MyService=new MyCubeServTestService();

   }
   MySerivceValue()
   {
     this.MyRandomValue=this.MyService.getValue(this.num1,this.num2);
     console.log(this.MyRandomValue);
   }

  ngOnInit(): void {
  }

}
