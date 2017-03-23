import { Injectable } from '@angular/core';
import { Jsonp, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import { imagesProviderService } from './images-provider.service';

@Injectable()
export class flickrService extends imagesProviderService {

    private jsonp: Jsonp;

    constructor(jsonp: Jsonp) {
        super(jsonp);
        this.apiUrl =  'http://api.flickr.com/services/feeds/photos_public.gne';     
    }

    public getImages(searchTerm: string): Observable<any> {
        let requestData = {
            tags: searchTerm,
            tagmode: 'any',
            format: 'json',
            jsoncallback: 'JSONP_CALLBACK' 
        };
        return super.getImages(searchTerm, requestData);
    }

    protected extractData(res: Response): Observable<any> {
        let body = res.json();
        return body.items || {};
    }

}
