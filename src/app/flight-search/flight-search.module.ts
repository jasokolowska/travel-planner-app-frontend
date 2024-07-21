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
import { SearchService } from './services/search.service';
import { EffectsModule } from '@ngrx/effects';
import { SearchFlightsEffect } from './store/flight-search.effect';
import { CalendarModule } from 'primeng/calendar';
import {CheckboxModule} from 'primeng/checkbox';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';



@NgModule({
  declarations: [SearchBarComponent, SearchResultsComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(appRoutes),
    StoreModule.forFeature('flightSearch', flightSearchReducer),
    EffectsModule.forFeature([SearchFlightsEffect]),
    //primeNg
    TableModule,
    CalendarModule,
    CheckboxModule,
    ProgressSpinnerModule,
    ButtonModule,
    InputTextModule
  ], providers: [SearchService]
})
export class FlightSearchModule {}
