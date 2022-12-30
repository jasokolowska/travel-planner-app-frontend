import { createFeatureSelector, createSelector } from "@ngrx/store";
import { State as FlightSearchState } from "./flight-search.reducer";

export const searchFlightResultsSelector = createFeatureSelector<FlightSearchState>('flightSearch');

export const searchFlightResults = createSelector(
    searchFlightResultsSelector,
    (flightSearchState) => flightSearchState.searchFlightResults
)

export const isLoadingSearchFlightResults = createSelector(
    searchFlightResultsSelector,
    (flightSearchState) => flightSearchState.loadingsearchFlightResults
)

