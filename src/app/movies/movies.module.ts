import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchComponent } from './search/search.component';
import { ResultsComponent } from './results/results.component';
import { MoviesPageComponent } from './movies-page/movies-page.component';

import { SharedModule } from '../shared/shared.module';
@NgModule({
  declarations: [
    SearchComponent,
    MoviesPageComponent,
    ResultsComponent
  ],
  exports: [
    MoviesPageComponent,
  ],
  imports: [
    SharedModule,
    CommonModule
  ]
})
export class MoviesModule { }
