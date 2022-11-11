import { Time } from "@angular/common";

export interface Flight{

    cityFrom: string;
    cityTo: string;
    arrival: Date;
    departure: Date;
    price: number;
    link: string;
}