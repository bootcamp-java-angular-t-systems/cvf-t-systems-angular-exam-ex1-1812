import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { Router, RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink, RouterModule, ReactiveFormsModule],
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})

export class NavComponent {
  @ViewChild('name') name!: ElementRef;
  myForm: FormGroup;
  
  constructor(private router: Router, private formBuilder: FormBuilder) {
    this.myForm = this.formBuilder.group({
      name: '',
    });
  }

  onSearch() {
    const formData = this.myForm.value;
    this.router.navigate(['/search/', formData.name]);
  }
}
