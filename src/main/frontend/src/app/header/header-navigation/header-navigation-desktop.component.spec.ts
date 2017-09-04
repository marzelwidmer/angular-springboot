import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderNavigationDesktopComponent } from './header-navigation-desktop.component';
import { Http, HttpModule } from '@angular/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpLoaderFactory } from '../../app.module';


describe('HeaderNavigationComponent', () => {
	let component: HeaderNavigationDesktopComponent;
	let fixture: ComponentFixture<HeaderNavigationDesktopComponent>;

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
			declarations: [HeaderNavigationDesktopComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(HeaderNavigationDesktopComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should be created', () => {
		expect(component).toBeTruthy();
	});
});
