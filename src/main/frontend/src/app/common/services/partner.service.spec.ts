import { TestBed, inject } from '@angular/core/testing';

import { PartnerService } from './partner.service';
import { BaseRequestOptions, Http, Response, ResponseOptions } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

describe('PartnerService', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				{
					provide: Http, useFactory: (backend, options) => {
					return new Http(backend, options);
				},
					deps: [MockBackend, BaseRequestOptions]
				},
				MockBackend,
				BaseRequestOptions,
				PartnerService
			]
		});
	});

	it('should be created', inject([PartnerService], (service: PartnerService) => {
		expect(service).toBeTruthy();
	}));


	it('should get call', inject([PartnerService, MockBackend], (service: PartnerService, backend: MockBackend) => {
		backend.connections.subscribe((conn: MockConnection) => {
			const options: ResponseOptions = new ResponseOptions({
				body: JSON.stringify({
					customers: [
						{
							person: {
								firstName: 'Franz',
								lastName: 'Ose'
							}
						}
					]
				})
			});
			conn.mockRespond(new Response(options));
		});
		service.get().subscribe(res => {
			expect(res.customers[0].person.firstName).toBe('Franz');
		});
	}));

	it('should get one person', inject([PartnerService, MockBackend], (service: PartnerService, backend: MockBackend) => {
		backend.connections.subscribe((conn: MockConnection) => {
			const options: ResponseOptions = new ResponseOptions({
				body: JSON.stringify({
					customers: [
						{
							person: {
								firstName: 'firstName1',
								lastName: 'lastName1'
							}
						},
						{
							person: {
								firstName: 'firstName2',
								lastName: 'lastName2'
							},
						}
					]
				})
			});
			conn.mockRespond(new Response(options));
		});
		service.getOne(0).subscribe(res => {
			expect(res.person.firstName).toBe('firstName1');
		});
		service.getOne(1).subscribe(res => {
			expect(res.person.firstName).toBe('firstName2');
		});
	}));

});
