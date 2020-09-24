import { TestBed } from '@angular/core/testing';

import { CalDataService } from './cal-data.service';

describe('CalDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CalDataService = TestBed.get(CalDataService);
    expect(service).toBeTruthy();
  });
});
