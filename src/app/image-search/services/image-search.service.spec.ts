import { TestBed, inject } from '@angular/core/testing';

import { ImageSearchService } from './image-search.service';

describe('ImageSearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ImageSearchService]
    });
  });

  it('should ...', inject([ImageSearchService], (service: ImageSearchService) => {
    expect(service).toBeTruthy();
  }));
});
