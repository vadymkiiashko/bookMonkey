import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Book } from '../shared/book';
import { BookFactory } from '../shared/book-factory';

@Component({
  selector: 'bm-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent implements OnInit {
  ngOnInit() {
  }
  book = BookFactory.empty()

  @Output('createBook') submitBook = new EventEmitter<any>()
  @ViewChild('bookForm')
  bookForm!: NgForm; 
  submitForm(){
    this.submitBook.emit(this.book);
    this.book = BookFactory.empty()
    this.bookForm.reset()
  }
}
