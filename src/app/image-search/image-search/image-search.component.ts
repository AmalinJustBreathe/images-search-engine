import { Component } from '@angular/core';
import { ImageSearchService } from '../services/image-search.service';
import { flickrService } from '../services/flickr.service';
import { PixabayService } from '../services/pixabay.service';

@Component({
  selector: 'image-search',
  template: ` 
            <div class='image-search-wrap'>
              <image-search-header (searchTermInput)='service.onsearchTermInput($event)' ></image-search-header>
              <div class='main'>               
                  <image-search-gallery [searchTerm]='service.currentSearch.searchTerm' 
                                        [imagesUrls]='service.currentSearch.imagesUrls' 
                                        [showZeroResults]='service.zeroResults'
                                        (removeImage)='service.onremoveImage($event)' >
                  </image-search-gallery>                  
                  <image-search-history *ngIf='service.currentSearch.searchTerm'
                                        [searchHistory]='service.searchHistory' 
                                        (historyClicked)='service.onhistoryClicked($event)' 
                                        (clearHistory)='service.onclearHistory($event)' >
                  </image-search-history>
              </div>
          </div>`,
  styleUrls: ['image-search.component.scss'],
  providers: [ImageSearchService, flickrService, PixabayService]
})
export class ImageSearchComponent {

  private service: ImageSearchService;

  constructor(service: ImageSearchService) {
    this.service = service;
  }
}
