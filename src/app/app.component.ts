import { Component, OnInit } from '@angular/core';
import { AppMaterialModule } from './app-material.module';

@Component({
  selector: 'app-root',
  template: ` <h1>{{ title }}</h1> `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title: string | undefined;
  constructor() {}

  ngOnInit() {
    this.title = 'Filter customers';
  }
}
