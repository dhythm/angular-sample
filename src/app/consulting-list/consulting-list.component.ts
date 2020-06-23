import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import {
  Category,
  ConsultingCategoryService,
} from '../consulting-category.service';

@Component({
  selector: 'app-consulting-list',
  templateUrl: './consulting-list.component.html',
  styleUrls: ['./consulting-list.component.css'],
})
export class ConsultingListComponent implements OnInit, OnDestroy {
  items: Category[];

  constructor(private consultingCategoryService: ConsultingCategoryService) {}

  ngOnInit(): void {
    this.items = this.consultingCategoryService.getCategories();
  }

  ngOnDestroy() {
    const performanceEntries = performance.getEntriesByType('navigation');
    console.log('ngOnDestroy: ' + performanceEntries[0]['type']);
  }

  @HostListener('window:beforeunload', ['$event'])
  beforeUnloadHandler(event) {
    // Before moving to another page
    event.returnValue = true;
    const performanceEntries = performance.getEntriesByType('navigation');
    console.log('beforeunload: ' + performanceEntries[0]['type']);
  }

  getLineBreak(string): string {
    return string.split('\n');
  }
}
