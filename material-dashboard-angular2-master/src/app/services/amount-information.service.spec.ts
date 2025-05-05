import { TestBed } from '@angular/core/testing';

import { AmountInformationService } from './amount-information.service';

describe('AmountInformationService', () => {
  let service: AmountInformationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AmountInformationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
