import { NgModule }                from '@angular/core';
import { AppComponent }            from './app.component';
import { AppRoutingModule }        from './app-routing.module';
import { HomeModule }              from './views/home/home.module';
import { BrowserModule }           from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HomeModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
