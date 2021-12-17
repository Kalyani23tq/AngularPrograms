import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-demo',
  templateUrl: './form-demo.component.html',
  styleUrls: ['./form-demo.component.css']
})
export class FormDemoComponent implements OnInit {

  constructor() { }
country=['USA','India','UK','Italy'];
subject=['Angular','React','Vue','HTML']
  ngOnInit(): void {
  }

  onSubmit(value:any)
  {
      console.log(value)
  }


}
