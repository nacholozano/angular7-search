import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputSearchComponent } from './input-search/input-search.component';
import { FormsModule } from '@angular/forms';
import { ListComponent } from './list/list.component';
import { LoadingComponent } from './loading/loading.component';

@NgModule({
  declarations: [InputSearchComponent, LoadingComponent, ListComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    InputSearchComponent,
    LoadingComponent,
    ListComponent
  ]
})
export class SharedModule { }
