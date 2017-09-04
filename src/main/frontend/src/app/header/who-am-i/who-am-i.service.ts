import { Injectable } from '@angular/core';
import { BaseService } from '../../common/services/base.service';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Whoami } from '../../common/entities/Whoami';
import { ReplaySubject } from 'rxjs/ReplaySubject';

@Injectable()
export class WhoAmIService extends BaseService {
	subUrl = '/whoami';

	public $whoami;

	constructor(http: Http) {
		super(http);
	}

	get(): Observable<Whoami> {
		const whoami = { _links: { self: { href: `${this.baseUrl}${this.subUrl}` } } };
		if (!this.$whoami) {
			this.$whoami = new ReplaySubject(1);
			super.getCall<Whoami>(whoami as Whoami)
				.subscribe(cu => this.$whoami.next(cu));
		}
		return this.$whoami;
	}
}
