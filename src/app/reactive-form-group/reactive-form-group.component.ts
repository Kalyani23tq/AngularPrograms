import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-group',
  templateUrl: './reactive-form-group.component.html',
  styleUrls: ['./reactive-form-group.component.css']
})
export class ReactiveFormGroupComponent implements OnInit {


  userForm:FormGroup;
  constructor() {
    this.userForm=new FormGroup({
    name:new FormControl(''),
    pass:new FormControl(''),
    contactDetails:new FormGroup({
      landLine:new FormControl(''),
      mobile:new FormControl('')
    }),
    
  });
 }

  

  ngOnInit(): void {
  }
  OnSubmit()
  {
    console.log(this.userForm.value)
  }
}
