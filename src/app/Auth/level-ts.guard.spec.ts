import { TestBed } from '@angular/core/testing';

import { LevelTSGuard } from './level-ts.guard';

describe('LevelTSGuard', () => {
  let guard: LevelTSGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LevelTSGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
