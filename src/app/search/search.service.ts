import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { FlightRequest } from './search-results/model/flight-request.model';
import { FlightResponse } from './search-results/model/flight-response.model';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor(private http: HttpClient) {}

  searchFlight(flightRequest: FlightRequest ): Observable<FlightResponse[]> {
    return this.http.post<FlightResponse[]>(`http://localhost:8089/api/routes`, 
      flightRequest);
  }
}
