import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal, Signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import {
  HeroesListComponent,
  PaginationComponent,
  SearchBoxComponent,
} from '@core/components';
import { HeroService } from '@core/services';
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
  private readonly heroService = inject(HeroService);

  isMobile: Signal<boolean> = this.breakpointsService.isMobile;
  searchTerm = signal<string>('');

  filteredHeroes = computed(() => {
    const term = this.searchTerm().trim().toLowerCase();
    return this.heroService.searchHeroes(term);
  });

  onSearchChange(term: string) {
    this.searchTerm.set(term);
  }

  goCreateHero() {
    this.router.navigate(['/heroes/new']);
  }
}
