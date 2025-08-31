import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardHeroComponent } from './card-hero.component';
import { Hero } from '@core/models';

describe('HeroComponent', () => {
  let component: CardHeroComponent;
  let fixture: ComponentFixture<CardHeroComponent>;

  const mockHero: Hero = {} as Hero;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardHeroComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CardHeroComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('hero', mockHero);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
