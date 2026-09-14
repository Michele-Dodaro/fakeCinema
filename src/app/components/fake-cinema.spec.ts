import { TestBed } from '@angular/core/testing';

import { FakeCinema } from './fake-cinema';

describe('FakeCinema', () => {
  let service: FakeCinema;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FakeCinema);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
