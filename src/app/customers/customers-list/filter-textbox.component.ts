import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'filter-textbox',
  template: `
    Filter: <input type="text" class="filter-input" [(ngModel)]="filter" />
  `,
  styleUrls: ['./customers-list.component.scss'],
})
export class FilterTextboxComponent implements OnInit {
  private _filter: string = '';
  @Input() get filter() {
    return this._filter;
  }

  set filter(value: string) {
    this._filter = value;
    this.changed.emit(this.filter); // Raise changed event
  }

  @Output() changed: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}
}
