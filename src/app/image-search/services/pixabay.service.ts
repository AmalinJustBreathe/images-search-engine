import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import { imagesProviderService } from './images-provider.service';

@Injectable()
export class PixabayService extends imagesProviderService {   

    private key: string;
    private http: Http;

    constructor(http: Http) {
        super(http);
        this.apiUrl = 'http://pixabay.com/api/';
        this.key = '4872698-99376aa47a4b57875897fbd83';
    }

    public getImages(searchTerm: string): Observable<any> {
        let requestData = {
            key: this.key,
            q: searchTerm,
            imagetype: 'photo'
        };
        return super.getImages(searchTerm, requestData)
    }

    protected extractData(res: Response): Observable<any> {        
        let body = res.json();
        return body.hits || {};
    }

}
