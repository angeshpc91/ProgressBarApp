import { TestBed } from '@angular/core/testing';

import { ProgressHttpService } from './progress-http.service';

describe('ProgressHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProgressHttpService = TestBed.get(ProgressHttpService);
    expect(service).toBeTruthy();
  });
});
