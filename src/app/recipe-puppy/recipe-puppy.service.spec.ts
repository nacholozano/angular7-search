import { TestBed } from '@angular/core/testing';

import { RecipePuppyService } from './recipe-puppy.service';

describe('RecipePuppyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RecipePuppyService = TestBed.get(RecipePuppyService);
    expect(service).toBeTruthy();
  });
});
