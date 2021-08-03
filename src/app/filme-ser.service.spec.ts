import { TestBed } from '@angular/core/testing';

import { FilmeSerService } from './filme-ser.service';

describe('FilmeSerService', () => {
  let service: FilmeSerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilmeSerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
