import { CONSTANTS } from '../constants';
import { Observable } from 'rxjs/Observable';
import { Response, Headers, Http, RequestOptions, RequestOptionsArgs } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

export abstract class BaseService {

	baseUrl: string = CONSTANTS.API_URL;
	abstract subUrl: string;

	options: RequestOptionsArgs = this.getOptions();

	constructor(protected http: Http) {
	}

	extractData(res: Response): any {
		const body = res.json();
		return body || {};
	}

	getOptions(): RequestOptionsArgs {
		const headers = new Headers({ 'Content-Type': 'application/hal+json' });
		return new RequestOptions({ headers: headers });
	}

	handleError(error: any): Observable<any> {
		const errMsg = (error.message) ? error.message :
			error.status ? `${error.status} - ${error.statusText}` : 'Server error';
		console.error(errMsg);
		return Observable.throw(errMsg);
	}

	getCall<T extends RestResource>(resource: T): Observable<T> {
		const url = resource._links.self.href;
		return this.http.get(url, this.options)
			.map(this.extractData)
			.catch(this.handleError);
	}

	postCall<T extends RestResource>(resource: T): Observable<T> {
		const body = JSON.stringify(resource);
		const url = resource._links.self.href;
		return this.http.post(url, body, this.options)
			.map(this.extractData)
			.catch(this.handleError);
	}
}

export interface RestResource {
	_links: { self: { href: string } };
}
