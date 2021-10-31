import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { SearchResponse, Article } from '../interface/movie.interface';

@Injectable({
  providedIn: 'root'
})

export class MovieService {


  private apiKey: string = 'a456f85d87e34ec1a63cf9b132408f80';
  private servicioUrl: string = 'https://newsapi.org/v2/everything';
  private _history: string[] = [];

  public results: Article[] = [];

  get history() {
    //rompo referencia para no modificar el array original
    return [...this._history];
  }

  constructor(private http: HttpClient) {
    this._history = JSON.parse(localStorage.getItem('history')!) || [];
    this.results = JSON.parse(localStorage.getItem('results')!) || [];
  }

  searchMovies(query: string = '') {

    query = query.trim().toLowerCase();

    if(!this._history.includes(query)){
      this._history.unshift(query);
      this._history = this._history.splice(0, 10);

      localStorage.setItem('history', JSON.stringify(this._history));
    }

    const params = new HttpParams().set('apiKey', this.apiKey)
                                   .set('language', 'es')
                                   .set('page', '1')
                                   .set('sortBy', 'popularity')
                                   .set('q', query);

    this.http.get<SearchResponse>(`${this.servicioUrl}`, { params })
      .subscribe(( resp ) => {
        console.log(resp.articles);
        this.results = resp.articles;
        localStorage.setItem('results', JSON.stringify(this.results));
      });
  }
}
