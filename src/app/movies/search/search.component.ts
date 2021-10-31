import { Component, ElementRef, ViewChild } from '@angular/core';

import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent {

  @ViewChild('txtSearch') txtSearch!: ElementRef<HTMLInputElement>;

  constructor(private movieService: MovieService){}

  search(){

    const value = this.txtSearch.nativeElement.value;

    if( value.trim().length === 0 ){
      return;
    }

    this.movieService.searchMovies(value);
    this.txtSearch.nativeElement.value = "";

  }

}
