import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroFormComponent } from './hero-form.component';
import { Hero } from '@core/models';

describe('HeroFormComponent', () => {
  let component: HeroFormComponent;
  let fixture: ComponentFixture<HeroFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HeroFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('form validation', () => {
    it('should be invalid when required fields are empty', () => {
      expect(component.formValid()).toBeFalsy();
    });

    it('should be valid when all required fields are filled correctly', () => {
      component.heroForm.patchValue({
        name: 'Hero Test',
        firstAppearance: 'First Appearance Test',
        publisher: 'DC',
        biography: 'Biography Test',
      });
      expect(component.formValid()).toBeTruthy();
    });
  });

  describe('form routing', () => {
    it('should populate form when hero is provided from route', () => {
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

      fixture.componentRef.setInput('hero', mockHero);
      component.ngOnInit();
      expect(component.heroForm.get('name')?.value).toBe('Hero Test');
    });
  });

  describe('form submission', () => {
    it('should emit heroSubmit when creating new hero', () => {
      jest.spyOn(component.heroSubmit, 'emit');

      const mockHero = {
        name: 'Hero Test',
        powerstats: {
          combat: 50,
          durability: 50,
          intelligence: 50,
          power: 50,
          speed: 50,
          strength: 50,
        },
        firstAppearance: 'First Appearance Test',
        publisher: 'DC',
        biography: 'Biography Test',
      };

      component.heroForm.patchValue(mockHero);

      component.onSubmit();

      expect(component.heroSubmit.emit).toHaveBeenCalledWith(mockHero);
    });

    it('should emit heroUpdate when editing existing hero', () => {
      jest.spyOn(component.heroUpdate, 'emit');

      let mockHero: any = {
        name: 'Hero Test',
        powerstats: {
          combat: 50,
          durability: 50,
          intelligence: 50,
          power: 50,
          speed: 50,
          strength: 50,
        },
        firstAppearance: 'First Appearance Test',
        publisher: 'DC',
        biography: 'Biography Test',
      };
      fixture.componentRef.setInput('hero', mockHero);

      const updatedmockHero = {
        ...mockHero,
        name: 'Hero updated',
      };
      component.heroForm.patchValue(updatedmockHero);

      component.onSubmit();

      expect(component.heroUpdate.emit).toHaveBeenCalledWith(
        expect.objectContaining({
          id: mockHero.id,
          ...updatedmockHero,
        })
      );
    });
  });
});
