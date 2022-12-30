import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

import {Observable, of} from 'rxjs';
import {FlightRequest} from '../model/flight-request.model';
import {FlightResponse} from '../model/flight-response.model';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor(private http: HttpClient) {}

  searchFlight(flightRequest: FlightRequest): Observable<FlightResponse[]> {
    console.log(flightRequest);
    return this.http.post<FlightResponse[]>(
      `http://localhost:8089/api/routes`,
      flightRequest
    );
  }
}
