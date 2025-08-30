import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-hero-form',
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatSliderModule,
  ],
  templateUrl: './hero-form.component.html',
  styleUrl: './hero-form.component.scss',
})
export class HeroFormComponent {
  selectedValue: string = 'dc';
  value = 0;
  formatLabel(value: number): string {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return `${value}`;
  }

  foods: Food[] = [
    { value: 'dc', viewValue: 'DC' },
    { value: 'marvel', viewValue: 'Marvel' },
    { value: 'giant-man', viewValue: 'Giant-Man' },
    { value: 'oracle', viewValue: 'Oracle' },
  ];
}
