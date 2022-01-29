import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
LoginF!: FormGroup
  constructor(private routes:Router, private router:ActivatedRoute) { }

  ngOnInit(): void {
    this.LoginF = new FormGroup({
      "username": new FormControl(null,Validators.required),
      "password": new FormControl(null,Validators.required)
    })
     }
     toSignUp(){
      this.routes.navigate(['signup']);   }
      tohome(){
        this.routes.navigate(['homepage']);
      }
 
}
