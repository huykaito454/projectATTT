import { TestBed } from '@angular/core/testing';

import { LevelSGuard } from './level-s.guard';

describe('LevelSGuard', () => {
  let guard: LevelSGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LevelSGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
