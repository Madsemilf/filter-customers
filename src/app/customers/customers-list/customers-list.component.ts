import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.scss'],
})
export class CustomersListComponent implements OnInit {
  filteredCustomers: any[] = [];
  customersOrderTotal: number | undefined;
  currencyCode: string = 'USD';
  constructor() {}

  ngOnInit(): void {}
}
