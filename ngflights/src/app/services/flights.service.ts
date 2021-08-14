import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Flight } from '../models/flight';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FlightsService {

  baseUrl = 'http://localhost:8084/';   // host name
  url = this.baseUrl + 'api/flights;';   // uri path

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

}
