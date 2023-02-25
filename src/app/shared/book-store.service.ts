import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Book } from './book';
import { BookRaw } from './book-raw';
import { books } from './books';
import { map, retry, catchError } from 'rxjs/operators';
import { BookFactory } from './book-factory';

@Injectable({
  providedIn: 'root',
})
export class BookStoreService {
  private api = 'https://api3.angular-buch.com';
  private errorHandler(error: HttpErrorResponse): Observable<any> {
    console.error("there's been an error");
    return throwError(error);
  }

  myBooks!: Book[];
  constructor(private http: HttpClient) {
    this.myBooks = books;
  }
  getAll(): Observable<Book[]> {
    return this.http.get<BookRaw[]>(`${this.api}/books`).pipe(
      retry(3),
      map((BooksRaw) => BooksRaw.map((b) => BookFactory.fromRaw(b))),
      catchError(this.errorHandler)
    );
  }
  getSingle(isbn: string | null): Observable<Book> {
    return this.http.get<BookRaw>(`${this.api}/books/${isbn}`).pipe(
      retry(3),
      map((b) => BookFactory.fromRaw(b)),
      catchError(this.errorHandler)
    );
  }

  remove(isbn: string): Observable<any> {
    return this.http.delete(`${this.api}/book/${isbn}`, {
      responseType: 'text',
    });
  }
}
