import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {
 // AddmisionForm: FormGroup = new FormGroup({});
  constructor(public fb:FormBuilder) { }

  AddmisionForm=this.fb.group({
    // fullName:[''],
    // email:[''],
    Passowrd:[''],
    // Mobile:[''],
    // country:['']
    confirm_password: ['', [Validators.required]]
    }, { 
      validator: ConfirmedValidator('password', 'confirm_password')
    



  })
country=['India','USA','Japan'];
  ngOnInit(): void {
  }
  get f(){
    return this.AddmisionForm.controls;
  }
  onSubmit()
  {
    console.log(this.AddmisionForm.value);
  }
 
}
export function ConfirmedValidator(controlName: string, matchingControlName: string){
  return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];
      if (matchingControl.errors && !matchingControl.errors['confirmedValidator']) {
          return;
      }
      if (control.value !== matchingControl.value) {
          matchingControl.setErrors({ confirmedValidator: true });
      } else {
          matchingControl.setErrors(null);
      }
  }
}