import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Observable } from 'rxjs/Observable';
import { Partner, Member } from '../entities/Customer';
import { BaseService } from './base.service';
import 'rxjs/add/operator/filter';

@Injectable()
export class PartnerService extends BaseService {
	subUrl = '/partner';

	public $partner;

	constructor(http: Http) {
		super(http);
	}

	get(): Observable<Partner> {
		const customer = { _links: { self: { href: `${this.baseUrl}${this.subUrl}` } } };
		if (!this.$partner) {
			this.$partner = new ReplaySubject(1);
			super.getCall<Partner>(customer as Partner)
				.subscribe(cu => this.$partner.next(cu));
		}
		return this.$partner;
	}

	getOne(index: number): Observable<Member> {
		return this.get()
			.map(partner => partner.customers[index]);
	}

	/*post(customer: Customer): Observable<Customer> {
	 let $subject = new Subject();
	 customer = { _links: { self: { href: `${this.baseUrl}${this.subUrl}` } }, ...customer };
	 super.post<Customer>(customer)
	 .subscribe(cu => {
	 $subject.next(cu);
	 this.$partner.next(cu);
	 });
	 return $subject;
	 }*/
}
