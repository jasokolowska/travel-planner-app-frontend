import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { Store } from '@ngrx/store';
import { FlightRequest } from '../../model/flight-request.model';
import {SearchService} from '../../services/search.service';
import { loadFlightResults } from '../../store/flight-search.actions';
import { isLoadingSearchFlightResults, searchFlightResults } from '../../store/flight-search.selector';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent implements OnInit {
  flights$ = this.store.select(searchFlightResults);
  isLoadingFlights$ = this.store.select(isLoadingSearchFlightResults);

  isAdvancedSearch: boolean = false;

  searchForm = new FormGroup({
    destination: new FormControl('', [
      Validators.pattern('[A-Za-z]*'),
      Validators.required,
    ]),
    origin: new FormControl('', [
      Validators.pattern('[A-Za-z]*'),
      Validators.pattern('[0-9]*'),
    ]),
    dateFrom: new FormControl(''),
    dateTo: new FormControl(''),
    stopovers: new FormControl('', Validators.pattern('[0-9]*')),
    twoWayTrip: new FormControl(''),
    days: new FormControl('', Validators.pattern('[0-9]*')),
  });

  constructor(private searchService: SearchService, private store: Store) {}

  ngOnInit(): void {
  }

  onSubmit(searchForm: any) {
    console.log(searchForm.value);
    const searchParameters: FlightRequest = searchForm.value;
    this.store.dispatch(loadFlightResults({searchParamters: searchParameters}));
  }

  advancedSearch() {
    this.isAdvancedSearch = !this.isAdvancedSearch;
  }
}
