import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {


  myApp:String='I am in Interpolation';

  myNumber:number=670;
  imagePath='../assets/ang.png';

  isdisabled=false;
  constructor() { }

  ngOnInit(): void {
  }

  display():String{
    return 'I am in Display Method'
  }

  

}
