import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-countries-suggestions',
  templateUrl: './countries-suggestions.component.html',
  styles: [
  ]
})
export class CountriesSuggestionsComponent {
  @Input() countriesSugestions: any[] = [];
  @Input() searchValue = '';
  @Input() property = 'name';
  @Output() OnClickSuggestion: EventEmitter<string> = new EventEmitter();

  constructor() { }

  search(): void  {
    this.OnClickSuggestion.emit(this.searchValue);
  }
}
