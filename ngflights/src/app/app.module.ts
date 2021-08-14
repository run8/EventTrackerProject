import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlightsService } from './services/flights.service';
import { FlightListComponent } from './components/flight-list/flight-list.component';

@NgModule({
  declarations: [    // stuff that lives in angular
    AppComponent,
    FlightListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [FlightsService],   // Providers is stuff we created or angular... stuff to inject in constructors...pipes
  bootstrap: [AppComponent]
})
export class AppModule { }
