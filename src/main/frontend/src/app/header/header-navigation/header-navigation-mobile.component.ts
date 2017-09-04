import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ILanguage, TranslationService } from '../../common/services/translation.service';

@Component({
	selector: 'myh-header-navigation-mobile',
	templateUrl: './header-navigation-mobile.component.html'
})
export class HeaderNavigationMobileComponent {

	@Input()
	public open: boolean;

	@Output()
	public onCloseClick = new EventEmitter<boolean>();

	constructor(public translation: TranslationService) {
	}

	changeLanguage(language: ILanguage) {
		this.translation.use(language.value);
		this.onCloseClick.emit(true);
	}
}
