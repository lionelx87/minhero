import { Component, input } from '@angular/core';
import { CardHeroComponent } from '../card-hero/card-hero.component';
import { Hero } from '@core/models';

@Component({
  selector: 'app-heroes-list',
  imports: [CardHeroComponent],
  templateUrl: './heroes-list.component.html',
  styleUrl: './heroes-list.component.scss',
})
export class HeroesListComponent {
  heroes = input.required<Hero[]>();
}
