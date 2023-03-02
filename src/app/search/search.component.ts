import { Component, OnInit } from '@angular/core';
import {
  catchError,
  debounceTime,
  distinctUntilChanged,
  filter,
  Subject,
  switchMap,
  tap,
} from 'rxjs';
import { Book } from '../shared/book';
import { BookStoreService } from '../shared/book-store.service';

@Component({
  selector: 'bm-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  keyUp$ = new Subject<string | null>();
  foundBooks: Book[] = [];
  isLoading = false;
  constructor(private bs: BookStoreService) {}
  ngOnInit() {
    this.keyUp$
      .pipe(
        filter((term) => (term ? term.length >= 3 : false)),
        debounceTime(500),
        distinctUntilChanged(),
        tap(() => (this.isLoading = true)),
        switchMap((searchTerm) => this.bs.getAllSearch(searchTerm)),
        tap(() => (this.isLoading = false)),
        
      )
      .subscribe((books) => (this.foundBooks = books));
  }
}
