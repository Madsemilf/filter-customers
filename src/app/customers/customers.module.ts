import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppMaterialModule } from '../app-material.module';
import { CustomersComponent } from './customers.component';

@NgModule({
  imports: [CommonModule, AppMaterialModule],
  declarations: [CustomersComponent],
  exports: [CustomersComponent],
})
export class CustomersModule {}
