import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroInformationComponent } from './hero-information.component';
import { Hero } from '@core/models';

describe('HeroInformationComponent', () => {
  let component: HeroInformationComponent;
  let fixture: ComponentFixture<HeroInformationComponent>;

  const mockHero: Hero = {
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
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroInformationComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HeroInformationComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('hero', mockHero);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
