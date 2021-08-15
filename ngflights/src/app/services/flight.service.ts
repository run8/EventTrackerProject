import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Flight } from '../models/flight';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FlightsService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };

  baseUrl = 'http://localhost:8084/';   // host name
  url = this.baseUrl + 'api/flights;';   // uri path
  urlPost = this.baseUrl + 'api/flight';

  constructor(
    private http: HttpClient
  ) { }

    index(): Observable<Flight[]> {
      return this.http.get<Flight[]>(this.url).pipe(
        catchError((err: any) => {
          console.error('TodoService.index(): error retrieving flight list');
          return throwError(err);
        })
      );
    }

    create(flight: Flight){
      /// Todo
      return this.http.post<Flight>(this.urlPost, flight, this.httpOptions)
      .pipe(
        catchError((err: any) => {
          console.log(err);
          return throwError('Error sending new Flight');
        })
      );
    }

    public destroy(id: number) {
      return this.http.delete<Flight>(this.url + '/' + id, this.httpOptions).pipe(
        catchError((err: any) => {
          console.log(err);
          return throwError('Error deleting Flight of id: ' + id);
        })
      );
    }

    public update(flight: Flight) {
      // if(todo.completed === true) {
      //   let completeDate = this.datePipe.transform(Date.now(), 'shortDate');
      //   if(completeDate != null) {
      //     todo.completeDate = completeDate;
      //   }
      // } else {
      //   todo.completeDate = '';
      // }

      return this.http.put<Flight>(this.urlPost, flight, this.httpOptions).pipe(
        catchError((err: any) => {
          console.log(err);
          return throwError('Error updating Flight of id: ' + flight.id);
        })
      )

    }


}
