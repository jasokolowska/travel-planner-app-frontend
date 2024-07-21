import {Component} from '@angular/core';
import {FlightResponse} from './flight-search/model/flight-response.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'travel-planner-app-frontend';
  username = '';
  password = '';
}
