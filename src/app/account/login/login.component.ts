import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!:FormGroup
  constructor(
    private fb:FormBuilder
  ) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      name: new FormControl(''),
      role: new FormControl(''),
    });
  }
  onSubmit(){
    console.log(this.loginForm.value.name)
    localStorage.setItem("LoginObj",JSON.stringify(this.loginForm.value))
    localStorage.setItem("name",JSON.stringify(this.loginForm.value.name))
    localStorage.setItem("role",JSON.stringify(this.loginForm.value.role))
  }
}
