import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {FlightResponse} from '../../model/flight-response.model';
import {SearchService} from '../../services/search.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent implements OnInit {
  flights$: Observable<FlightResponse[]>;
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

  constructor(private router: Router, private searchService: SearchService) {}

  ngOnInit(): void {}

  onSubmit(searchForm: any) {
    console.log(searchForm.value);
    this.flights$ = this.searchService.searchFlight(searchForm.value);
  }

  advancedSearch() {
    this.isAdvancedSearch = !this.isAdvancedSearch;
  }
}
