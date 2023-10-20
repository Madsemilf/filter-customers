import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppMaterialModule } from '../app-material.module';
import { CustomersComponent } from './customers.component';
import { CustomersListComponent } from './customers-list/customers-list.component';

@NgModule({
  imports: [CommonModule, AppMaterialModule],
  declarations: [CustomersComponent, CustomersListComponent],
  exports: [CustomersComponent],
})
export class CustomersModule {}
