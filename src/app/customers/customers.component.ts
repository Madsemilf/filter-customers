import { Component, OnInit } from '@angular/core';

import { ICustomer } from './shared/interfaces';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss'],
})
export class CustomersComponent implements OnInit {
  title: string = '';
  people: ICustomer[] = [];

  // Do this for
  // isVisible = true;

  // changeVisibility() {
  //   this.isVisible = !this.isVisible;
  // }

  constructor() {}

  ngOnInit(): void {
    this.title = 'Customers';
    this.people = [
      {
        id: 1,
        name: 'cloud strife',
        city: 'Stabekk',
        orderTotal: 99.9,
        customerSince: new Date(2014, 7, 10),
      },
      {
        id: 2,
        name: 'Ola Nordmann',
        city: 'Trondheim',
        orderTotal: 199.9,
        customerSince: new Date(2017, 2, 22),
      },
      {
        id: 3,
        name: 'Kari Nordmann',
        city: 'Bergen',
        orderTotal: 999.9,
        customerSince: new Date(2002, 10, 31),
      },
      {
        id: 4,
        name: 'Roald Dahl',
        city: 'Oslo',
        orderTotal: 5999.9,
        customerSince: new Date(2002, 10, 31),
      },
    ];
    // Log the number of people to the console
    console.log('Number of People:', this.people.length);
  }
}
