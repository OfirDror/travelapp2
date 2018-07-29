import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TripModel } from './trip-model';

@Injectable({
  providedIn: 'root'
})
export class TripDataService {
  mockTripRome:TripModel = new TripModel('Explore Rome', 'Rome', 'Italy', '1.1.2019', '8.1.2019');
  mockTripParis:TripModel = new TripModel('St. Michel', 'Paris', 'France', '2.1.2019', '6.2.2019');
  mockTripLondon:TripModel = new TripModel('Beatles Origin', 'London', 'UK', '8.3.2019', '16.3.2019');

  mockList:TripModel[] = [this.mockTripRome, this.mockTripParis, this.mockTripLondon];
  constructor() { }

  getTrips(): TripModel[] {
    return this.mockList;
  }
}
