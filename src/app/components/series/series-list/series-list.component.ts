import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../../../services/data.service';
import { CardComponent } from '../../shared/card/card.component';

@Component({
  selector: 'app-series-list',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './series-list.component.html',
  styleUrl: './series-list.component.css'
})
export class SeriesListComponent {
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
        10759: 'Action & Adventure',
        16: 'Animation',
        35: 'Comedy',
        80: 'Crime',
        99: 'Documentary',
        18: 'Drama',
        10751: 'Family',
        10762: 'Kids',
        9648: 'Mystery',
        10763: 'News',
        10764: 'Reality',
        10765: 'Sci-Fi & Fantasy',
        10766: 'Soap',
        10767: 'Talk',
        10768: 'War & Politics',
        37: 'Western'
      };
      this.moviesService.getSeries().subscribe((data: any) => {

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
    this.moviesService.getSearch(this.searchTerm).subscribe((data: any) => {
      this.movies = data.results;
    });
    this.searchTerm = '';
  }
  
}
