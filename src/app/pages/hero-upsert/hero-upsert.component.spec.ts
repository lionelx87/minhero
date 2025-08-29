import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroUpsertComponent } from './hero-upsert.component';

describe('HeroUpsertComponent', () => {
  let component: HeroUpsertComponent;
  let fixture: ComponentFixture<HeroUpsertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroUpsertComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroUpsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
