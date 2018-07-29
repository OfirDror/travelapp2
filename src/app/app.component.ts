import { Component, OnInit } from '@angular/core';
import { TripModel } from './trip-model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tripList: TripModel[] = [];
  newTrip: boolean = false;
  
  constructor() {}
   
}
