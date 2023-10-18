import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppMaterialModule } from './app-material.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { CustomersComponent } from './customers/customers.component';

@NgModule({
  imports: [BrowserModule, AppMaterialModule, NoopAnimationsModule],
  declarations: [AppComponent, CustomersComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
