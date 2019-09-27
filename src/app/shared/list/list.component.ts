import { Component, OnInit, Input } from '@angular/core';
import { ListItem } from './List';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input() list;
  @Input() fields: ListItem[];

  constructor() { }

  ngOnInit() {
  }

}
