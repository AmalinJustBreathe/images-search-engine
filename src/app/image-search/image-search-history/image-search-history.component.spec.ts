import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageSearchHistoryComponent } from './image-search-history.component';

describe('ImageSearchHistoryComponent', () => {
  let component: ImageSearchHistoryComponent;
  let fixture: ComponentFixture<ImageSearchHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageSearchHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageSearchHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
