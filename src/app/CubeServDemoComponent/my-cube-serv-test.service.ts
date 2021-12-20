import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyCubeServTestService {
 //shareValue:String;
  constructor() {
   // this.shareValue='MyService '+Math.round(Math.random()*100);
   }
   getValue(num1:number,num2:number)
   {
     //return this.shareValue;
     return num1+num2;
   }
}
