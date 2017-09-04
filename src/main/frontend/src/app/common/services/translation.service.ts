import { Injectable } from '@angular/core';
import {
	LangChangeEvent, MissingTranslationHandler, TranslateCompiler, TranslateLoader, TranslateParser,
	TranslateService
} from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { TranslateStore } from '@ngx-translate/core/src/translate.store';
import 'rxjs/add/operator/filter';


@Injectable()
export class TranslationService extends TranslateService {

	public languages: [ILanguage] = LANGUAGES;
	public $currentLanguage = new BehaviorSubject(this.mapLanguage({ lang: this.currentLang, translations: null }));

	constructor(store: TranslateStore, currentLoader: TranslateLoader, compiler: TranslateCompiler, parser: TranslateParser, missingTranslationHandler: MissingTranslationHandler) {
		super(store, currentLoader, compiler, parser, missingTranslationHandler);
		this.onLangChange
			.filter(s => !!s)
			.subscribe(newLanguage => {
				this.$currentLanguage.next(this.mapLanguage(newLanguage));
			});
	}

	mapLanguage(newLanguage: LangChangeEvent): ILanguage {
		return this.languages.find(language => newLanguage.lang === language.value);
	}
}

const LANGUAGES: [ILanguage] = [
	{ name: 'Deutsch', value: 'de' },
	{ name: 'English', value: 'en' },
	{ name: 'Français', value: 'fr' },
	{ name: 'Italiano', value: 'it' }
];

export interface ILanguage {
	name: string;
	value: string;
}
