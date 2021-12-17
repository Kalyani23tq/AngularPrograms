import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.css']
})
export class LifeCycleComponent implements OnInit {


  name="Angular";
  message="Hi Angular Hello VS";

  hideMe=true;

  constructor() {
    console.log("This is Constructor");
   }

  ngOnInit(): void {
    console.log("This is OnIt")
  }
  ngOnChanges()
  {
    console.log("This is changes event")
  }
  ngDoCheck()
  {
    console.log("This is DoCheck Event");
  }
  ngAfterContentInit()
  {
    console.log('This is After Content Init')
  }
  ngOnDestroy()
  {
    console.log('This is Destroy.....')
  }

}
