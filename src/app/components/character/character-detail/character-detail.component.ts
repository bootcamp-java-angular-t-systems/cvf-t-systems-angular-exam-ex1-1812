import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../../services/data.service';
import { CardDetailComponent } from '../../shared/card-detail/card-detail.component';

@Component({
  selector: 'app-movie-detail',
  standalone: true,
  imports: [CardDetailComponent],
  templateUrl: './character-detail.component.html',
  styleUrl: './character-detail.component.css'
})
export class MovieDetailComponent implements OnInit {
  @Input() character: any;

  constructor(private moviesService: DataService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const movieId = params['id'];
      this.getMovieDetails(movieId);
    });
  }

  getMovieDetails(movieId: number) {
    this.moviesService.getMovieById(movieId).subscribe((data: any) => {
      console.log(data)
      this.character = data;
      console.log(this.character)
  });
  }
}
