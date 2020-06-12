import { TestBed } from '@angular/core/testing';

import { ConsultingCategoryService } from './consulting-category.service';

describe('ConsultingCategoryService', () => {
  let service: ConsultingCategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsultingCategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
