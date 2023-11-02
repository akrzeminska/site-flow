import { TestBed } from '@angular/core/testing';

import { ConstructionsService } from './constructions.service';

describe('ConstructionsService', () => {
  let service: ConstructionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConstructionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
