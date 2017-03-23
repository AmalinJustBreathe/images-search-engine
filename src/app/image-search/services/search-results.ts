export class SearchResults {

    static wantedSearchCount: number;
    dateOfSearch: Date;
    searchTerm: string;
    imagesUrls: string[];
    counts: number[];

    constructor(searchTerm: string) {
        //this is the number of images provider we use in the search, as listed in the "enum ImageService"
        SearchResults.wantedSearchCount = Object.keys(ImageService).length / 2;
        this.dateOfSearch = new Date();
        this.searchTerm = searchTerm;
        this.imagesUrls = [];
        this.counts = [];
        // -1 is a sign that the search was not done yet  
        for (let i = 0; i < SearchResults.wantedSearchCount; i++) {
            this.counts.push(-1);
        }
    }

    update(imagesUrls: string[], service: ImageService, count: number) {
        if (imagesUrls) {
            this.imagesUrls = this.imagesUrls.concat(imagesUrls);
        }
        this.counts[service] = count;
    }

    //check if all provider have been searched    
    isComplete() {
        const actualSearchCount = Object.keys(this.counts).filter(key => this.counts[key] >= 0).length;
        return actualSearchCount == SearchResults.wantedSearchCount;
    }
}


export enum ImageService {
    flickr,
    pixabay
}
