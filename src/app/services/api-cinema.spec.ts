import { TestBed } from '@angular/core/testing';

import { ApiCinema } from './api-cinema';

describe('ApiCinema', () => {
  let service: ApiCinema;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiCinema);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
