import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  searchForm = new FormGroup({
    destination: new FormControl(''),
    origin: new FormControl('')
  });

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  searchRoutes(searchForm: any){
    this.router.navigate(['/search'], {queryParams: {destination: searchForm.value.destination, origin: searchForm.value.origin}})
  }
}
