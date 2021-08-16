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

    //This function takes in latitude and longitude of two location and returns the distance between them as the crow flies (in km)
    public calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number)
    {
      let R = 6371; // km
      let dLat = this.toRad(lat2 - lat1);
      let dLon = this.toRad(lon2-lon1);
      var lat1 = this.toRad(lat1);
      var lat2 = this.toRad(lat2);

      let a = Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2);
      let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
      let d = R * c;
      return d;
    }

    // Converts numeric degrees to radians
    public toRad(Value: number)
    {
        return Value * Math.PI / 180;
    }
}
