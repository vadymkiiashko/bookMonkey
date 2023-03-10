import { Component, OnInit } from '@angular/core';
import { Book } from '../shared/book';
import { BookStoreService } from '../shared/book-store.service';

@Component({
  selector: 'bm-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit {
  myBooks : Book[] =[];

  constructor(private bs: BookStoreService) {
   
  }
  ngOnInit() {
    this.bs.getAll().subscribe( res => this.myBooks = res);
  }
}
