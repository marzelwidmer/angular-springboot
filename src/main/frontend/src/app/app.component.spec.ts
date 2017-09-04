import { async, fakeAsync, inject, TestBed } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { HeaderModule } from './header/header.module';
import { FooterComponent } from './footer/footer.component';
import { Http, HttpModule } from '@angular/http';
import { HttpLoaderFactory } from './app.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslationService } from './common/services/translation.service';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable } from 'rxjs/Observable';

describe('AppComponent', () => {

	const windowMock = {
		getComputedStyle: () => {
			return {
				marginLeft: 10,
				marginRight: 5
			};
		}
	};

	const translationServiceMock = {
		use: () => {
			Observable.of({});
		},
		setDefaultLang: () => {
		},
		getBrowserLang: () => {
			return 'it';
		}
	};

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [
				HeaderModule,
				RouterTestingModule,
				HttpModule,
				TranslateModule.forRoot({
					loader: {
						provide: TranslateLoader,
						useFactory: HttpLoaderFactory,
						deps: [Http]
					}
				}),
			],
			declarations: [
				AppComponent,
				FooterComponent
			],
			providers: [
				{
					provide: TranslationService, useFactory: (() => {
					return translationServiceMock;
				})
				}
			],
			// TODO https://github.com/angular/angular/issues/15640
			// providers: [TranslationService, { provide: 'Window', useValue: windowMock }, { provide: 'Navigator', useValue: navigatorMock }],
		}).compileComponents();
	}));

	it('should create the app', async(() => {
		const fixture = TestBed.createComponent(AppComponent);
		const app = fixture.debugElement.componentInstance;
		expect(app).toBeTruthy();
	}));

	it('should test constructor', inject([TranslationService], fakeAsync((mockTranslationService) => {
		spyOn(translationServiceMock, 'setDefaultLang');
		spyOn(translationServiceMock, 'use');
		const fixture = TestBed.createComponent(AppComponent);
		const translationService = fixture.debugElement.injector.get(TranslationService);
		expect(translationService.setDefaultLang).toHaveBeenCalledWith('de');
		expect(translationService.use).toHaveBeenCalledWith('it');
	})));
});
