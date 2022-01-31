import { NgModule } from '@angular/core';
import {  FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { HomepageComponent } from './homepage/homepage.component';
import { BookeventComponent } from './bookevent/bookevent.component';
import {HttpClientModule } from '@angular/common/http';
import { DisplayuserComponent } from './displayuser/displayuser.component';
import { EditUserComponent } from './displayuser/edit-user/edit-user.component';
import { DeleteUserComponent } from './displayuser/delete-user/delete-user.component';
import { AdminComponent } from './admin/admin.component';
import { VenueComponent } from './admin/venue/venue.component';
import { EditVenueComponent } from './admin/venue/edit-venue/edit-venue.component';
import { ViewVenueComponent } from './admin/venue/view-venue/view-venue.component';
import { DeleteVenueComponent } from './admin/venue/delete-venue/delete-venue.component';
import { RefreeComponent } from './admin/refree/refree.component';
import { AddRefreeComponent } from './admin/refree/add-refree/add-refree.component';
import { EditRefreeComponent } from './admin/refree/edit-refree/edit-refree.component';
import { AddVenueComponent } from './admin/venue/add-venue/add-venue.component';
import { DeleteRefreeComponent } from './admin/refree/delete-refree/delete-refree.component';
import { UsersComponent } from './users/users.component';
import { TeamsComponent } from './admin/teams/teams.component';
import { EditTeamComponent } from './admin/teams/edit-team/edit-team.component';
import { AddTeamComponent } from './admin/teams/add-team/add-team.component';
import { DeleteTeamComponent } from './admin/teams/delete-team/delete-team.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    HomepageComponent,
    BookeventComponent,
    DisplayuserComponent,
    EditUserComponent,
    DeleteUserComponent,
    AdminComponent,
    VenueComponent,
    EditVenueComponent,
    ViewVenueComponent,
    DeleteVenueComponent,
    RefreeComponent,
    AddRefreeComponent,
    EditRefreeComponent,
    AddVenueComponent,
    DeleteRefreeComponent,
    UsersComponent,
    TeamsComponent,
    EditTeamComponent,
    AddTeamComponent,
    DeleteTeamComponent
  
    
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
