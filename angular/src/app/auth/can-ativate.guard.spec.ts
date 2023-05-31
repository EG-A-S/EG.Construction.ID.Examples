import { TestBed } from '@angular/core/testing';
import { CanActivateGuard } from './can-ativate.guard';

describe('AuthGuard', () => {
  let guard: CanActivateGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanActivateGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
