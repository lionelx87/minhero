import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroDetailComponent } from './hero-detail.component';
import { Hero } from '@core/models';

describe('HeroDetailComponent', () => {
  let component: HeroDetailComponent;
  let fixture: ComponentFixture<HeroDetailComponent>;

  const mockId: string = '1';
  const mockHeroesData: Hero[] = [
    {
      id: 1,
      name: 'Hero Test',
      powerstats: {
        combat: 100,
        durability: 100,
        intelligence: 100,
        power: 100,
        speed: 100,
        strength: 100,
      },
      biography: 'Biography Test',
      firstAppearance: 'First Appearance Test',
      image: '',
      publisher: 'DC',
    },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroDetailComponent],
      providers: [
        {
          provide: 'HEROES_DATA',
          useValue: mockHeroesData,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HeroDetailComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('id', mockId);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
