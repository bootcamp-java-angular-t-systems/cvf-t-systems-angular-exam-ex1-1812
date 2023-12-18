import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RespuestaMovies } from '../interfaces/interfaces';
import { RootObject } from '../interfaces/intMovie';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  key = "d7b626df56b785b0c4ff3c627a66adbe";
  page = 0;
  pageSearch = 1;
  lastQuery = "";

  constructor(private http: HttpClient) { }

  // https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&api_key=d7b626df56b785b0c4ff3c627a66adbe
  getMovies() {
    this.page++;
    console.log(`https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&api_key=${this.key}`)
    return this.http.get<RespuestaMovies>(`https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&api_key=${this.key}`);
  }

  getMoviesPopular() {
    this.page++;
    return this.http.get<RespuestaMovies>(`https://api.themoviedb.org/3/trending/movie/day?api_key=${this.key}&page=${this.page}`);
  }

  getSeries() {
    this.page++;
    return this.http.get<RespuestaMovies>(`https://api.themoviedb.org/3/discover/tv?api_key=${this.key}&page=${this.page}`);
  }

  getMovieById(id: number) {
    return this.http.get<RootObject>(`https://api.themoviedb.org/3/movie/${id}?api_key=${this.key}`); 
  }
  
  getSerieById(id: number) {
    return this.http.get<RootObject>(`https://api.themoviedb.org/3/tv/${id}?api_key=${this.key}`); 
  }

  getSearch(query: string) {
    if(this.lastQuery == query) {
      this.pageSearch++;
    } else {
      this.pageSearch = 1;
    }
    this.lastQuery = query;
    return this.http.get<RespuestaMovies>(`https://api.themoviedb.org/3/search/multi?query=${query}&api_key=${this.key}`);
  }
}

