import {
  Component,
  inject,
  input,
  signal,
  effect,
  computed,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { HeroFormComponent } from '@core/components';
import { Hero } from '@core/models';
import { HeroService } from '@core/services';

@Component({
  selector: 'app-hero-upsert',
  imports: [HeroFormComponent, MatButtonModule, MatIconModule],
  templateUrl: './hero-upsert.component.html',
  styleUrl: './hero-upsert.component.scss',
})
export class HeroUpsertComponent {
  private readonly router = inject(Router);
  readonly heroService = inject(HeroService);

  id = input<number, string>(0, {
    transform: (value: string) => {
      const numValue = Number(value);
      return isNaN(numValue) ? 0 : numValue;
    },
  });

  hero = computed(() => this.heroService.getHeroById(this.id()));

  heroSubmit(hero: Partial<Hero>) {
    this.heroService.createHero(hero as any);
    this.back();
  }

  back(): void {
    this.router.navigate(['/']);
  }
}
