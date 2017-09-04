import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileHeaderComponent } from './mobile-header.component';
import { Http, HttpModule } from '@angular/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpLoaderFactory } from '../../app.module';
import { InputModule } from '../../components/input/input.module';
import { HeaderNavigationDesktopComponent } from '../header-navigation/header-navigation-desktop.component';
import { HeaderNavigationMobileComponent } from '../header-navigation/header-navigation-mobile.component';
import { TranslationService } from '../../common/services/translation.service';
import { DropdownComponent } from '../dropdown/dropdown.component';

describe('MobileHeaderComponent', () => {
	let component: MobileHeaderComponent;
	let fixture: ComponentFixture<MobileHeaderComponent>;

	beforeEach(async(() => {
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
				MobileHeaderComponent, HeaderNavigationDesktopComponent, HeaderNavigationMobileComponent, DropdownComponent
			],
			providers: [TranslationService]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(MobileHeaderComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should be created', () => {
		expect(component).toBeTruthy();
	});

	it('should be open', () => {
		component.setModalOpen(true);
		expect(component.modalOpen).toBeTruthy();
	});

	it('should be closed initially', () => {
		expect(component.modalOpen).toBeFalsy();
	});

	it('should be closed', () => {
		component.setModalOpen(false);
		expect(component.modalOpen).toBeFalsy();
	});
});
