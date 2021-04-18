import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styles: [
  ]
})
export class CountryComponent  {
  searchValue = '';
  showAlert = false;
  countries: Country[] = [];
  countriesSugestions: Country[] = [];
  placeholder = 'Buscar por país...';

  constructor(private countryService: CountryService) { }

  search(query: string ): void {
    this.showAlert = false;
    this.searchValue = query;
    this.countriesSugestions = [];

    this.countryService.searchByCountry(query).subscribe((countries) => this.countries = countries,
    (error) => {
      this.showAlert = true;
      this.countries = [];
    });
  }

  suggestions(query: string): void {
    this.showAlert = false;
    this.searchValue = query;
    this.countriesSugestions = [];
    if (!query.trim().length) { return; }

    this.countryService.searchByCountry(query)
    .subscribe((countries) => this.countriesSugestions = countries.splice(0, 4),
    (error) => this.countriesSugestions = []);
  }
}
