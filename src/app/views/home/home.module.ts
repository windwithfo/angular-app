import { NgModule }          from '@angular/core';
import { FormsModule }       from '@angular/forms';
import { CommonModule }      from '@angular/common';
import { HomeComponent }     from './home.component';
import { HomeRoutingModule } from './home-routing.module';

import {
  WeUiRootModule
} from 'ngx-weui';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    WeUiRootModule,
    HomeRoutingModule
  ],
  exports: [HomeComponent],
  declarations: [HomeComponent]
})
export class HomeModule { }
