import { NgModule }             from '@angular/core';
import { CommonModule }         from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent }        from './home.component';
import { HomePcComponent }      from './home-pc.component';

const routes: Routes = [
  {
    path: 'm/home',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomePcComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
