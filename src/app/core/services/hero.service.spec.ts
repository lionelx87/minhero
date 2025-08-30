import { TestBed } from '@angular/core/testing';

import { HeroService } from './hero.service';
import { Hero } from '@core/models';

describe('HeroService', () => {
  let service: HeroService;
  const mockHeroesData: Hero[] = [
    {
      id: 1,
      name: 'hero test',
      powerstats: {
        combat: 10,
        durability: 10,
        intelligence: 10,
        power: 10,
        speed: 10,
        strength: 10,
      },
      biography: 'biography test',
      firstAppearance: 'first appearance test',
      image: 'test.webp',
      publisher: 'publisher test',
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
});
