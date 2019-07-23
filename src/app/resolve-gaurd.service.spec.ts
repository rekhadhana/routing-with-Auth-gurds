import { TestBed } from '@angular/core/testing';

import { ResolveGaurdService } from './resolve-gaurd.service';

describe('ResolveGaurdService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ResolveGaurdService = TestBed.get(ResolveGaurdService);
    expect(service).toBeTruthy();
  });
});
