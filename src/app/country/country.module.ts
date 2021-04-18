import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CapitalComponent } from './pages/capital/capital.component';
import { CountryComponent } from './pages/country/country.component';
import { SeeCountryComponent } from './pages/see-country/see-country.component';
import { RegionComponent } from './pages/region/region.component';
import { RouterModule } from '@angular/router';
import { CountryTableComponent } from './components/country-table/country-table.component';
import { SearchCountryComponent } from './components/search-country/search-country.component';
import { CountriesSuggestionsComponent } from './components/countries-suggestions/countries-suggestions.component';



@NgModule({
  declarations: [
    CapitalComponent,
    CountryComponent,
    SeeCountryComponent,
    RegionComponent,
    CountryTableComponent,
    SearchCountryComponent,
    CountriesSuggestionsComponent
  ],
  exports: [
    CapitalComponent,
    CountryComponent,
    SeeCountryComponent,
    RegionComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class CountryModule { }
