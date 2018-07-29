import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TripListComponent } from './trip.list/trip.list.component';
import { routes } from './app.routes';
import { RouterModule } from '@angular/router';
import { NewTripComponent } from './new-trip/new-trip.component';

@NgModule({
  declarations: [
    AppComponent,
    TripListComponent,
    NewTripComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
