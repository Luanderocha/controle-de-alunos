import { TestBed } from '@angular/core/testing';

import { FmAlunosService } from './fm-alunos.service';

describe('FmAlunosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FmAlunosService = TestBed.get(FmAlunosService);
    expect(service).toBeTruthy();
  });
});
