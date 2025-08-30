import { Inject, Injectable } from '@angular/core';
import { Hero } from '@core/models';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  private heroes: Hero[];

  constructor(@Inject('HEROES_DATA') heroesData: Hero[]) {
    this.heroes = [...heroesData];
  }

  getAllHeroes(): Hero[] {
    return [...this.heroes];
  }

  searchHeroes(term: string): Hero[] {
    return this.heroes.filter((hero) =>
      hero.name.toLowerCase().includes(term.toLowerCase())
    );
  }

  getHeroById(id: number): Hero | undefined {
    return this.heroes.find((hero) => hero.id === id);
  }

  createHero(hero: Omit<Hero, 'id'>): Hero {
    const nextId = Math.max(...this.heroes.map((hero) => hero.id)) + 1;
    const newHero: Hero = {
      ...hero,
      id: nextId,
      image: `assets/images/heroes/${1}.webp`,
    };
    this.heroes = [...this.heroes, newHero];
    return newHero;
  }

  updateHero(id: number, hero: Partial<Omit<Hero, 'id'>>): Hero | null {
    const index = this.heroes.findIndex((hero) => hero.id === id);
    if (index < 0) return null;
    this.heroes[index] = {
      ...this.heroes[index],
      ...hero,
      id,
    };
    return this.heroes[index];
  }

  deleteHero(id: number): boolean {
    const index = this.heroes.findIndex((hero) => hero.id === id);
    if (index < 0) return false;
    this.heroes.splice(index, 1);
    return true;
  }
}
