import { Component, inject, input, output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Hero } from '@core/models';
import { HeroConfirmDeleteComponent } from '../hero-confirm-delete/hero-confirm-delete.component';
import { filter, take } from 'rxjs';

@Component({
  selector: 'app-card-heroe',
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './card-hero.component.html',
  styleUrl: './card-hero.component.scss',
})
export class CardHeroComponent {
  private readonly router = inject(Router);
  readonly dialog = inject(MatDialog);

  hero = input.required<Hero>();
  onDeleteConfirm = output<boolean>();

  goEditHero(): void {
    this.router.navigate([`/heroes/${this.hero().id}/edit`]);
  }

  goHeroDetail(): void {
    this.router.navigate([`/heroes/${this.hero().id}`]);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(HeroConfirmDeleteComponent);
    dialogRef
      .afterClosed()
      .pipe(filter(Boolean), take(1))
      .subscribe(() => this.onDeleteConfirm.emit(true));
  }
}
