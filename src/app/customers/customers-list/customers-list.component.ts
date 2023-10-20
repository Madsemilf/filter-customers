import { Component, OnInit } from '@angular/core';

import { ICustomer } from '../shared/interfaces';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.scss'],
})
export class CustomersListComponent implements OnInit {
  filteredCustomers: ICustomer[] = [];
  customersOrderTotal: number | undefined;
  currencyCode: string = 'USD';
  constructor() {}

  ngOnInit(): void {}
}
