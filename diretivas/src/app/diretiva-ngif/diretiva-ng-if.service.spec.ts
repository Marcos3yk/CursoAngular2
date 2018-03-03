import { TestBed, inject } from '@angular/core/testing';

import { DiretivaNgIfService } from './diretiva-ng-if.service';

describe('DiretivaNgIfService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DiretivaNgIfService]
    });
  });

  it('should be created', inject([DiretivaNgIfService], (service: DiretivaNgIfService) => {
    expect(service).toBeTruthy();
  }));
});
