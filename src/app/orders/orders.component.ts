import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { DataService } from '../core/data.service';
import { ICustomer, IOrder, IOrderItem } from '../customers/shared/interfaces';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
})
export class OrdersComponent implements OnInit {
  orders: IOrder[] = [];
  customer: ICustomer | undefined;

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    let idParam = this.route.snapshot.paramMap.get('id');

    if (idParam !== null) {
      let id = +idParam;
      this.dataService.getOrders(id).subscribe((orders: IOrder[]) => {
        this.orders = orders;
      });
      this.dataService.getCustomer(id).subscribe((customer: ICustomer) => {
        this.customer = customer;
      });
    } else {
      // Handle the case where 'id' is not present in the route
      console.error('ID parameter is missing');
    }
  }
}
