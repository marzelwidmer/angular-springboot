import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponent } from './footer.component';
import { Http, HttpModule } from '@angular/http';
import { HttpLoaderFactory } from '../app.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

describe('FooterComponent', () => {
	let component: FooterComponent;
	let fixture: ComponentFixture<FooterComponent>;
	const windowMock = {
		getComputedStyle: () => {
			return {
				marginLeft: 10,
				marginRight: 5
			};
		}
	};

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
			// https://github.com/angular/angular/issues/15640
			// providers: [{ provide: 'Window', useValue: windowMock }],
			declarations: [FooterComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(FooterComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should be created', () => {
		expect(component).toBeTruthy();
	});

	xit('should check getWidthSumOfElements', () => {
		const elements = [
			{
				nativeElement: { offsetWidth: 20 },
			}, {
				nativeElement: { offsetWidth: 60 },
			}
		];
		const width = component.getWidthSumOfElements(elements);
		expect(width).toBe(110);
	});

	xit('should test manageSize no wrap', () => {
		component.container = {
			nativeElement: {
				offsetWidth: 230
			}
		} as Element;

		component.navigationElements = {
			_results: [
				{
					nativeElement: { offsetWidth: 20 },
				}, {
					nativeElement: { offsetWidth: 60 },
				}
			]
		} as Elements;

		component.socialElements = {
			_results: [
				{
					nativeElement: { offsetWidth: 20 },
				}, {
					nativeElement: { offsetWidth: 60 },
				}
			]
		} as Elements;

		component.manageSize();
		expect(component.wrapped).toBeFalsy();
		expect(component.wrappedNavigation).toBeFalsy();
	});

	xit('should test manageSize with wrap', () => {
		component.container = {
			nativeElement: {
				offsetWidth: 220
			}
		} as Element;

		component.navigationElements = {
			_results: [
				{
					nativeElement: { offsetWidth: 20 },
				}, {
					nativeElement: { offsetWidth: 60 },
				}
			]
		} as Elements;

		component.socialElements = {
			_results: [
				{
					nativeElement: { offsetWidth: 20 },
				}, {
					nativeElement: { offsetWidth: 60 },
				}
			]
		} as Elements;

		component.manageSize();
		expect(component.wrapped).toBeTruthy();
		expect(component.wrappedNavigation).toBeFalsy();
	});

	xit('should test manageSize with complete wrap', () => {
		component.container = {
			nativeElement: {
				offsetWidth: 100
			}
		} as Element;

		component.navigationElements = {
			_results: [
				{
					nativeElement: { offsetWidth: 20 },
				}, {
					nativeElement: { offsetWidth: 60 },
				}
			]
		} as Elements;

		component.socialElements = {
			_results: [
				{
					nativeElement: { offsetWidth: 20 },
				}, {
					nativeElement: { offsetWidth: 60 },
				}
			]
		} as Elements;

		component.manageSize();
		expect(component.wrapped).toBeTruthy();
		expect(component.wrappedNavigation).toBeTruthy();
	});
});

interface Elements {
	_results: [Element];
}

interface Element {
	nativeElement: Styles;
}

interface Styles {
	offsetWidth: number;
}
