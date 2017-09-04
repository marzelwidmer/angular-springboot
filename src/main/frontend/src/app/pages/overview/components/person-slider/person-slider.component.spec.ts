import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { PersonSliderComponent } from './person-slider.component';
import { Http, HttpModule } from '@angular/http';
import { HttpLoaderFactory } from '../../../../app.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { PartnerService } from '../../../../common/services/partner.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

describe('PersonSliderComponent', () => {
	let component: PersonSliderComponent;
	let fixture: ComponentFixture<PersonSliderComponent>;
	let partnerService: PartnerService;
	const getSubject = new BehaviorSubject({
		customers: [
			{
				person: {
					firstName: 'first',
					lastName: 'last',
				}
			}
		]
	});
	const partnerServiceStub = {
		get: function () {
			return getSubject;
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
			providers: [{ provide: PartnerService, useValue: partnerServiceStub }],
			declarations: [PersonSliderComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(PersonSliderComponent);
		component = fixture.componentInstance;
		partnerService = fixture.debugElement.injector.get(PartnerService);
		fixture.detectChanges();
	});

	it('should be created', () => {
		expect(component).toBeTruthy();
	});

	it('should initially call get partnerService', () => {
		expect(component.members.length).toBe(1);
	});

	describe('PersonSliderComponent with two Members', () => {
		beforeEach(() => {
			getSubject.next({
				customers: [
					{
						person: {
							firstName: 'first',
							lastName: 'last',
						}
					}, {
						person: {
							firstName: 'second',
							lastName: 'last',
						}
					}
				]
			});
		});

		it('should members update on change', () => {
			expect(component.members.length).toBe(2);
		});

		it('should check initial slider index', () => {
			expect(component.index).toBe(0);
		});

		it('should increment index', () => {
			component.increment();
			expect(component.index).toBe(1);
		});

		it('should increment index and over threshold', () => {
			component.increment();
			component.increment();
			expect(component.index).toBe(0);
		});

		it('should increment index and under threshold', () => {
			component.decrement();
			expect(component.index).toBe(1);
		});
	});
});
