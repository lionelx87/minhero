import { Injectable } from '@angular/core';
import { MockHeroes } from '@core/data/mock-heroes.data';
import { Hero } from '@core/models';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  private heroes: Hero[] = MockHeroes;

  constructor() {}
}
