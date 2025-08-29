import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import {
  HeroesListComponent,
  PaginationComponent,
  SearchBoxComponent,
} from '@core/components';

@Component({
  selector: 'app-home',
  imports: [
    SearchBoxComponent,
    HeroesListComponent,
    PaginationComponent,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  private readonly router = inject(Router);

  goCreateHero() {
    this.router.navigate(['/heroes/new']);
  }
}
