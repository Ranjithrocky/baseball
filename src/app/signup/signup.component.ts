import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  SignUp!: FormGroup;
  user=['user','admin'];

  constructor(private routes: Router, private router:ActivatedRoute) { }

  ngOnInit(): void {
    this.SignUp= new FormGroup({
      "users": new FormControl(null,Validators.required),
      "email": new FormControl(null,[Validators.required,Validators.email]),
      "username": new FormControl(null,[Validators.required,Validators.pattern("[a-zA-Z0-9_]{8,12}")]),
      "mobile": new FormControl(null,[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
      "password": new FormControl(null,Validators.required),
      "confirmpass": new FormControl(null,[Validators.minLength(8),Validators.maxLength(16)])
    })
  }
  toLogin(){
    this.routes.navigate(['login']);

  }

}
