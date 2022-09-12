import { Routes } from "@angular/router";
import { SearchResultsComponent } from "./search/search-results/search-results.component";

export const appRoutes: Routes = [
    {path: 'search/:destination&:origin', component: SearchResultsComponent}
]