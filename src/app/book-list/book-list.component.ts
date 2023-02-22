import { Component, OnInit } from '@angular/core';
import { Book } from '../shared/book';
import { books } from '../shared/books';

@Component({
  selector: 'bm-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
    myBooks : Book[] = [];

  ngOnInit() {
      this.myBooks=books;
  }
}
