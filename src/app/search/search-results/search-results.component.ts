import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from '../search.service';
import { Flight } from './model/flight.model';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

  flights: Flight[] = [];

  constructor(private searchService: SearchService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let destination = this.route.snapshot.queryParamMap.get('destination');
    let origin = this.route.snapshot.queryParamMap.get('origin');

    this.searchRoutes(destination, origin);
  }

  searchRoutes(destination: string, origin: string){
    this.searchService.searchRoute(destination, origin).subscribe(
      data => {
        console.log(data);
        this.flights = data;
      }
    )
  }
}
