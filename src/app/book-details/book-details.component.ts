import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../shared/book';
import { BookStoreService } from '../shared/book-store.service';

@Component({
  selector: 'bm-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss'],
})
export class BookDetailsComponent implements OnInit {
  myBook: Book | any;

  constructor(
    private bs: BookStoreService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const params = this.route.snapshot.paramMap;
    this.myBook = this.bs
      .getSingle(params.get('isbn'))
      .subscribe((b) => (this.myBook = b));
  }

  getRating(num: number | any) {
    return new Array(num);
  }

  removeBook(isbn: string) {
    if (confirm('do you really want to delete the book?')) {
      this.bs
        .remove(this.myBook.isbn)
        .subscribe((res) =>
          this.router.navigate(['../'], { relativeTo: this.route })
        );
    }
  }
}
