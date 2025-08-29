import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { HeroFormComponent } from '@core/components';

@Component({
  selector: 'app-hero-upsert',
  imports: [HeroFormComponent, MatButtonModule, MatIconModule],
  templateUrl: './hero-upsert.component.html',
  styleUrl: './hero-upsert.component.scss',
})
export class HeroUpsertComponent {
  private readonly router = inject(Router);

  back(): void {
    this.router.navigate(['/']);
  }
}
