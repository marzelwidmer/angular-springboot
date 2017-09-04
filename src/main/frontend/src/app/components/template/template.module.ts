import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListBlockComponent } from './list-block/list-block.component';
import { DataBlockComponent } from './data-block/data-block.component';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';

@NgModule({
	imports: [
		CommonModule,
		TranslateModule,
		RouterModule
	],
	declarations: [ListBlockComponent, DataBlockComponent],
	exports: [ListBlockComponent, DataBlockComponent]
})
export class TemplateModule {
}
