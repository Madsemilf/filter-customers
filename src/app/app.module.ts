import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CustomersModule } from './customers/customers.module';
import { AppMaterialModule } from './app-material.module';
import { AppComponent } from './app.component';
import { SharedModule } from './customers/shared/shared.module';

@NgModule({
  imports: [BrowserModule, AppMaterialModule, CustomersModule, SharedModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
