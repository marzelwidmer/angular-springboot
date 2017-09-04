import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownComponent } from './dropdown.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { Http, HttpModule } from '@angular/http';
import { HttpLoaderFactory } from '../../app.module';

describe('DropdownComponent', () => {
	let component: DropdownComponent;
	let fixture: ComponentFixture<DropdownComponent>;

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
			declarations: [DropdownComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(DropdownComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should be created', () => {
		expect(component).toBeTruthy();
	});

	it('should open dropdown', () => {
		component.open();
		expect(component.isOpen).toBeTruthy();
	});

	it('should initially be closed', () => {
		expect(component.isOpen).toBeFalsy();
	});

	it('should toggle to open', () => {
		component.toggle();
		expect(component.isOpen).toBeTruthy();
	});

	it('should should be closed after closing', () => {
		component.open();
		component.close();
		expect(component.isOpen).toBeFalsy();
	});

	it('should close after click on A tag', () => {
		component.open();
		component.inClick({ srcElement: { tagName: 'A' } });
		expect(component.isOpen).toBeFalsy();
	});

	it('should keep open after click on span tag', () => {
		component.open();
		component.inClick({ srcElement: { tagName: 'SPAN' } });
		expect(component.isOpen).toBeTruthy();
	});
});
