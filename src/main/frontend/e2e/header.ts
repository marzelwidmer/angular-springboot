import { by, element, ElementArrayFinder, ElementFinder } from 'protractor';
import { promise } from 'selenium-webdriver';

export class Header {
	private title = element(by.css('[e2e-id="title"]'));
	private languageDropdown = element(by.css('[e2e-id="language-dropdown"]'));
	private languageDropdownItems = element.all(by.css('[e2e-class|="language"]'));


	getTitle(): promise.Promise<string> {
		return this.title.getText();
	}

	getLanguageDropdown(): ElementFinder {
		return this.languageDropdown;
	}

	getLanguageDropdownItems(): ElementArrayFinder {
		return this.languageDropdownItems;
	}
}
