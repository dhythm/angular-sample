import { Injectable } from '@angular/core';

export interface Category {
  id: string;
  title: string;
  content: string;
}

@Injectable({
  providedIn: 'root',
})
export class ConsultingCategoryService {
  constructor() {}

  getCategories(): Category[] {
    return [
      {
        id: 'household',
        title: 'Household',
        content: 'Optimize expenses\nReview insurance\nDaily savings',
      },
      {
        id: 'old-age',
        title: 'Old age',
        content: 'Pension calculation',
      },
      {
        id: 'properties',
        title: 'Properties',
        content: 'Compare housing loans',
      },
      {
        id: 'education',
        title: 'Education',
        content: 'Content',
      },
      {
        id: 'inheritance',
        title: 'Inheritance',
        content: 'Content',
      },
      {
        id: 'investment',
        title: 'Investment',
        content: 'Content',
      },
      {
        id: 'others',
        title: 'Others',
        content: 'Content',
      },
    ];
  }
}
