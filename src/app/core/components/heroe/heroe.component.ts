import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-heroe',
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './heroe.component.html',
  styleUrl: './heroe.component.scss',
})
export class HeroeComponent {}
