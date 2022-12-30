import {createAction} from '@ngrx/store';
import {props} from '@ngrx/store';
import { FlightRequest } from '../model/flight-request.model';
import {FlightResponse} from '../model/flight-response.model';

export const loadFlightResults = createAction(
  '[Flight Search API] Load flight results',
  props<{searchParamters: FlightRequest}>()
);

export const loadFlightResultsSuccess = createAction(
  '[Flight Search API] Flight results loaded successfully',
  props<{searchFlightResults: FlightResponse[]}>()
);

export const loadFlightResultsFailure = createAction(
  '[Flight Search API] Flight results loaded failure'
);
