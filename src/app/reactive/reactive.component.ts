import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  constructor(public fb:FormBuilder) { }

  AddmisionForm=this.fb.group({
    fullName:[''],
    email:[''],
    Passowrd:[''],
    Mobile:[''],
    country:['']


  })
country=['India','USA','Japan'];
  ngOnInit(): void {
  }
  onSubmit()
  {
    console.log(this.AddmisionForm.value);
  }

}
