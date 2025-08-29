import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-heroe',
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './card-hero.component.html',
  styleUrl: './card-hero.component.scss',
})
export class CardHeroComponent {
  private readonly router = inject(Router);

  goEditHero(): void {
    this.router.navigate(['/heroes/2/edit']);
  }

  goHeroDetail(): void {
    this.router.navigate(['/heroes/2']);
  }
}
