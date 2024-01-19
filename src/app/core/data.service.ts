import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map, filter, catchError, throwError, Observable, of } from 'rxjs';

import { ICustomer, IOrder } from '../customers/shared/interfaces';

@Injectable()
export class DataService {
  baseUrl: string = 'assets/';

  constructor(private http: HttpClient) {}

  getCustomers(): Observable<ICustomer[]> {
    return this.http
      .get<ICustomer[]>(this.baseUrl + 'customers.json')
      .pipe(catchError(this.handleError));
  }

  getCustomer(id: number): Observable<ICustomer> {
    return this.http.get<ICustomer[]>(this.baseUrl + 'customers.json').pipe(
      map((customers) => customers.filter((customer) => customer.id === id)),
      filter((filteredCustomers) => filteredCustomers.length > 0), // Ensure there is at least one matching customer
      map((filteredCustomers) => filteredCustomers[0]), // Take the first matching customer
      catchError(this.handleError)
    );
  }

  getOrders(id: number): Observable<IOrder[]> {
    return this.http.get<IOrder[]>(this.baseUrl + 'orders.json').pipe(
      map((orders) => {
        let custOrders = orders.filter(
          (order: IOrder) => order.customerId === id
        );
        return custOrders;
      }),
      catchError(this.handleError)
    );
  }

  private handleError(error: any) {
    console.error('server error:', error);
    if (error.error instanceof Error) {
      const errMessage = error.error.message;
      return throwError(() => new Error());
      // Use the following instead if using lite-server
      // return throwError(err.text() || 'backend server error');
    }
    return throwError(error || 'Node.js server error');
  }
}
