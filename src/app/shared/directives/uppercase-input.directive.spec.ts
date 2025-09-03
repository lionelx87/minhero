import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { UppercaseInputDirective } from './uppercase-input.directive';
import { Component, DebugElement } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

@Component({
  template: `
    <input id="simpleInput" appUppercaseInput type="text" #simpleInput />
    <input
      appUppercaseInput
      [formControl]="testControl"
      type="text"
      #reactiveInput
    />
  `,
  standalone: true,
  imports: [UppercaseInputDirective, ReactiveFormsModule],
})
class TestHostComponent {
  testControl = new FormControl('initial value');
}

describe('UppercaseInputDirective', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;
  let simpleInput: DebugElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [TestHostComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    simpleInput = fixture.debugElement.query(By.css('#simpleInput'));
    fixture.detectChanges();
  });

  it('should create the test component', () => {
    expect(component).toBeTruthy();
  });

  it('should convert input value to uppercase on input event', () => {
    const inputElement = simpleInput.nativeElement as HTMLInputElement;
    inputElement.value = 'hello world';
    inputElement.dispatchEvent(new Event('input'));

    expect(inputElement.value).toBe('HELLO WORLD');
  });
});
