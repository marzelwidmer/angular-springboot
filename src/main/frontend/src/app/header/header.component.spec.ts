import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { HeaderActionsComponent } from './header-actions/header-actions.component';
import { Http, HttpModule } from '@angular/http';
import { HttpLoaderFactory } from '../app.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HeaderNavigationDesktopComponent } from './header-navigation/header-navigation-desktop.component';
import { MobileHeaderComponent } from './mobile-header/mobile-header.component';
import { InputModule } from '../components/input/input.module';
import { HeaderNavigationMobileComponent } from './header-navigation/header-navigation-mobile.component';
import { WhoAmIService } from './who-am-i/who-am-i.service';
import { TranslationService } from '../common/services/translation.service';
import { Observable } from 'rxjs/Observable';
import { DropdownComponent } from './dropdown/dropdown.component';

describe('HeaderComponent', () => {
	let component: HeaderComponent;
	let fixture: ComponentFixture<HeaderComponent>;

	beforeEach(async(() => {
		const whoAmIMock = {
			get: () => {
				return Observable.of({ firstName: 'franz', name: 'Name' });
			}
		};
		TestBed.configureTestingModule({
			imports: [
				HttpModule,
				InputModule,
				TranslateModule.forRoot({
					loader: {
						provide: TranslateLoader,
						useFactory: HttpLoaderFactory,
						deps: [Http]
					}
				}),
			],
			declarations: [
				HeaderComponent, HeaderActionsComponent, HeaderNavigationDesktopComponent, MobileHeaderComponent,
				HeaderNavigationMobileComponent, DropdownComponent
			],
			providers: [{ provide: WhoAmIService, useValue: whoAmIMock }, TranslationService]

		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(HeaderComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should be created', () => {
		expect(component).toBeTruthy();
	});
});
