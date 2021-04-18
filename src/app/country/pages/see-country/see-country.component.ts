import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-see-country',
  templateUrl: './see-country.component.html',
  styles: [
  ]
})
export class SeeCountryComponent implements OnInit {
  country!: Country;

  constructor(private activateRoute: ActivatedRoute, private countryService: CountryService) { }

  ngOnInit(): void {
    this.activateRoute.params
    . pipe(
      switchMap(({code}) => this.countryService.searchByCode(code)),
      tap(console.log)
      )
    .subscribe((country) => this.country = country);
    /*
    this.activateRoute.params
    .subscribe(({code}) => {
      this.countryService.searchByCode(code)
      .subscribe((country) => {
        console.log(country);
      })
    });
    */
  }

}
