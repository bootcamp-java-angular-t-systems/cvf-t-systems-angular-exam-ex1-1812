import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() character: any;

  constructor(public router: Router, private charactersService: DataService) { }

  returnToList() {
    this.router.navigate(['/movies']);
  }

  seeMore() {

    const characterId = this.character.id;
    const currentUrl = this.router.url;
    console.log(currentUrl)
    if (currentUrl.includes('/series')) {
      this.router.navigate(['/serie/', characterId]);
    } else if (currentUrl.includes('/movies')) {
      this.router.navigate(['/movie/', characterId]);
    } else {
      this.router.navigate(['/movie/', characterId]);
    }

  }


}
