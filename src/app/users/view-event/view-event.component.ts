import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VenueModel } from 'src/app/shared/venue.model';
import { BookeventService } from '../bookevent.service';
import { ViewEventService } from './view-event.service';


@Component({
    selector: 'app-view-event',
    templateUrl: './view-event.component.html',
    styles: [
    ]
})
export class ViewEventComponent implements OnInit {
    venues!: VenueModel[];
    searchString: string='';
    constructor(private service: ViewEventService ,private route: Router, private bookserv :BookeventService) { }

    ngOnInit(): void {
        this.getDetails();
    }
    getDetails() {
        this.service.getVenue().subscribe(data => {
            this.venues = data;
        })
    }
    send(venue :VenueModel )
    {
        this.bookserv.book = venue;
        console.log(venue);
        this.route.navigate(['user/bookEvent'])
    }

    // app : angular.module("searchModule",[]).controller("searchController",function getDetails() {
    //     this.service.getVenue().subscribe(data => {
    //         this.venues = data;
    //     })
    // });

}