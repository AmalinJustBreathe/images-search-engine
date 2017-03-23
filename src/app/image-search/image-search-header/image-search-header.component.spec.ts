import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageSearchHeaderComponent } from './image-search-header.component';

describe('ImageSearchHeaderComponent', () => {
  let component: ImageSearchHeaderComponent;
  let fixture: ComponentFixture<ImageSearchHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageSearchHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageSearchHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
