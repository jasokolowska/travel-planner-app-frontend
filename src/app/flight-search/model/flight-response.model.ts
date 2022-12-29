import {Time} from '@angular/common';

export interface FlightResponse {
  cityFrom: string;
  cityTo: string;
  arrival: Date;
  departure: Date;
  price: number;
  link: string;
}
