import { Inject, Injectable, signal } from '@angular/core';
import { Hero } from '@core/models';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  public readonly heroesSignal = signal<Hero[]>([]);

  constructor(@Inject('HEROES_DATA') heroesData: Hero[]) {
    this.heroesSignal.set([...heroesData]);
  }

  getAllHeroes(): Hero[] {
    return this.heroesSignal();
  }

  searchHeroes(term: string): Hero[] {
    return this.heroesSignal().filter((hero) =>
      hero.name.toLowerCase().includes(term.trim().toLowerCase())
    );
  }

  getHeroById(id: number): Hero | undefined {
    return this.heroesSignal().find((hero) => hero.id === id);
  }

  createHero(hero: Omit<Hero, 'id'>): Hero {
    const currentHeroes = this.heroesSignal();
    const nextId =
      currentHeroes.length > 0
        ? Math.max(...currentHeroes.map((hero) => hero.id)) + 1
        : 1;
    const newHero: Hero = {
      ...hero,
      id: nextId,
      // image: `assets/images/heroes/${nextId}.webp`,
      image: '',
    };
    this.heroesSignal.update((heroes) => [...heroes, newHero]);
    return newHero;
  }

  updateHero(id: number, hero: Partial<Omit<Hero, 'id'>>): Hero | null {
    const currentHeroes = this.heroesSignal();
    const index = currentHeroes.findIndex((hero) => hero.id === id);
    if (index < 0) return null;
    const updatedHero = {
      ...currentHeroes[index],
      ...hero,
      id,
    };
    this.heroesSignal.update((heroes) =>
      heroes.map((hero, i) => (i === index ? updatedHero : hero))
    );
    return updatedHero;
  }

  deleteHero(id: number): boolean {
    const currentHeroes = this.heroesSignal();
    const heroExists = currentHeroes.some((hero) => hero.id === id);
    if (!heroExists) return false;
    this.heroesSignal.update((heroes) =>
      heroes.filter((hero) => hero.id !== id)
    );
    return true;
  }
}
