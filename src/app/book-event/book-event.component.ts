import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-book-event',
  templateUrl: './book-event.component.html',
  styleUrls: ['./book-event.component.css']
})
export class BookEventComponent implements OnInit {

  formvalue! :FormGroup;
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.formvalue= new FormGroup({
      "venueName": new FormControl(null),
      "applicantName":  new FormControl(null),
      "mobileNo": new FormControl(null),
      "email": new FormControl(null),
      "date":  new FormControl(null),
      "noOfPeople":  new FormControl(null)
    })
  }

}
