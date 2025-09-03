import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardHeroComponent } from './card-hero.component';
import { Hero } from '@core/models';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { By } from '@angular/platform-browser';
import { HeroConfirmDeleteComponent } from '../hero-confirm-delete/hero-confirm-delete.component';

describe('CardHeroComponent', () => {
  let component: CardHeroComponent;
  let fixture: ComponentFixture<CardHeroComponent>;
  let mockRouter: jest.Mocked<Router>;
  let mockDialog: jest.Mocked<MatDialog>;

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
    mockRouter = {
      navigate: jest.fn(),
    } as any;

    const mockDialogRef = {
      afterClosed: jest.fn().mockReturnValue({
        pipe: jest.fn().mockReturnValue({
          subscribe: jest.fn(),
        }),
      }),
    };

    mockDialog = {
      open: jest.fn().mockReturnValue(mockDialogRef),
    } as any;

    await TestBed.configureTestingModule({
      imports: [CardHeroComponent],
      providers: [
        { provide: Router, useValue: mockRouter },
        { provide: MatDialog, useValue: mockDialog },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CardHeroComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('hero', mockHero);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('navigation', () => {
    it('should navigate to edit page when goEditHero is called', () => {
      component.goEditHero();
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/heroes/1/edit']);
    });
    it('should navigate to detail page when goHeroDetail is called', () => {
      component.goHeroDetail();
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/heroes/1']);
    });
  });

  describe('delete', () => {
    it('should open dialog when delete button is clicked', () => {
      const buttons = fixture.debugElement.queryAll(By.css('button'));
      const deleteBtn = buttons[1];
      deleteBtn.triggerEventHandler('click', null);
      expect(mockDialog.open).toHaveBeenCalledWith(HeroConfirmDeleteComponent);
    });

    it('should emit onDeleteConfirm when user confirms deletion', () => {
      jest.spyOn(component.onDeleteConfirm, 'emit');

      const mockDialogRef = {
        afterClosed: jest.fn().mockReturnValue({
          pipe: jest.fn().mockReturnValue({
            subscribe: jest.fn().mockImplementation((callback) => callback()),
          }),
        }),
      } as any;

      mockDialog.open.mockReturnValue(mockDialogRef);

      component.openDialog();

      expect(component.onDeleteConfirm.emit).toHaveBeenCalledWith(true);
    });
  });
});
