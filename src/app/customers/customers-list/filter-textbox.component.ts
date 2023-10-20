import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'filter-textbox',
  template: ` Filter: <input type="text" class="filter-input" /> `,
  styleUrls: ['./customers-list.component.scss'],
})
export class FilterTextboxComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
