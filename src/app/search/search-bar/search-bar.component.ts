import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Flight } from '../search-results/model/flight.model';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {


  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  searchRoutes(searchForm: any){
    this.router.navigate(['/search', {destination: searchForm.destination, origin: searchForm.origin}])
  }
}
