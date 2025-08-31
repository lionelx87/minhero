import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesListComponent } from './heroes-list.component';
import { provideRouter } from '@angular/router';
import { Hero } from '@core/models';

describe('HeroesListComponent', () => {
  let component: HeroesListComponent;
  let fixture: ComponentFixture<HeroesListComponent>;

  const mockHeroes: Hero[] = [];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroesListComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(HeroesListComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('heroes', mockHeroes);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
