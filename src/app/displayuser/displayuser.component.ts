import { Component, OnInit } from '@angular/core';
import { ServicedService } from './serviced.service';
import { UserModel } from './shared/user.model';

@Component({
  selector: 'app-displayuser',
  templateUrl: './displayuser.component.html',
  styles: [
  ]
})
export class DisplayuserComponent implements OnInit {
UserList:any=[];
ActivatedEditButton:boolean=false;
depe!:any;

  constructor(private service: ServicedService) { }

  ngOnInit(): void {
    this.getdetails();
  }
edit(item:any){
  // this.dep=item;
  this.ActivatedEditButton=true;
  console.log(item);
}
close()
{
  this.ActivatedEditButton=false;
}
  getdetails(){
    this.service.getUser().subscribe(data=>{
      this.UserList=data;
    })
  }
  delete(item: any)
  {
    this.depe=item;

  }
}
