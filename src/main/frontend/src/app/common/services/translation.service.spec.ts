import { inject, TestBed } from '@angular/core/testing';
import { TranslationService } from './translation.service';
import { BaseRequestOptions, Http } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { Observable } from 'rxjs/Observable';

export class TranslateCustomLoader implements TranslateLoader {
	getTranslation(lang: string): Observable<any> {
		const en = { lang: 'en' };
		return Observable.of(en);
	}
}


describe('TranslateService', () => {
	let translationService: TranslationService;
	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [
				TranslateModule.forRoot({
					loader: {
						provide: TranslateLoader,
						useClass: TranslateCustomLoader,
						deps: [Http]
					}
				}),
			],
			providers: [
				{
					provide: Http, useFactory: (backend, options) => {
					return new Http(backend, options);
				},
					deps: [MockBackend, BaseRequestOptions]
				},
				MockBackend,
				BaseRequestOptions,
				TranslationService
			]
		});
	});

	beforeEach(inject([TranslationService], (service: TranslationService) => {
		translationService = service;
	}));

	it('should be created', () => {
		expect(translationService).toBeTruthy();
	});

	it('should mapLanguage notification to ILanguage', () => {
		const lang = translationService.mapLanguage({ lang: 'fr', translations: null });
		expect(lang).toEqual({ name: 'Français', value: 'fr' });
	});

	it('should get current language', (done: DoneFn) => {
		translationService.use('it');
		translationService.$currentLanguage.subscribe(
			l => {
				expect(l).toEqual({ name: 'Italiano', value: 'it' });
				done();
			});
	});
});
