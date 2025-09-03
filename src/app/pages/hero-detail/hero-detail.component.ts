import { Component, computed, inject, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { HeroInformationComponent } from '@core/components/hero-information';
import { HeroService } from '@core/services';

@Component({
  selector: 'app-hero-detail',
  imports: [MatButtonModule, MatIconModule, HeroInformationComponent],
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.scss',
})
export class HeroDetailComponent {
  private readonly router = inject(Router);
  private readonly heroService = inject(HeroService);

  id = input<number, string>(0, {
    transform: (value: string) => {
      const numValue = Number(value);
      return isNaN(numValue) ? 0 : numValue;
    },
  });

  hero = computed(() => this.heroService.getHeroById(this.id()));

  back(): void {
    this.router.navigate(['/']);
  }
}
