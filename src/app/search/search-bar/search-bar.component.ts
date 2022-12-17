import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FlightRequest } from '../search-results/model/flight-request.model';
import { FlightResponse } from '../search-results/model/flight-response.model';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  
  flights$: Observable<FlightResponse[]>;
  isAdvancedSearch: boolean = false;

  searchForm = new FormGroup({
    destination: new FormControl('', [Validators.pattern('[A-Za-z]*'), Validators.required]),
    origin: new FormControl('', [Validators.pattern('[A-Za-z]*'), Validators.pattern('[0-9]*')]),
    dateFrom: new FormControl(''),
    dateTo: new FormControl(''),
    stopovers: new FormControl('', Validators.pattern('[0-9]*')),
    tripType: new FormControl(''),
    days: new FormControl('', Validators.pattern('[0-9]*'))
  });

  constructor(private router: Router, private searchService: SearchService) { }

  ngOnInit(): void {
  }

  onSubmit(searchForm: any){
    console.log('form ', searchForm);
    this.flights$ = this.searchService.searchFlight(searchForm.value);
  }

  advancedSearch(){
    this.isAdvancedSearch = !this.isAdvancedSearch;
  }
}
