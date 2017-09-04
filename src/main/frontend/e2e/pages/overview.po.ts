import { browser, by, element, ElementFinder } from 'protractor';
import { Page } from './Page';
import { promise } from 'selenium-webdriver';

export class OverviewPage extends Page {
	private messageBlock = element(by.css('[e2e-id="message-block"]'));
	private documentBlock = element(by.css('[e2e-id="document-block"]'));
	private orderBlock = element(by.css('[e2e-id="order-block"]'));

	navigateTo() {
		return browser.get('/');
	}

	getMessageBlock(): ElementFinder {
		return this.messageBlock;
	}

	getDocumentBlock(): ElementFinder {
		return this.documentBlock;
	}

	getOrderBlock(): ElementFinder {
		return this.orderBlock;
	}
}
