import { TestBed } from '@angular/core/testing';

import { SupplierClusteringService } from './supplier-clustering.service';

describe('SupplierClusteringService', () => {
  let service: SupplierClusteringService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SupplierClusteringService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
