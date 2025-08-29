import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {
  HeroesListComponent,
  PaginationComponent,
  SearchBoxComponent,
} from '@core/components';

@Component({
  selector: 'app-home',
  imports: [
    SearchBoxComponent,
    HeroesListComponent,
    PaginationComponent,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
