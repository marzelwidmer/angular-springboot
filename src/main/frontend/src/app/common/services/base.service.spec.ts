import { Http, Response } from '@angular/http';

import { BaseService } from './base.service';

describe('BaseService', () => {
	let baseService: BaseService;
	const httpMock = {} as Http;
	class ImplBaseService extends BaseService {
		subUrl = 'testUrl';
	}

	beforeEach(() => {
		baseService = new ImplBaseService(httpMock);
	});

	it('should be created', () => {
		expect(baseService).toBeTruthy();
	});

	it('should call extractData', () => {
		const overhead = { type: null, url: null, status: 200, headers: null, merge: null };
		const res = {
			body: { firstName: 'WhoFranz', name: 'zweiterName' }, ...overhead
		};

		const json = baseService.extractData(new Response(res));
		expect(json).toEqual({ firstName: 'WhoFranz', name: 'zweiterName' });
	});

	it('should call getOptions', () => {
		const requestOptions = baseService.getOptions();
		expect(requestOptions.headers.has('Content-Type')).toBeTruthy();
		expect(requestOptions.headers.get('Content-Type')).toBe('application/hal+json');
	});

	it('should call handleError', () => {
		const error = baseService.handleError({ message: 'error?' });
		error.subscribe(success => expect(true).toBeFalsy(), err => expect(true).toBeTruthy());
	});
});
