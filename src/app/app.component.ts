import { Component, OnInit } from '@angular/core';
import { AppMaterialModule } from './app-material.module';

@Component({
  selector: 'app-root',
  template: ` <router-outlet></router-outlet> `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
