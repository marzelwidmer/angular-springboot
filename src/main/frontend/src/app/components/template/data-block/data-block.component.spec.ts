import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { Http, HttpModule } from '@angular/http';
import { HttpLoaderFactory } from '../../../app.module';
import {RouterModule} from '@angular/router';

import { DataBlockComponent } from './data-block.component';

describe('DataBlockComponent', () => {
	let component: DataBlockComponent;
	let fixture: ComponentFixture<DataBlockComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [DataBlockComponent],
			imports: [
				HttpModule,
				RouterModule,
				TranslateModule.forRoot({
					loader: {
						provide: TranslateLoader,
						useFactory: HttpLoaderFactory,
						deps: [Http]
					}
				}),
			]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(DataBlockComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should be created', () => {
		expect(component).toBeTruthy();
	});
});
