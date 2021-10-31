import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { MoviesPageComponent } from './movies-page/movies-page.component';
import { ResultsComponent } from './results/results.component';



@NgModule({
  declarations: [
    SearchComponent,
    MoviesPageComponent,
    ResultsComponent
  ],
  exports: [
    MoviesPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MoviesModule { }
