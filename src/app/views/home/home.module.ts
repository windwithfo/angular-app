import { WeUiRootModule }    from 'ngx-weui';
import { NgModule }          from '@angular/core';
import { FormsModule }       from '@angular/forms';
import { CommonModule }      from '@angular/common';
import { HomeComponent }     from './home.component';
import { DialogComponent }   from '../../components';
import { PostComponent }     from '../../components';
import { HomePcComponent }   from './home-pc.component';
import { HomeRoutingModule } from './home-routing.module';

import {
  MatButtonModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatSelectModule,
  MatOptionModule,
  MatRadioModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatInputModule,
  MatDialogModule,
  MatPaginatorModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    WeUiRootModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatDialogModule,
    MatPaginatorModule,
    HomeRoutingModule
  ],
  entryComponents: [DialogComponent, PostComponent],
  exports: [HomeComponent],
  declarations: [HomeComponent, HomePcComponent, DialogComponent, PostComponent]
})
export class HomeModule { }
