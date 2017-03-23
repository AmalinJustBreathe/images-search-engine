import { Http, Jsonp, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

export abstract class imagesProviderService {
    
    protected protocolService: Http | Jsonp;
    protected apiUrl: string;
    protected searchTerm: string;

    constructor(protocolService: Http | Jsonp) {
        this.protocolService = protocolService;
    }

    protected getImages(searchTerm: string, requestData: {}): Observable<any> {
        const queryString = this.formQueryString(requestData);
        let url = this.apiUrl + queryString;
        return this.protocolService.get(url)
            .map(this.extractData)
            .catch(this.handleError);
    }

    private formQueryString(data: {}): string {
        let queryString: string = '?';
        Object.keys(data).forEach(function (key) {
            queryString += key + '=' + data[key] + '&';
        });
        return queryString
    }

    protected abstract extractData(res: Response): Observable<any>;

    private handleError(error: Response | any) {
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }

}