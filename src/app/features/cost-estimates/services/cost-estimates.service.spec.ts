import { TestBed } from '@angular/core/testing';

import { CostEstimatesService } from './cost-estimates.service';

describe('CostEstimatesService', () => {
  let service: CostEstimatesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CostEstimatesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
