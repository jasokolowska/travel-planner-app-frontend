import { Routes } from "@angular/router";
import { SearchBarComponent } from "./search/search-bar/search-bar.component";
import { SearchResultsComponent } from "./search/search-results/search-results.component";

export const appRoutes: Routes = [
    {path: 'search', component: SearchResultsComponent},
    {path: 'home', component: SearchBarComponent},
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: '**', redirectTo: 'home', pathMatch: 'full'}
]