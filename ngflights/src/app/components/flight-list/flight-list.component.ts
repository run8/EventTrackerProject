import { Component, OnInit } from '@angular/core';
import { Flight } from 'src/app/models/flight';
import { FlightsService } from 'src/app/services/flight.service';

@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.css']
})
export class FlightListComponent implements OnInit {

  flights: Flight[] = [];
  selected: Flight | null = null;
  newFlight = new Flight();
  editFlight: Flight | null = null;

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

    addNewFlight() {
      this.flightService.create(this.newFlight).subscribe(
        data => {
          this.reload();
        },
        error => {
          console.log(error);
          console.log("Error creating todo through service.")
        }
      );
      this.newFlight = new Flight();

    }

    reload() {
      this.flightService.index().subscribe(
        data => {
          this.flights = data;
        },
        err => {
          console.log("Error retreiving todos from service")
        }
      );
    }

    setSelected(flight: Flight): void {
      this.selected = flight;
    }

    deleteFlight(id: number) {
      this.flightService.destroy(id).subscribe(
        data => {
          this.reload();
        },
        error => {
          console.log(error);
          console.log("error deleting flight through service")
        }
      );
      // this.todos = this.todoService.index();
    }

    updateFlight(flight: Flight) {
      this.flightService.update(flight).subscribe(
        data => {
          this.reload();
        },
        error => {
          console.log(error);
          console.log("error updating flight through service")
        }
      );
      this.editFlight = null;
      this.editFlight = null;
      // this.todos = this.todoService.index();
    }

    setEditFlight() : void {
      this.editFlight = Object.assign({}, this.selected);
    }
}
