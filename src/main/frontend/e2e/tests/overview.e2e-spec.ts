import { OverviewPage } from '../pages/overview.po';

describe('Overview', () => {
	let overviewPage: OverviewPage;

	beforeEach(() => {
		overviewPage = new OverviewPage();
	});

	it('should display messages', () => {
		overviewPage.navigateTo();
		expect(overviewPage.getMessageBlock().isDisplayed()).toBeTruthy();
	});

	it('should display documents', () => {
		overviewPage.navigateTo();
		expect(overviewPage.getDocumentBlock().isDisplayed()).toBeTruthy();
	});

	it('should display orders', () => {
		overviewPage.navigateTo();
		expect(overviewPage.getOrderBlock().isDisplayed()).toBeTruthy();
	});
});
