import { createReducer, on } from "@ngrx/store";
import { FlightResponse } from "../model/flight-response.model";
import * as FlightSearchActions from '../store/flight-search.actions'

export interface State {
    searchFlightResults: FlightResponse[];
    loadingsearchFlightResults: boolean;
}

export const initialState: State = {
    searchFlightResults: [],
    loadingsearchFlightResults: false
}

export const flightSearchReducer = createReducer(
    
    initialState,
    
    on(FlightSearchActions.loadFlightResults, state => ({
        ...state,
        searchFlightResults: [],
        loadingsearchFlightResults: true
    })),

    on(FlightSearchActions.loadFlightResultsSuccess, (state, {searchFlightResults}) => ({
        ...state,
        searchFlightResults: searchFlightResults,
        loadingsearchFlightResults: false
    })),

    on(FlightSearchActions.loadFlightResultsFailure, (state) => ({
        ...state,
        searchFlightResults: [],
        loadingsearchFlightResults: false
    })),
)