import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-search-country',
  templateUrl: './search-country.component.html',
  styles: [
  ]
})
export class SearchCountryComponent implements OnInit {
  @Output() OnEnter: EventEmitter<string> = new EventEmitter();
  @Output() OnDebounce: EventEmitter<string> = new EventEmitter();
  @Input() placeholder = '';

  debouncer: Subject<string> = new Subject();
  searchValue = '';

  constructor() { }

  ngOnInit(): void {
    this.debouncer
    .pipe(debounceTime(300))
    .subscribe(value => this.OnDebounce.emit(value));
  }

  search(): void {
    this.OnEnter.emit(this.searchValue);
  }

  pressKey(): void {
    this.debouncer.next(this.searchValue);
  }
}
