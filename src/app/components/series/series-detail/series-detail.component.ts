import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../../services/data.service';
import { CardDetailComponent } from '../../shared/card-detail/card-detail.component';

@Component({
  selector: 'app-series-detail',
  standalone: true,
  imports: [CardDetailComponent],
  templateUrl: './series-detail.component.html',
  styleUrl: './series-detail.component.css'
})
export class SeriesDetailComponent {

  @Input() character: any;

  constructor(private moviesService: DataService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const movieId = params['id'];
      this.getMovieDetails(movieId);
    });
  }

  getMovieDetails(movieId: number) {
    this.moviesService.getSerieById(movieId).subscribe((data: any) => {
      console.log(data)
      data.title = data.name;
      this.character = data;
      console.log(this.character)
  });
  }
}
