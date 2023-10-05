import { TestBed } from '@angular/core/testing';

import { CestasService } from './cestas.service';

describe('CestasService', () => {
  let service: CestasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CestasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
