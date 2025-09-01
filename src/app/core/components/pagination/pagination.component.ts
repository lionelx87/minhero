import { Component, input, output } from '@angular/core';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss',
  imports: [MatPaginatorModule],
})
export class PaginationComponent {
  pageSizeOptions = [3, 4, 5];
  total = input.required<number>();
  pageIndex = input.required<number>();
  pageSize = input.required<number>();
  onPagination = output<PageEvent>();
}
