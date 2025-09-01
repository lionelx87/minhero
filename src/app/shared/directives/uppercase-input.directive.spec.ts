import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { UppercaseInputDirective } from './uppercase-input.directive';

describe('UppercaseInputDirective', () => {
  let directive: UppercaseInputDirective;
  let fixture: ComponentFixture<UppercaseInputDirective>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [UppercaseInputDirective],
    });
  }));

  it('should create an instance', () => {
    // const fixture = TestBed.createComponent(UppercaseInputDirective);
    // expect(fixture).toBeTruthy();
  });
});
