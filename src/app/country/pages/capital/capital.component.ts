import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-capital',
  templateUrl: './capital.component.html',
  styles: [
  ]
})
export class CapitalComponent {
  searchValue = '';
  showAlert = false;
  countries: Country[] = [];
  countriesSugestions: Country[] = [];
  placeholder = 'Buscar por capital...';

  constructor(private countryService: CountryService) { }

  search(query: string ): void {
    this.showAlert = false;
    this.searchValue = query;

    this.countryService.searchByCapital(query).subscribe((countries) => this.countries = countries,
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

    this.countryService.searchByCapital(query)
    .subscribe((countries) => this.countriesSugestions = countries.splice(0, 4),
    (error) => this.countriesSugestions = []);
  }
}
