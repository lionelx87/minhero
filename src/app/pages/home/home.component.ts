import { CommonModule } from '@angular/common';
import { Component, inject, Signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { PageEvent } from '@angular/material/paginator';
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
  filteredHeroes = this.heroService.filteredHeroes;
  pagedHeroes = this.heroService.pagedHeroes;
  pageIndex = this.heroService.pageIndex;
  pageSize = this.heroService.pageSize;
  total = this.heroService.total;

  onPageChange(index: number) {
    this.heroService.setPage(index);
  }
  onPageSizeChange(size: number) {
    this.heroService.setPageSize(size);
  }
  onSearch(term: string) {
    this.heroService.setSearchTerm(term);
  }

  onPagination(event: PageEvent) {
    const { pageIndex, pageSize } = event;
    this.onPageSizeChange(pageSize);
    this.onPageChange(pageIndex);
  }

  onDeleteHero(id: number) {
    this.heroService.deleteHero(id);
  }

  goCreateHero() {
    this.router.navigate(['/heroes/new']);
  }
}
