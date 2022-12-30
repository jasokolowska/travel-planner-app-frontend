import { createAction } from "@ngrx/store";
import { props } from "@ngrx/store/src";
import { FlightResponse } from "../model/flight-response.model";

export const loadFlightResults = createAction(
    '[Flight Search API] Load flight results', props<{any}>()
);

export const loadFlightResultsSuccess = createAction(
    '[Flight Search API] Flight results loaded successfully', props<{searchFlightResults: FlightResponse[]}>()
);

export const loadFlightResultsFailure = createAction(
    '[Flight Search API] Flight results loaded failure', props<{any}>()
);