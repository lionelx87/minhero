import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { Hero } from '@core/models';
import { HeroService } from '@core/services';
import { Router } from '@angular/router';
import { By } from '@angular/platform-browser';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let mockHeroService: jest.Mocked<HeroService>;
  let mockRouter: jest.Mocked<Router>;

  const mockHeroesData: Hero[] = [];

  beforeEach(async () => {
    mockRouter = {
      navigate: jest.fn(),
    } as any;

    await TestBed.configureTestingModule({
      imports: [HomeComponent],
      providers: [
        {
          provide: 'HEROES_DATA',
          useValue: mockHeroesData,
        },
        {
          provide: Router,
          useValue: mockRouter,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('render components', () => {
    it('should render search box component', () => {
      const searchBox = fixture.debugElement.query(By.css('app-search-box'));
      expect(searchBox).toBeTruthy();
    });
    it('should render heroes list component', () => {
      const heroesList = fixture.debugElement.query(By.css('app-heroes-list'));
      expect(heroesList).toBeTruthy();
    });
    it('should render pagination component', () => {
      const pagination = fixture.debugElement.query(By.css('app-pagination'));
      expect(pagination).toBeTruthy();
    });
  });

  describe('navigation', () => {
    it('should navigate to "/heroes/new" when goCreateHero is called', () => {
      component.goCreateHero();
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/heroes/new']);
    });
    it('should navigate to "/heroes/new" when add button is clicked', () => {
      const addBtn = fixture.debugElement.query(By.css('button'));
      addBtn.triggerEventHandler('click', null);
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/heroes/new']);
    });
  });
});
