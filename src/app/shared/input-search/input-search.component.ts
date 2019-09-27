import { Component, OnInit, Input, Injector } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import {
  debounceTime, distinctUntilChanged, switchMap, map, finalize
} from 'rxjs/operators';
import { ListItem } from '../list/List';


@Component({
  selector: 'app-input-search',
  templateUrl: './input-search.component.html',
  styleUrls: ['./input-search.component.scss']
})
export class InputSearchComponent implements OnInit {

  @Input() service;
  @Input() methodName: string;
  @Input() fields: ListItem;

  private _searchSubject = new Subject();
  loading: boolean;
  result$: Observable<any>;
  private _service: any;

  constructor(
    private _injector: Injector
  ) { }

  ngOnInit() {

    this._service = this._injector.get(this.service);

    this.result$ = this._searchSubject.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => {
        this.loading = true;
        return this._service[this.methodName](term)
        .pipe(
          finalize(() => {
            this.loading = false;
          })
        );
      }),
    );
  }

  search(searchValue: string) {
    this._searchSubject.next(searchValue);
  }

}
