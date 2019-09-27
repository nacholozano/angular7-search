import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoadingComponent implements OnInit {

  @Input() loading;

  constructor() { }

  ngOnInit() {
  }

}


/*@Component({
  selector: 'app-loading',
  template: `<div *ngIf="loading" class="alert alert-info" role="alert">Cargando ...</div>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoadingComponent {
  @Input() loading;
}*/
