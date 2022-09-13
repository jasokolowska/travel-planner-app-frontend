import { Time } from "@angular/common";

export interface Flight{

    departureAirport: string;
    destinationAirport: string;
    departureDate: Date,
    price: number;
    link: string;
}