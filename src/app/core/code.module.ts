import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { DataService } from './data.service';
import { SorterService } from './sorter.service';

@NgModule({
  imports: [],
  providers: [DataService, SorterService],
})
export class CodeModule {}
