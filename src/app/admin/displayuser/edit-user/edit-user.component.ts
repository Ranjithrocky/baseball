import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServicedService } from '../../displayuser/serviced.service';
import { UserModel } from '../../../shared/user.model';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styles: [
  ]
})
export class EditUserComponent implements OnInit {
@Input() dep:any;
username!:string;
number!:string;
EditForm!:FormGroup;
  constructor( private service :ServicedService) { }
UserValue!:UserModel
  ngOnInit(): void {
    // this.username=this.dep.username;
    // this.number=this.dep.mobileNumber;
   

    this.EditForm=new FormGroup({
      UserName:new FormControl(null,Validators.required),
      Mobile:new FormControl(null,Validators.required),
      Email:new FormControl(null,Validators.required),
      Password: new FormControl(null,Validators.required),
      Userole:new FormControl(null,Validators.required)
    })

  }
  /**Used in Edit user to update the user */
 updateUser()
{

  const body:UserModel={
    Email:this.EditForm?.get('Email')?.value,
    Password:this.EditForm?.get('Password')?.value,
    Username:this.EditForm?.get('UserName')?.value,
    MobileNumber:this.EditForm?.get('Mobile')?.value,
    UserRole:this.EditForm?.get('Userole')?.value
  }
  this.service.updateUser(body).subscribe(resp=>{
    console.log(resp);
  });


}

}
