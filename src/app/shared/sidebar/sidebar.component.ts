import { Component } from '@angular/core';
import { MovieService } from '../../movies/services/movie.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {

  constructor( private movieService: MovieService ) { }

  searchLink( word: string ) {
    this.movieService.searchMovies( word );
  }

  get history(): string[] {
    return this.movieService.history;
  }


}
