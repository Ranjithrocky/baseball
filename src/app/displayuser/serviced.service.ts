import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  Observable } from 'rxjs';
import { UserModel } from './shared/user.model';
@Injectable({
  providedIn: 'root'
})
export class ServicedService {
readonly APIUrl="https://localhost:44322/api"
  constructor(private http:HttpClient) { }
//get the user by sending the httpClient request 
  getUser():Observable<any[]>
  {
    return this.http.get<any>('https://localhost:44322/api/admin/getUsers');
  }

  //Update the user by sending the object to backend
  updateUser(body:UserModel):Observable<UserModel>
  {
    console.log(body);
    return this.http.put<UserModel>("https://localhost:44322/api/admin/edit",body);
     
  }
  deleteUser(body:any):Observable<any>
  {
    return this.http.delete<any>("https://localhost:44322/api/admin/user_delete",body);
  }
  
 }
