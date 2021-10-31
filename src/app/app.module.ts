import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { MoviesModule } from './movies/movies.module';
import { FibonacciModule } from './fibonacci/fibonacci/fibonacci.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,

    MoviesModule,
    SharedModule,
    FibonacciModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
