export interface FlightRequest {
    destination: string,
    origin: string,
    dateFrom?: Date,
    dateTo?: Date,
    stopovers?: number,
    twoWayTrip?: boolean, 
    days?: number
}
