import { Component } from '@angular/core';
import { CardHeroComponent } from '../card-hero/card-hero.component';

@Component({
  selector: 'app-heroes-list',
  imports: [CardHeroComponent],
  templateUrl: './heroes-list.component.html',
  styleUrl: './heroes-list.component.scss',
})
export class HeroesListComponent {}
