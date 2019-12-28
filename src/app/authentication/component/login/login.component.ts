import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder,Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  invalidLogin: boolean = false;
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['',Validators.compose([Validators.required])],
      password: ['',Validators.required]
    });
  }

  onSubmit(){
    console.log(this.loginForm.value);
    if(this.loginForm.invalid){
        return;
    }
    const loginData ={ 
      username:this.loginForm.controls.username.value,
      password:this.loginForm.controls.password.value  
    };
  }
}
