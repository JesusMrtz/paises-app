import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styles: [
    `button {
      margin-right: 5px
    }`
  ]
})
export class RegionComponent {
  regions = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  countries: Country[] = [];
  regionActivated = '';
  showAlert = false;

  constructor(private countryService: CountryService) { }

  getClassCSS(region: string): object {
    return {
      'btn-primary': region === this.regionActivated,
      'btn-outline-primary': region !== this.regionActivated
    };
  }

  activateRegion(region: string): void {
    if (region === this.regionActivated) { return; }
    this.showAlert = false;
    this.regionActivated = region;

    this.countryService.searchByRegion(region)
    .subscribe((countries) => this.countries = countries,
    (error) => {
      this.showAlert = true;
      this.countries = [];
    });
  }
}
