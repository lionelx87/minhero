import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroUpsertComponent } from './hero-upsert.component';
import { Hero } from '@core/models';
import { By } from '@angular/platform-browser';

describe('HeroUpsertComponent', () => {
  let component: HeroUpsertComponent;
  let fixture: ComponentFixture<HeroUpsertComponent>;

  const mockId: string = '1';

  const mockHeroesData: Hero[] = [];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroUpsertComponent],
      providers: [
        {
          provide: 'HEROES_DATA',
          useValue: mockHeroesData,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HeroUpsertComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('id', mockId);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('navigation', () => {
    it('should go back to the home page when clicked in back button', () => {
      const spy = jest.spyOn(component, 'back');
      const searchBox = fixture.debugElement.query(By.css('button'));
      searchBox.triggerEventHandler('click', null);
      expect(spy).toHaveBeenCalled();
    });
  });
});
