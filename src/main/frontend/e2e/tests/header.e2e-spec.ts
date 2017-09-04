import { OverviewPage } from '../pages/overview.po';

describe('Header', () => {
	let overviewPage: OverviewPage;

	beforeEach(() => {
		overviewPage = new OverviewPage();
	});

	it('should display myhelsana', () => {
		overviewPage.navigateTo();
		expect(overviewPage.header.getTitle()).toEqual('myHelsana');
	});

	it('should change language to it', () => {
		overviewPage.navigateTo();
		overviewPage.header.getLanguageDropdown().click();
		overviewPage.header.getLanguageDropdownItems()
			.filter(s => s.getText().then(text => text === 'IT'))
			.first()
			.click();
		expect(overviewPage.header.getLanguageDropdown().getText()).toEqual('IT');
	});
});
