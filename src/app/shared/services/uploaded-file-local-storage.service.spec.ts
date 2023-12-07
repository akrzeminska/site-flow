import { TestBed } from '@angular/core/testing';

import { UploadedFileLocalStorageService } from './uploaded-file-local-storage.service';

describe('UploadedFileLocalStorageService', () => {
  let service: UploadedFileLocalStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UploadedFileLocalStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
