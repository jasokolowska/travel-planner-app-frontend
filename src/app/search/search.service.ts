import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Flight } from './search-results/model/flight.model';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor() { }

  searchRoute(destination: string, origin: string): Observable<Flight[]>{
    return of(FLIGHTS);
  }
}

const FLIGHTS: Flight[] = [
  { departureAirport: 'Londyn',
    destinationAirport: 'Barcelona',
    departureDate: new Date(),
    price: 199,
    link: 'https://skyscanner.com'},
    { departureAirport: 'Londyn',
    destinationAirport: 'Barcelona',
    departureDate: new Date(),
    price: 599,
    link: 'https://ryanair.com'},
    { departureAirport: 'Londyn',
    destinationAirport: 'Barcelona',
    departureDate: new Date(),
    price: 701,
    link: 'https://wizzair.com'},

];
