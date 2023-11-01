import { TestBed } from '@angular/core/testing';

import { LocalStorageSeederService } from './local-storage-seeder.service';

describe('LocalStorageSeederService', () => {
  let service: LocalStorageSeederService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalStorageSeederService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
