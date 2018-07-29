import { Routes } from '@angular/router';

import { NewTripComponent } from './new-trip/new-trip.component';
import { TripListComponent } from './trip.list/trip.list.component';

export const routes: Routes = [
  { path: '', component: TripListComponent },
  { path: 'newTrip', component: NewTripComponent }
];