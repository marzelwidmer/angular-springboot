import { inject, TestBed } from '@angular/core/testing';
import { WhoAmIService } from './who-am-i.service';
import { BaseRequestOptions, Response, Http, ResponseOptions } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';


describe('WhoAmIService', () => {
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
				BaseRequestOptions, WhoAmIService
			]
		});
	});

	it('should be created', inject([WhoAmIService], (service: WhoAmIService) => {
		expect(service).toBeTruthy();
	}));

	it('should get call', inject([WhoAmIService, MockBackend], (service: WhoAmIService, backend: MockBackend) => {
		backend.connections.subscribe((conn: MockConnection) => {
			const options: ResponseOptions = new ResponseOptions({ body: JSON.stringify({ name: 'Franz' }) });
			conn.mockRespond(new Response(options));
		});
		service.get().subscribe(res => {
			expect(res.name).toEqual('Franz');
		});
	}));
});
