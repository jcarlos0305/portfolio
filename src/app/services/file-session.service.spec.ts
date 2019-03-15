import { TestBed } from '@angular/core/testing';

import { FileSessionService } from './file-session.service';

describe('FileSessionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FileSessionService = TestBed.get(FileSessionService);
    expect(service).toBeTruthy();
  });
});
