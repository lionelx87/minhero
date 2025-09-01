import { computed, Inject, Injectable, signal } from '@angular/core';
import { Hero } from '@core/models';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  public readonly heroesSignal = signal<Hero[]>([]);

  readonly pageIndex = signal(0);
  readonly pageSize = signal(3);
  readonly searchTerm = signal('');

  readonly filteredHeroes = computed(() => {
    const term = this.searchTerm().trim().toLowerCase();
    if (!term) return this.heroesSignal();
    return this.heroesSignal().filter((h) =>
      h.name.toLowerCase().includes(term)
    );
  });

  readonly total = computed(() => this.filteredHeroes().length);

  readonly totalPages = computed(() =>
    Math.max(1, Math.ceil(this.total() / this.pageSize()))
  );

  readonly pagedHeroes = computed(() => {
    const page = this.pageIndex();
    const size = this.pageSize();
    const list = this.filteredHeroes();
    const start = page * size;
    return list.slice(start, start + size);
  });

  setPage(index: number) {
    const clamped = Math.max(0, Math.min(index, this.totalPages() - 1));
    this.pageIndex.set(clamped);
  }
  nextPage() {
    this.setPage(this.pageIndex() + 1);
  }
  prevPage() {
    this.setPage(this.pageIndex() - 1);
  }
  setPageSize(size: number) {
    this.pageSize.set(size);
    this.setPage(0);
  }
  setSearchTerm(term: string) {
    this.searchTerm.set(term);
    this.setPage(0);
  }

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
