import { Injectable, Input, Output, EventEmitter } from '@angular/core';

import { flickrService } from '../services/flickr.service';
import { PixabayService } from '../services/pixabay.service';
import { SearchResults, ImageService } from '../services/search-results';

@Injectable()
export class ImageSearchService {

  @Output()
  private currentSearch: SearchResults;
  @Output()
  private searchHistory: SearchResults[];
  @Output()
  private zeroResults: boolean;

  private flickrService: flickrService;
  private pixabayService: PixabayService;

  constructor(flickrService: flickrService, pixabayService: PixabayService) {

    this.flickrService = flickrService;
    this.pixabayService = pixabayService;

    this.currentSearch = new SearchResults('');
    this.searchHistory = [];
  }

// image-search-header  
  private onsearchTermInput(searchTerm: string): void {
    if (searchTerm === this.currentSearch.searchTerm) {
      return;
    }
    this.currentSearch = new SearchResults(searchTerm);
    this.clearGallery();
    this.getImages(searchTerm);
  }

  private clearGallery(): void {
    this.currentSearch.imagesUrls = [];
  }

  private getImages(searchTerm: string): void {
    this.getPixabayImages(searchTerm);
    this.getflickrImages(searchTerm);
  }

//image-search-history  
  private onhistoryClicked(search: SearchResults): void {
    this.currentSearch = search;
    this.zeroResults = search.imagesUrls.length === 0 ? true : false;
  }

  private onclearHistory(): void {
    this.searchHistory = [];
  }

//image-search-gallery  
  private onremoveImage(url): void{
    this.currentSearch.imagesUrls = this.currentSearch.imagesUrls.filter((u) => u !== url);
    let serviceId = url.indexOf('flickr') > -1 ? ImageService.flickr : ImageService.pixabay;
    this.currentSearch.counts[serviceId] -= 1;
}

  private getflickrImages(searchTerm: string): void {
    this.flickrService.getImages(searchTerm)
      .subscribe(
      items => {
        let imgUrls = items.map(item => item.media.m);
        this.saveResults(imgUrls, ImageService.flickr, items.length);
      },
      error => {
        this.saveResults(null, ImageService.flickr, 0);
        //do something with error
      });
  }

  private getPixabayImages(searchTerm: string): void {
    this.pixabayService.getImages(searchTerm)
      .subscribe(
      hits => {
        let imgUrls = hits.map(hit => hit.previewURL);
        this.saveResults(imgUrls, ImageService.pixabay, hits.length);
      },
      error => {
        this.saveResults(null, ImageService.pixabay, 0);
        //do something with error
      });
  }

  private saveResults(imgUrls: string[], service: ImageService, count: number): void {
    this.currentSearch.update(imgUrls, service, count);
    if (this.currentSearch.isComplete()) {
      this.searchHistory.push(this.currentSearch);
      this.zeroResults = this.currentSearch.imagesUrls.length === 0 ? true : false;
    }
  }

}
