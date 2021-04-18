import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private url = 'https://restcountries.eu/rest/v2';

  get httpParams(): HttpParams {
    return new HttpParams().set('fields', 'name;capital;alpha2Code;flag;pupulation');
  }

  constructor(private http: HttpClient) { }

  searchByCountry(query: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.url}/name/${query}`, {params: this.httpParams});
  }

  searchByCapital(query: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.url}/capital/${query}`, {params: this.httpParams});
  }

  searchByCode(code: string): Observable<Country> {
    return this.http.get<Country>(`${this.url}/alpha/${code}`);
  }

  searchByRegion(query: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.url}/region/${query}`, {params: this.httpParams});
  }
}
