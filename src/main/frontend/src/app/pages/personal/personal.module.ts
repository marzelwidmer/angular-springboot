import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalRouting } from './personal.routing';
import { PersonalComponent } from './personal.component';
import { TemplateModule } from '../../components/template/template.module';
import { ContractTableComponent } from './components/contract-table/contract-table.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
	imports: [
		PersonalRouting,
		CommonModule,
		TemplateModule,
		TranslateModule
	],
	declarations: [PersonalComponent, ContractTableComponent]
})
export class PersonalModule {
}
