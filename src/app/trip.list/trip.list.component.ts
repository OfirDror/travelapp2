import { Component, OnInit } from '@angular/core';
import { TripModel } from '../trip-model';
import { TripDataService } from '../trip-data-service.service';

@Component({
  selector: 'app-triplist',
  templateUrl: './trip.list.component.html',
  styleUrls: ['./trip.list.component.css']
})
export class TripListComponent implements OnInit {
  
  tripList: TripModel[] = [];
  constructor(private tripDataService: TripDataService) { 
    this.tripList = this.tripDataService.getTrips();
  }
    
  
  ngOnInit() {
    
   }
  
   removeTrip(trip: TripModel) {
    let index = this.tripList.indexOf(trip, 0);
    if (index >= 0) {
      this.tripList.splice(index, 1);
    }
  }

}
