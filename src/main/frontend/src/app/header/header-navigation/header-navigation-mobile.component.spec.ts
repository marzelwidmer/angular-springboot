import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderNavigationMobileComponent } from './header-navigation-mobile.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { Http, HttpModule } from '@angular/http';
import { HttpLoaderFactory } from '../../app.module';
import { TranslationService } from '../../common/services/translation.service';

describe('HeaderNavigationMobileComponent', () => {
	let component: HeaderNavigationMobileComponent;
	let fixture: ComponentFixture<HeaderNavigationMobileComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [
				HttpModule,
				TranslateModule.forRoot({
					loader: {
						provide: TranslateLoader,
						useFactory: HttpLoaderFactory,
						deps: [Http]
					}
				}),
			],
			declarations: [HeaderNavigationMobileComponent],
			providers: [TranslationService]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(HeaderNavigationMobileComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should be created', () => {
		expect(component).toBeTruthy();
	});

	it('should change language', () => {
		const translationService = fixture.debugElement.injector.get(TranslationService);
		spyOn(translationService, 'use');
		component.changeLanguage({ name: 'English', value: 'en' });
		expect(translationService.use).toHaveBeenCalledWith('en');
	});
});
