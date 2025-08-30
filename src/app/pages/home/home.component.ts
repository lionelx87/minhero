import { CommonModule } from '@angular/common';
import { Component, inject, Signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import {
  HeroesListComponent,
  PaginationComponent,
  SearchBoxComponent,
} from '@core/components';
import { BreakpointsService } from '@shared/services';

@Component({
  selector: 'app-home',
  imports: [
    CommonModule,
    SearchBoxComponent,
    HeroesListComponent,
    PaginationComponent,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  private readonly router = inject(Router);
  private readonly breakpointsService = inject(BreakpointsService);

  isMobile: Signal<boolean> = this.breakpointsService.isMobile;

  goCreateHero() {
    this.router.navigate(['/heroes/new']);
  }
}
