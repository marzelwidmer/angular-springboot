import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { OverviewComponent } from './overview.component';
import { TemplateModule } from '../../components/template/template.module';
import { PartnerService } from '../../common/services/partner.service';
import { Http, HttpModule } from '@angular/http';
import { TranslationService } from '../../common/services/translation.service';
import { HttpLoaderFactory } from '../../app.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { Observable } from 'rxjs/Observable';
import { RouterTestingModule } from '@angular/router/testing';
import { PersonSliderComponent } from './components/person-slider/person-slider.component';

describe('OverviewComponent', () => {
	const partnerMock = {
		get: () => {
			return Observable.of({ firstName: 'franz', lastName: 'Name' });
		}
	};

	let component: OverviewComponent;
	let fixture: ComponentFixture<OverviewComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [
				TemplateModule, HttpModule,
				TranslateModule.forRoot({
					loader: {
						provide: TranslateLoader,
						useFactory: HttpLoaderFactory,
						deps: [Http]
					}
				}),
				RouterTestingModule,
			],
			declarations: [OverviewComponent, PersonSliderComponent],
			providers: [{ provide: PartnerService, useValue: partnerMock }, TranslationService]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(OverviewComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should be created', () => {
		expect(component).toBeTruthy();
	});
});
