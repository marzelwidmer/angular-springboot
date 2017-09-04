import { Component } from '@angular/core';
import { TranslationService } from './common/services/translation.service';

@Component({ // tslint:disable-next-line
	selector: 'my-helsana',
	templateUrl: './app.component.html'
})
export class AppComponent {
	// TODO Inject navigator Object https://github.com/angular/angular/issues/15640
	constructor(private translate: TranslationService) {
		translate.setDefaultLang('de');
		translate.use(translate.getBrowserLang());
	}
}
