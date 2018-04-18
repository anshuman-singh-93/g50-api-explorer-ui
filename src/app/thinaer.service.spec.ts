import { TestBed, inject } from '@angular/core/testing';

import { ThinaerService } from './thinaer.service';

describe('ThinaerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ThinaerService]
    });
  });

  it('should be created', inject([ThinaerService], (service: ThinaerService) => {
    expect(service).toBeTruthy();
  }));
});
