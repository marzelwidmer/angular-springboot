import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { Http, HttpModule } from '@angular/http';
import { HttpLoaderFactory } from '../../../../app.module';
import { ContractTableComponent } from './contract-table.component';

describe('ContractTableComponent', () => {
	let component: ContractTableComponent;
	let fixture: ComponentFixture<ContractTableComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ContractTableComponent],
			imports: [
				HttpModule,
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
		fixture = TestBed.createComponent(ContractTableComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should be created', () => {
		expect(component).toBeTruthy();
	});
});
