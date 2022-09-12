import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  searchRoutes(destination: string, origin: string){
    // TODO 1: search service which will communicate with backend
    console.log('Destination: ' + destination);
    console.log('Origin: ' + origin); 
    
    // TODO 2: redirect to search results page
    this.router.navigate(['search']);

  }
}
