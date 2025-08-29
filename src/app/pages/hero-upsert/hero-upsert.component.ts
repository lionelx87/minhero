import { Component } from '@angular/core';
import { HeroFormComponent } from '@core/components';

@Component({
  selector: 'app-hero-upsert',
  imports: [HeroFormComponent],
  templateUrl: './hero-upsert.component.html',
  styleUrl: './hero-upsert.component.scss',
})
export class HeroUpsertComponent {}
