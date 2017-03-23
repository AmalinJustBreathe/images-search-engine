import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImageSearchHeaderComponent } from './image-search-header/image-search-header.component';
import { ImageSearchComponent } from './image-search/image-search.component';
import { ImageSearchGalleryComponent } from './image-search-gallery/image-search-gallery.component';
import { ImageSearchHistoryComponent } from './image-search-history/image-search-history.component';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ImageSearchHeaderComponent,
    ImageSearchComponent,
    ImageSearchGalleryComponent,
    ImageSearchHistoryComponent
  ],
  exports: [ImageSearchComponent]
})
export class ImageSearchModule { }
