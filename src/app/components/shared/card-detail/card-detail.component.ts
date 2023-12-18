import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { response } from 'express';
import { FormsModule } from '@angular/forms';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-card-detail',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './card-detail.component.html',
  styleUrl: './card-detail.component.css'
})
export class CardDetailComponent {
  @Input() character: any;

  constructor(private router: Router, private charactersService: DataService) { }

  returnToList() {
    this.router.navigate(['/movies']);
  }
}
