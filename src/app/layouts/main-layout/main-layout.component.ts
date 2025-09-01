import { Component } from '@angular/core';
import { NavigationComponent } from '@layouts/components';

@Component({
  selector: 'app-main-layout',
  imports: [NavigationComponent],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss',
})
export class MainLayoutComponent {}
