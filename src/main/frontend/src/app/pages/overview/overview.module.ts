import { NgModule } from '@angular/core';
import { OverviewRouting } from './overview.routing';
import { OverviewComponent } from './overview.component';
import { TemplateModule } from '../../components/template/template.module';
import { PersonSliderComponent } from './components/person-slider/person-slider.component';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
	imports: [
		OverviewRouting,
		TemplateModule,
		CommonModule,
		TranslateModule
	],
	declarations: [OverviewComponent, PersonSliderComponent]
})
export class OverviewModule {
}
