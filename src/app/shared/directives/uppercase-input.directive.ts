import {
  Directive,
  ElementRef,
  HostListener,
  inject,
  Optional,
} from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appUppercaseInput]',
  standalone: true,
})
export class UppercaseInputDirective {
  constructor() {}

  private ngControl = inject(NgControl, { optional: true });
  private el = inject(ElementRef);

  @HostListener('input', ['$event'])
  onInput(event: Event) {
    const input = event.target as HTMLInputElement;
    input.value = input.value.toUpperCase();

    if (this.ngControl?.control) {
      this.ngControl.control.setValue(input.value, { emitEvent: false });
    }
  }

  ngOnInit(): void {
    const input = this.el.nativeElement as HTMLInputElement;
    if (input.value) {
      input.value = input.value.toUpperCase();
    }
  }
}
