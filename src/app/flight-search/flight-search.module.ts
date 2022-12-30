import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {appRoutes} from './app-routes';
import {SearchBarComponent} from './components/search-bar/search-bar.component';
import {SearchResultsComponent} from './components/search-results/search-results.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TableModule} from 'primeng/table';
import { StoreModule } from '@ngrx/store';
import { flightSearchReducer } from './store/flight-search.reducer';

@NgModule({
  declarations: [SearchBarComponent, SearchResultsComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(appRoutes),
    StoreModule.forFeature('flightSearch', flightSearchReducer),
    //primeNg
    TableModule,
  ],
})
export class FlightSearchModule {}
