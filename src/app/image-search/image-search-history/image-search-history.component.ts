import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SearchResults, ImageService } from '../services/search-results';


@Component({
    selector: 'image-search-history',
    templateUrl: 'image-search-history.component.html',
    styleUrls: ['image-search-history.component.scss']
})
export class ImageSearchHistoryComponent {

    @Input()
    public searchHistory: SearchResults[] = [];
    @Output()
    public historyClicked: EventEmitter<SearchResults> = new EventEmitter<SearchResults>();
    @Output()
    public clearHistory: EventEmitter<SearchResults> = new EventEmitter<SearchResults>();
    private showHistory: boolean;

    private flickrId = ImageService.flickr;
    private pixabayId = ImageService.pixabay;

    constructor() {
        this.showHistory = true;
    }
}
