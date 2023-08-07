import { TestBed } from '@angular/core/testing';

import { GithupService } from './githup.service';

describe('GithupService', () => {
  let service: GithupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GithupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
