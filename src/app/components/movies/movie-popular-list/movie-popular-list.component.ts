import { Component, Input } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CardComponent } from '../../shared/card/card.component';

@Component({
  selector: 'app-movie-popular-list',
  standalone: true,
  imports: [CardComponent, RouterLink],
  templateUrl: './movie-popular-list.component.html',
  styleUrl: './movie-popular-list.component.css'
})
export class MoviePopularListComponent {
  @Input() movies: any[]  = [];
  searchTerm: string = '';

  constructor(private moviesService: DataService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.searchTerm = params['name'];
      this.handleRouteParams();
    });
  }
  
  handleRouteParams() {
    if (this.searchTerm) {
      this.search();
    } else {
      const genreMapping: { [key: number]: string } = {
        28: 'Action',
        12: 'Adventure',
        16: 'Animation',
        35: 'Comedy',
        80: 'Crime',
        99: 'Documentary',
        18: 'Drama',
        10751: 'Family',
        14: 'Fantasy',
        36: 'History',
        27: 'Horror',
        10402: 'Music',
        9648: 'Mystery',
        10749: 'Romance',
        878: 'Science Fiction',
        10770: 'TV Movie',
        53: 'Thriller',
        10752: 'War',
        37: 'Western'
      };
      this.moviesService.getMovies().subscribe((data: any) => {
        
          data.results.forEach((result:any) => {
            result.newGenre = result.genre_ids.map((id:number) => genreMapping[id]);
            console.log(result.newGenre)
          });
          this.movies = data.results;
          console.log(data.results[0].genre_ids)
      });
    }
  }

  search() {
    const genreMapping: { [key: number]: string } = {
      28: 'Action',
      12: 'Adventure',
      16: 'Animation',
      35: 'Comedy',
      80: 'Crime',
      99: 'Documentary',
      18: 'Drama',
      10751: 'Family',
      14: 'Fantasy',
      36: 'History',
      27: 'Horror',
      10402: 'Music',
      9648: 'Mystery',
      10749: 'Romance',
      878: 'Science Fiction',
      10770: 'TV Movie',
      53: 'Thriller',
      10752: 'War',
      37: 'Western'
    };
    this.moviesService.getSearch(this.searchTerm).subscribe((data: any) => {
      data.results.forEach((result:any) => {
        result.newGenre = result.genre_ids.map((id:number) => genreMapping[id]);
        console.log(result.newGenre)
      });
      this.movies = data.results;
    });
    this.searchTerm = '';
  }

}
