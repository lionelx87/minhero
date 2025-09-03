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
    {
      id: 2,
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
    {
      id: 3,
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
    {
      id: 4,
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

  describe('check events', () => {
    it('should OnSearch be called when a search is performed in the searchBox.', () => {
      const spy = jest.spyOn(component, 'onSearch');
      const searchBox = fixture.debugElement.query(By.css('app-search-box'));
      const input: HTMLInputElement =
        searchBox.nativeElement.querySelector('input');
      input.value = 'batman';
      input.dispatchEvent(new Event('input'));
      expect(spy).toHaveBeenCalledWith('batman');
    });
    it('should onPageChange be called when clicking on the next page', () => {
      const spy = jest.spyOn(component, 'onPageChange');
      const buttons = fixture.debugElement.queryAll(
        By.css('.home-page__pagination button')
      );
      const nextPage = buttons[1];
      nextPage.triggerEventHandler('click', null);
      expect(spy).toHaveBeenCalledWith(1);
    });
  });
});
