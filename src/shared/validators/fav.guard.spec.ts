import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { favGuard } from './fav.guard';

describe('favGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => favGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
