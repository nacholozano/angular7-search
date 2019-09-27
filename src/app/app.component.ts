import { Component } from '@angular/core';
import { RecipePuppyService } from './recipe-puppy/recipe-puppy.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular 7 Search';
  recipePuppyService = RecipePuppyService;

  fields = [
    {
      label: 'Título',
      name: 'title'
    },
    {
      label: 'Enlace',
      name: 'href',
      isLink: true
    },
    {
      label: 'Ingredientes',
      name: 'ingredients'
    },
    {
      label: 'Foto',
      name: 'thumbnail',
      isLink: true
    }
  ];

  constructor() { }

}
