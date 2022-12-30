import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import { catchError, map, switchMap, of } from 'rxjs';
import {SearchService} from '../services/search.service';
import * as FlightSearchActions from '../store/flight-search.actions'

@Injectable()
export class SearchFlightsEffect {
  loadSearchFlightsResults$ = createEffect(() => this.actions$.pipe(
    ofType(FlightSearchActions.loadFlightResults),
    switchMap(({searchParamters}) => this.searchService.searchFlight(searchParamters)
    .pipe(
        map((searchFlightResults) => FlightSearchActions.loadFlightResultsSuccess({searchFlightResults})),
        catchError(() => {
            return of(FlightSearchActions.loadFlightResultsFailure())
        })
    ))
  ));

  constructor(
    private actions$: Actions,
    private searchService: SearchService
  ) {}
}
