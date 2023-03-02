import { Book } from './book';
import { BookRaw } from './book-raw';

export class BookFactory {
  static fromRaw(b: BookRaw): Book {
    return { ...b, published: new Date(b.published) };
  }
  static empty(){
    return {
      isbn :'',
      published : new Date(),
      authors : [''],
      subtitle :'',
      title :'',
      rating :0,
      thumbnails : [{url: '' , title :''}],
      description :''
    }
  }
}
