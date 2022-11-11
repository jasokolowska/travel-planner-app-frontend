import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Flight } from './search-results/model/flight.model';


@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }

  searchRoute(destination: string, origin: string): Observable<Flight[]>{
    let params = {
      destination,
      origin
    }
    return this.http.get<Flight[]>(`http://localhost:8089/api/routes`, {params})
  }
}