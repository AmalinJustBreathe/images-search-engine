import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SearchResults } from '../services/search-results';

@Component({
  selector: 'image-search-gallery',
  template: `  
  <div class="gallery">
      <h4 *ngIf='searchTerm' >search results for: {{ searchTerm }} </h4>
      <div class='imgsWrap'>    
        <div class='imgWrap' *ngFor='let url of imagesUrls'> 
          <a class='imgRemover' alt='remove' (click)='removeImage.emit(url)' >X</a>                   
          <img class='img' src={{url}} />
        </div>
      </div>
      <div class='noResults' *ngIf='showZeroResults'>{{zeroImagesFoundText}}</div>
  <div>
  `,
  styleUrls: ['image-search-gallery.component.scss'], 
})
export class ImageSearchGalleryComponent implements OnInit {
  @Input()
  public imagesUrls: string[];
  @Input()
  public searchTerm: string;
  @Input()
  public showZeroResults: boolean;
  @Output()
  public removeImage: EventEmitter<SearchResults> = new EventEmitter<SearchResults>();  

  private zeroImagesFoundText: string;

  ngOnInit() {
    this.zeroImagesFoundText = 'No Images Were Found, Try another Search Term';
  }   

}
