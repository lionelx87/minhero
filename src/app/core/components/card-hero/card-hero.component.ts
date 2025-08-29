import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { HeroConfirmDeleteComponent } from '../hero-confirm-delete/hero-confirm-delete.component';

@Component({
  selector: 'app-card-heroe',
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './card-hero.component.html',
  styleUrl: './card-hero.component.scss',
})
export class CardHeroComponent {
  private readonly router = inject(Router);
  readonly dialog = inject(MatDialog);

  goEditHero(): void {
    this.router.navigate(['/heroes/2/edit']);
  }

  goHeroDetail(): void {
    this.router.navigate(['/heroes/2']);
  }

  openDialog(): void {
    this.dialog.open(HeroConfirmDeleteComponent);
  }
}
