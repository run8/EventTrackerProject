import { Component, OnInit } from '@angular/core';
import { Flight } from 'src/app/models/flight';
import { FlightsService } from 'src/app/services/flights.service';

@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.css']
})
export class FlightListComponent implements OnInit {

  flights: Flight[] = [];

  constructor(
    private flightService: FlightsService
  ) { }

  ngOnInit(): void {
    this.loadFlights();
  }

  loadFlights(): void {
    this.flightService.index().subscribe(
      flights => {this.flights = flights;

      },
      noFlights => {
        console.error('FlightListComponent.loadFlights(): error retrieving flights list');
      }
    )
    }

}
