import { Component, OnInit } from '@angular/core';
import { debounceTime, filter, Subject } from 'rxjs';

@Component({
  selector: 'bm-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  keyUp$ = new Subject<string | null>();
  ngOnInit(){
    this.keyUp$
      .pipe(
        filter((term) =>  term ?  term.length>= 3 : false) ,
        debounceTime(500)
      )
      .subscribe((e) => console.log(e));
  }
}
