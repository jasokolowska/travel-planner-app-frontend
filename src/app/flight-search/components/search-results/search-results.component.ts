import {Component, Input, OnInit} from '@angular/core';
import {FlightResponse} from '../../model/flight-response.model';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css'],
})
export class SearchResultsComponent implements OnInit {
  @Input()
  flights: FlightResponse[] = [];

  constructor() {}

  ngOnInit(): void {}

  updateSearchResults(flights: FlightResponse[]) {
    this.flights = flights;
  }
}
