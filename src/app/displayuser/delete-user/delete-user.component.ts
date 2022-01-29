import { Component, Input, OnInit } from '@angular/core';
import { ServicedService } from '../serviced.service';
import { UserModel } from '../shared/user.model';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styles: [
  ]
})
export class DeleteUserComponent implements OnInit {
@Input() user!:any;
username!:string;
  constructor(private service: ServicedService) { }

  ngOnInit(): void {
    this.username=this.user.Username;
    this.deleteuser(this.user);
  }
  // this.service.updateUser().subscribe(resp=>{
  //   console.log(resp);
  // });
 deleteuser(user:any){
  this.service.deleteUser(user).subscribe(resp=>{
    console.log(resp);
  })
 }
}
