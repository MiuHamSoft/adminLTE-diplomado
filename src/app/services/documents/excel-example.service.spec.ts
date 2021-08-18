import { TestBed } from '@angular/core/testing';

import { ExcelExampleService } from './excel-example.service';

describe('ExcelExampleService', () => {
  let service: ExcelExampleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExcelExampleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
