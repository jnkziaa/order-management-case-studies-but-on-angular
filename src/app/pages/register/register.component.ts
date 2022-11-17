import { Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators, AbstractControl, ValidationErrors, ValidatorFn} from "@angular/forms";



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})

export class RegisterComponent {

  register(): void {
    console.log(this.registrationForm.value);
  }


  registrationForm = new FormGroup({
    username : new FormControl('', Validators.required),
    password : new FormControl('', Validators.required),
    confirmPassword : new FormControl('', Validators.required),
    email : new FormControl('',Validators.required),
    city : new FormControl('',Validators.required),
    state : new FormControl('',Validators.required),

  })







}