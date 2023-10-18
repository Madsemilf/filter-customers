import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [BrowserModule, NoopAnimationsModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
