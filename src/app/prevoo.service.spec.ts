import { TestBed, inject } from '@angular/core/testing';

import { PrevooService } from './prevoo.service';

describe('PrevooService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PrevooService]
    });
  });

  it('should be created', inject([PrevooService], (service: PrevooService) => {
    expect(service).toBeTruthy();
  }));
});
