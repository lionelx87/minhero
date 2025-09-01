import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroConfirmDeleteComponent } from './hero-confirm-delete.component';

describe('HeroConfirmDeleteComponent', () => {
  let component: HeroConfirmDeleteComponent;
  let fixture: ComponentFixture<HeroConfirmDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroConfirmDeleteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroConfirmDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
