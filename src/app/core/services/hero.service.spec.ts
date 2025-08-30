import { TestBed } from '@angular/core/testing';

import { Hero } from '@core/models';
import { HeroService } from './hero.service';

describe('HeroService', () => {
  let service: HeroService;
  const mockHeroesData: Hero[] = [
    {
      id: 1,
      name: 'batman',
      powerstats: {
        combat: 75,
        durability: 85,
        intelligence: 95,
        power: 78,
        speed: 50,
        strength: 92,
      },
      biography:
        'Initially, Batman appeared as a lone crime fighter. His origins began to be explored starting with Detective Comics issue 33.',
      firstAppearance: 'Batman Beyond #1',
      image: '1.webp',
      publisher: 'DC Comics',
    },
    {
      id: 2,
      name: 'spiderman',
      powerstats: {
        combat: 74,
        durability: 80,
        intelligence: 100,
        power: 70,
        speed: 94,
        strength: 87,
      },
      biography:
        'According to Amazing Fantasy No. 15 (August 1962), where the character first appeared, Peter Benjamin Parker is a young orphan from Forest Hills, Queens, New York, who lives with his aunt May and uncle Ben.',
      firstAppearance: 'Amazing Fantasy #15',
      image: '2.webp',
      publisher: 'Marvel Comics',
    },
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: 'HEROES_DATA',
          useValue: mockHeroesData,
        },
      ],
    });
    service = TestBed.inject(HeroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getAllHeroes', () => {
    it('should return correct number of heroes', () => {
      expect(service.getAllHeroes().length).toEqual(2);
    });

    it('should return a copy not the original array', () => {
      const heroes = service.getAllHeroes();
      expect(heroes).not.toBe(mockHeroesData);
    });
  });

  describe('searchHeroes', () => {
    it('should find heroes by exact name match', () => {
      const result: Hero[] = service.searchHeroes('batman');
      expect(result.length).toBe(1);
      expect(result[0].id).toBe(1);
    });

    it('should be case insensitive', () => {
      const result: Hero[] = service.searchHeroes('BATMAN');
      expect(result.length).toBe(1);
      expect(result[0].id).toBe(1);
    });

    it('should return empty array when no matches', () => {
      const result: Hero[] = service.searchHeroes('flash');
      expect(result.length).toBe(0);
    });

    it('should return the entire array if an empty term is sent', () => {
      const result: Hero[] = service.searchHeroes('');
      expect(result.length).toBe(2);
    });

    it('should return the hero by exact name match if there are spaces at the end or beginning of the name', () => {
      const result: Hero[] = service.searchHeroes(' batman ');
      expect(result.length).toBe(1);
      expect(result[0].id).toBe(1);
    });

    it('should return heroes that match a partial search', () => {
      const result: Hero[] = service.searchHeroes('man');
      expect(result.length).toBe(2);
    });
  });

  describe('getHeroById', () => {
    it('should return hero when ID exists', () => {
      const hero: Hero | undefined = service.getHeroById(2);
      expect(hero?.id).toBe(2);
    });
    it('should return undefined when ID does not exist', () => {
      const hero: Hero | undefined = service.getHeroById(3);
      expect(hero).toBe(undefined);
    });
  });

  describe('createHero', () => {
    it('should generate the next sequential ID correctly', () => {
      const newHero: Omit<Hero, 'id'> = {
        name: 'black widow',
        powerstats: {
          intelligence: 75,
          strength: 13,
          speed: 33,
          durability: 30,
          power: 36,
          combat: 100,
        },
        biography: 'Natasha nació en Stalingrado (ahora Volgogrado), Rusia.',
        image: 'test3.webp',
        firstAppearance: 'Tales of Suspense #52',
        publisher: 'Marvel Comics',
      };
      const heroCreated = service.createHero(newHero);
      expect(heroCreated.id).toBe(3);
    });

    it('should add the new hero to the heroes array', () => {
      const newHero: Omit<Hero, 'id'> = {
        name: 'black widow',
        powerstats: {
          intelligence: 75,
          strength: 13,
          speed: 33,
          durability: 30,
          power: 36,
          combat: 100,
        },
        biography: 'Natasha nació en Stalingrado (ahora Volgogrado), Rusia.',
        image: 'test3.webp',
        firstAppearance: 'Tales of Suspense #52',
        publisher: 'Marvel Comics',
      };
      const heroCreated = service.createHero(newHero);
      expect(service.getAllHeroes().length).toBe(3);
    });

    it('should handle empty array and assign ID 1', () => {
      TestBed.resetTestingModule();
      TestBed.configureTestingModule({
        providers: [{ provide: 'HEROES_DATA', useValue: [] }],
      });
      const emptyService = TestBed.inject(HeroService);
      const newHero: Omit<Hero, 'id'> = {
        name: 'black widow',
        powerstats: {
          intelligence: 75,
          strength: 13,
          speed: 33,
          durability: 30,
          power: 36,
          combat: 100,
        },
        biography: 'Natasha nació en Stalingrado (ahora Volgogrado), Rusia.',
        image: 'test3.webp',
        firstAppearance: 'Tales of Suspense #52',
        publisher: 'Marvel Comics',
      };
      const heroCreated = emptyService.createHero(newHero);
      expect(heroCreated.id).toBe(1);
    });
  });

  describe('updateHero', () => {
    it('should update hero when ID exists', () => {
      const updatedHero = service.updateHero(1, { name: 'flash' });
      expect(service.getHeroById(1)?.name).toBe('flash');
    });

    it('should return null when ID does not exist', () => {
      const updatedHero = service.updateHero(5, { name: 'flash' });
      expect(updatedHero).toBeNull();
    });

    it('should not modify the hero ID', () => {
      const updatedHero = service.updateHero(1, { id: 5 } as any);
      expect(updatedHero?.id).toBe(1);
    });

    it('should keep unchanged properties intact', () => {
      const updatedHero = service.updateHero(1, { name: 'flash' });
      expect(service.getHeroById(1)?.powerstats.combat).toBe(75);
    });
  });
});
