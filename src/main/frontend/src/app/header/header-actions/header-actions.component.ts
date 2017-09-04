import { Component } from '@angular/core';
import { WhoAmIService } from '../who-am-i/who-am-i.service';
import { ILanguage, TranslationService } from '../../common/services/translation.service';


@Component({
	selector: 'myh-header-actions',
	templateUrl: './header-actions.component.html'
})
export class HeaderActionsComponent {

	constructor(public whoAmIService: WhoAmIService, public translate: TranslationService) {
	}

	changeLanguage(language: ILanguage) {
		this.translate.use(language.value);
	}
}
