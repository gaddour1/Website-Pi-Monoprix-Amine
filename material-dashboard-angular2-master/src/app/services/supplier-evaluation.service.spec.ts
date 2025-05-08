import { TestBed } from '@angular/core/testing';

import { SupplierEvaluationService } from './supplier-evaluation.service';

describe('SupplierEvaluationService', () => {
  let service: SupplierEvaluationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SupplierEvaluationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
