import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CustomersModule } from './customers/customers.module';
import { AppMaterialModule } from './app-material.module';
import { AppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule, AppMaterialModule, CustomersModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
