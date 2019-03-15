import { TestBed } from '@angular/core/testing';

import { GapiSessionService } from './gapi-session.service';

describe('GapiSessionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GapiSessionService = TestBed.get(GapiSessionService);
    expect(service).toBeTruthy();
  });
});
