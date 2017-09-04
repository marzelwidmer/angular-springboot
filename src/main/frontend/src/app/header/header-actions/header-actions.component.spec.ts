import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderActionsComponent } from './header-actions.component';
import { DropdownComponent } from '../dropdown/dropdown.component';
import { Http, HttpModule } from '@angular/http';
import { HttpLoaderFactory } from '../../app.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { WhoAmIService } from '../who-am-i/who-am-i.service';
import { TranslationService } from '../../common/services/translation.service';
import { Observable } from 'rxjs/Observable';


describe('HeaderActionsComponent', () => {
	let component: HeaderActionsComponent;
	let fixture: ComponentFixture<HeaderActionsComponent>;

	beforeEach(async(() => {
		const whoAmIMock = {
			get: () => {
				return Observable.of({ firstName: 'franz', name: 'Name' });
			}
		};

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
			declarations: [HeaderActionsComponent, DropdownComponent],
			providers: [{ provide: WhoAmIService, useValue: whoAmIMock }, TranslationService]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(HeaderActionsComponent);
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
