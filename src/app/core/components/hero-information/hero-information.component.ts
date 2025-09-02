import { Component, input } from '@angular/core';
import { Hero } from '@core/models';

@Component({
  selector: 'app-hero-information',
  imports: [],
  templateUrl: './hero-information.component.html',
  styleUrl: './hero-information.component.scss',
})
export class HeroInformationComponent {
  hero = input.required<Hero>();
}
