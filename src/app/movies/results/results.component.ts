import { Component } from '@angular/core';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
})
export class ResultsComponent {

  constructor( private movieService: MovieService ) { }

  get results(){
    return this.movieService.results;
  }

}
