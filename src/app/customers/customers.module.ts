import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SharedModule } from './shared/shared.module';
import { AppMaterialModule } from '../app-material.module';
import { CustomersComponent } from './customers.component';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { FilterTextboxComponent } from './customers-list/filter-textbox.component';
import { SorterService } from '../core/sorter.service';

@NgModule({
  imports: [CommonModule, AppMaterialModule, SharedModule, FormsModule],
  declarations: [
    CustomersComponent,
    CustomersListComponent,
    FilterTextboxComponent,
  ],
  providers: [SorterService],
  exports: [CustomersComponent],
})
export class CustomersModule {}
