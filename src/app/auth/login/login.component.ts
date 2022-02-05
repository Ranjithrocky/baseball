import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
LoginF!: FormGroup
auth!:boolean;
user!: string;
  constructor(private routes:Router, private router:ActivatedRoute, private authservice:AuthenticationService) { }

  ngOnInit(): void {
    this.LoginF = new FormGroup({
      "username": new FormControl(null,[Validators.required, Validators.email]),
      "password": new FormControl(null, [Validators.required , Validators.pattern("[a-zA-Z0-9_@#$!?></|+*]{8,12}")])
    })
     }
     toSignUp(){
      this.routes.navigate(['signup']);   }
      tohome(){
        // this.routes.navigate(['homepage']);
      let _email=this.LoginF.get('email')?.value;
      let _password=this.LoginF.get('password')?.value;
      
      
      //Admin Check
      if(_email === 'admin@gmail.com'){
        
        this.authservice.AdminCheck(_email,_password).subscribe(data=>{
          this.auth =data.allowed;
          console.log(this.auth);
        });
        //Navigation after Validation
        setTimeout(()=>{
          if(this.auth)
          {
            this.routes.navigate(['../admin/view'])
          }
          else{
            alert("Access Denied")
          }
        },100);
      }
      //Authentication for Customer
      else{
        this.authservice.LoginCheck(_email,_password).subscribe(data=>{
          this.auth=data.allowed;
          this.user=data.user;
        });
        //Navigate after validation
        setTimeout(()=>{
          if(this.auth){
            this.routes.navigate([this.user,"homepage"]);
          }else{
            alert("User Not Found");
          }
        },100);

      }
      
      }
 
}