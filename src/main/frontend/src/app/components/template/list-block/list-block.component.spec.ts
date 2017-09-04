import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBlockComponent } from './list-block.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { Http, HttpModule } from '@angular/http';
import { HttpLoaderFactory } from '../../../app.module';
import { RouterTestingModule } from '@angular/router/testing';

describe('ListBlockComponent', () => {
	let component: ListBlockComponent;
	let fixture: ComponentFixture<ListBlockComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ListBlockComponent],
			imports: [
				HttpModule,
				TranslateModule.forRoot({
					loader: {
						provide: TranslateLoader,
						useFactory: HttpLoaderFactory,
						deps: [Http]
					}
				}),
				RouterTestingModule
			]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ListBlockComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should be created', () => {
		expect(component).toBeTruthy();
	});
});
