import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageSearchGalleryComponent } from './image-search-gallery.component';

describe('ImageSearchGalleryComponent', () => {
  let component: ImageSearchGalleryComponent;
  let fixture: ComponentFixture<ImageSearchGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageSearchGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageSearchGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
