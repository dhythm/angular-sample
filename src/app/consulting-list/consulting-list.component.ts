import { Component, OnInit } from '@angular/core';
import {
  Category,
  ConsultingCategoryService,
} from '../consulting-category.service';

@Component({
  selector: 'app-consulting-list',
  templateUrl: './consulting-list.component.html',
  styleUrls: ['./consulting-list.component.css'],
})
export class ConsultingListComponent implements OnInit {
  items: Category[];

  constructor(private consultingCategoryService: ConsultingCategoryService) {}

  ngOnInit(): void {
    this.items = this.consultingCategoryService.getCategories();
  }

  getLineBreak(string): string {
    return string.split('\n');
  }
}
