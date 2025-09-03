import { Component, computed, input } from '@angular/core';
import { Hero } from '@core/models';

@Component({
  selector: 'app-hero-information',
  imports: [],
  templateUrl: './hero-information.component.html',
  styleUrl: './hero-information.component.scss',
})
export class HeroInformationComponent {
  hero = input.required<Hero>();

  averagePower = computed(() => {
    const stats = this.hero().powerstats;
    const total =
      stats.intelligence +
      stats.strength +
      stats.speed +
      stats.durability +
      stats.power +
      stats.combat;
    return Math.round(total / 6);
  });
}
